/* ==========================================================
   Soul Land: Awakening World: Wiki
   Router + rendering (single page, hash-based navigation #/...)
   ========================================================== */

/* ---------- Static UI labels ---------- */
const LABELS = {
  home: 'Home',
  searchPlaceholder: 'Search…',
  noResults: 'No results yet. Check back soon!',
  openMap: 'Open interactive map',
  closeMap: 'Close',
  zoomIn: 'Zoom in',
  zoomOut: 'Zoom out',
  resetView: 'Reset view',
  fullscreen: 'Fullscreen',
  mapSub: 'Continent Zone',
  cost: 'Cost',
  cd: 'CD',
  slotNormal: 'Normal',
  slotInitiative: 'Initiative',
  panelNormal: 'Normal Attack & Initiative',
  panelUltimate: 'Ultimate',
  panelSkill: 'Skill',
  panelPassive: 'Passive',
  panelFusion: 'Fusion Skill',
  panelSkins: 'Skins',
  slotFusion: 'Fusion',
  fusesWith: 'Fuses with',
  slotSkill1: 'Skill 1',
  slotSkill2: 'Skill 2',
  slotSkill3: 'Skill 3',
  slotSkill4: 'Skill 4',
  slotSkill5: 'Skill 5',
  slotSkill6: 'Skill 6',
  heroTitle: 'Carve Your Legend',
  heroText: 'A community-built archive of the Soul Land universe: every Spirit, every Spirimon, every corner of the world, gathered by Spirimasters for Spirimasters on the road to Douluo.',
};

/* ---------- Nav ---------- */
function buildNav(){
  const nav = document.getElementById('mainNav');
  const route = parseRoute();
  nav.innerHTML = `<a href="#/" class="${route.view==='home'?'active':''}">${LABELS.home}</a>` +
    CATEGORIES.map(cat =>
      `<a href="#/${cat.id}" class="${route.cat===cat.id?'active':''}">${categoryLabel(cat)}</a>`
    ).join('');
  nav.classList.remove('open');
  document.getElementById('hamburgerBtn')?.classList.remove('open');
}

document.getElementById('hamburgerBtn')?.addEventListener('click', () => {
  document.getElementById('mainNav').classList.toggle('open');
  document.getElementById('hamburgerBtn').classList.toggle('open');
});

/* ---------- Router ---------- */
function parseRoute(){
  const hash = location.hash.replace(/^#\/?/, '');
  if (!hash) return { view:'home' };
  const parts = hash.split('/').filter(Boolean);
  const cat = CATEGORIES.find(c => c.id === parts[0]);
  if (!cat) return { view:'home' };
  if (parts[1]){
    const id = decodeURIComponent(parts[1]);
    // Soulcores and Spiribones live inside the Bag category's special
    // detail layouts, not the standalone (Spirit-style) detail page.
    if (cat.id === 'objets'){
      const entry = getPages('objets').find(p => p.id === id);
      if (entry && (entry.bagType === 'soulcore' || entry.bagType === 'spiribone' || entry.bagType === 'halo')){
        return { view:'category', cat: cat.id, focusId: id };
      }
    }
    return { view:'detail', cat:cat.id, id };
  }
  return { view:'category', cat:cat.id };
}

function getPages(catId){ return (window.WIKI && window.WIKI[catId]) || []; }

function escapeHtml(str){
  return (str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// Resolves whether to show the locally-hosted image or the external URL,
// based on the per-entry switch (defaults to local when unset, for
// backward compatibility with entries saved before this field existed).
function effectiveImage(p){
  if (p.useLocalImage === false && p.imageUrl) return p.imageUrl;
  return p.coverImage || p.image || p.imageUrl || p.mapFile || '';
}

// Highlights damage-formula text like "22680+1532,4%+41,4% ATK" or "12,5% ATK"
// (purely visual, not clickable). Applied before the glossary pass, on plain
// text, so it never touches already-inserted tags.
function highlightStatFormulas(escapedText){
  // Patterns in priority order — earlier patterns claim their text first,
  // later patterns skip anything that overlaps an already-claimed range.
  const patterns = [
    /\d[\d.,]*%?(?:\s*\+\s*\d[\d.,]*%?)*\s*ATK/g,           // ATK-suffixed formulas
    /\d+(?:[.,]\d+)?%(?:\s*\/\s*\d+(?:[.,]\d+)?%)+\.?/g,    // slash-separated percent lists
    /\d[\d.,]*%?(?:\+\d[\d.,]*%?){2,}/g,                     // multi-plus damage formulas (2+ segments)
    /\+\d+(?:[.,]\d+)?%/g,                                   // simple "+2%" style boosts
    /\d+(?:[.,]\d+)?%/g,                                     // any bare percentage left over (e.g. "15%")
  ];
  const ranges = [];
  function overlapsExisting(start, end){
    return ranges.some(r => start < r.end && end > r.start);
  }
  patterns.forEach(re => {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(escapedText))){
      const start = m.index, end = start + m[0].length;
      if (!overlapsExisting(start, end)) ranges.push({ start, end });
      if (m[0].length === 0) re.lastIndex++; // safety against zero-length matches
    }
  });
  ranges.sort((a, b) => a.start - b.start);
  let out = '';
  let last = 0;
  ranges.forEach(r => {
    out += escapedText.slice(last, r.start);
    out += `<span class="stat-formula">${escapedText.slice(r.start, r.end)}</span>`;
    last = r.end;
  });
  out += escapedText.slice(last);
  return out;
}

// Turns [Term] into a clickable tooltip if the term exists in the glossary
// (content/glossary.js). Otherwise, leaves the text as-is.
// Looks up a glossary term ignoring case (exact match first, for speed).
function glossaryLookup(term){
  if (!window.GLOSSARY) return null;
  const t = term.trim();
  if (window.GLOSSARY[t] !== undefined) return window.GLOSSARY[t];
  const lower = t.toLowerCase();
  const key = Object.keys(window.GLOSSARY).find(k => k.toLowerCase() === lower);
  return key !== undefined ? window.GLOSSARY[key] : null;
}

function parseDesc(text){
  let withStats = highlightStatFormulas(escapeHtml(text));
  withStats = withStats.replace(/\[([^\[\]]+)\]\((personnages|monstres|objets|zones|trials)\/([a-zA-Z0-9\-_]+)\)/g, (match, linkText, cat, id) => {
    return `<a href="#/${cat}/${encodeURIComponent(id)}" class="desc-link">${linkText}</a>`;
  });
  let withGlossary = withStats.replace(/\[([^\[\]]+)\]/g, (match, term) => {
    const def = glossaryLookup(term);
    if (!def) return match;
    return `<span class="gloss-term" tabindex="0">[${term}]<span class="gloss-tip">${escapeHtml(def)}</span></span>`;
  });
  withGlossary = withGlossary.replace(/\*\*([^\n*]+)\*\*/g, '<strong>$1</strong>');
  withGlossary = withGlossary.replace(/_([^\n_]+)_/g, '<em>$1</em>');
  const lines = withGlossary.split('\n');
  let out = '';
  let inList = false;
  lines.forEach(line => {
    const bulletMatch = line.match(/^\s*\*\s+(.*)$/);
    if (bulletMatch){
      if (!inList){ out += '<ul class="desc-list">'; inList = true; }
      out += `<li>${bulletMatch[1]}</li>`;
    } else {
      if (inList){ out += '</ul>'; inList = false; }
      out += line + '\n';
    }
  });
  if (inList) out += '</ul>';
  return out;
}
document.addEventListener('click', (e) => {
  const term = e.target.closest('.gloss-term');
  document.querySelectorAll('.gloss-term.open').forEach(el => { if (el !== term) el.classList.remove('open'); });
  if (term) term.classList.toggle('open');
});

/* ---------- Rendering ---------- */
const app = document.getElementById('appMain');

function render(){
  const route = parseRoute();
  buildNav();
  if (route.view === 'home') renderHome();
  else if (route.view === 'category') renderCategoryView(route.cat, route.focusId);
  else if (route.view === 'detail') renderDetailView(route.cat, route.id);
  window.scrollTo({ top:0, behavior:'instant' in window ? 'instant' : 'auto' });
  app.classList.remove('fade-in');
  // Force a reflow so the animation restarts even if the class never left the DOM.
  void app.offsetWidth;
  app.classList.add('fade-in');
}

// Fixed, full-viewport character art layer behind the page content.
// Stays put while scrolling, shows the full image (never cropped),
// and doesn't touch the site's existing background colors.
function setCharBackground(url){
  let layer = document.getElementById('charBgLayer');
  if (!layer){
    layer = document.createElement('div');
    layer.id = 'charBgLayer';
    document.body.insertBefore(layer, document.body.firstChild);
  }
  if (url){
    layer.style.backgroundImage = `url('${encodeURI(url)}')`;
    layer.style.display = 'block';
  } else {
    layer.style.display = 'none';
  }
}

// Mirrored left-side layer showing the fusion partner's art, flipped
// horizontally so both characters visually face the centered content.
function setCharBackgroundLeft(url){
  let layer = document.getElementById('charBgLayerLeft');
  if (!layer){
    layer = document.createElement('div');
    layer.id = 'charBgLayerLeft';
    document.body.insertBefore(layer, document.body.firstChild);
  }
  if (url){
    layer.style.backgroundImage = `url('${encodeURI(url)}')`;
    layer.style.display = 'block';
  } else {
    layer.style.display = 'none';
  }
}

function renderHome(){
  setCharBackground(null);
  setCharBackgroundLeft(null);
  app.innerHTML = `
    <div class="hero">
      <div class="eyebrow">Soul Land · Awakening World</div>
      <h2>${LABELS.heroTitle}</h2>
      <p>${LABELS.heroText}</p>
    </div>
    <div class="category-grid">
      ${CATEGORIES.map(cat => `
        <div class="category-card" data-cat="${cat.id}">
          <div class="icon">${cat.icon}</div>
          <h3>${categoryLabel(cat)}</h3>
          <div class="count">${getPages(cat.id).length} page${getPages(cat.id).length>1?'s':''}</div>
        </div>
      `).join('')}
    </div>
  `;
  app.querySelectorAll('.category-card').forEach(el => {
    el.addEventListener('click', () => { location.hash = `#/${el.dataset.cat}`; });
  });
}

const GROUPED_CATEGORIES = ['objets', 'monstres'];

// Fixed, non-editable native menu for the Bag page — matches the game's
// own bag tabs. Unrelated to the user-defined "Category" grouping.
// The 5 known Spirit/Soulcore type names — reused for icon lookups everywhere.
const SOULCORE_TYPES = ['Bruiser', 'Control', 'Defense', 'Agility', 'Support'];
const MECHANICS = ['Vibration', 'Electrified', 'Flash', 'Poison', 'Scorch', 'Laceration', 'Severe Wound'];
function typeIconPath(type){ return `images/spirit-types/${type.toLowerCase()}.png`; }
function matchKnownType(name){
  return SOULCORE_TYPES.find(t => t.toLowerCase() === (name || '').toLowerCase());
}

const BEAST_MODES = [
  { id:'beastlord', label:'BeastLord' },
  { id:'boss', label:'Boss' },
  { id:'huntbounty', label:'Hunter Bounty' },
];

const BAG_TYPES = [

  { id:'item', label:'Item', icon:'images/bag-types/item.png' },
  { id:'material', label:'Material', icon:'images/bag-types/material.png' },
  { id:'halo', label:'Halo', icon:'images/bag-types/halo.png' },
  { id:'spiribone', label:'Spiribone', icon:'images/bag-types/spiribone.png' },
  { id:'fragment', label:'Fragment', icon:'images/bag-types/fragment.png' },
  { id:'soulcore', label:'Soulcore', icon:'images/bag-types/soulcore.png' },
];

function renderCatPager(totalPages, current, onChange){
  const pager = document.getElementById('catPager');
  if (!pager) return;
  if (totalPages <= 1){ pager.innerHTML = ''; return; }
  let html = `<div class="btn" data-p="prev" style="padding:8px 14px;">‹ Prev</div>`;
  html += `<span style="align-self:center; color:var(--text-dim); font-size:14px; padding:0 8px;">Page ${current} / ${totalPages}</span>`;
  html += `<div class="btn" data-p="next" style="padding:8px 14px;">Next ›</div>`;
  pager.innerHTML = html;
  pager.querySelectorAll('[data-p]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.p === 'prev' && current > 1) onChange(current - 1);
      if (btn.dataset.p === 'next' && current < totalPages) onChange(current + 1);
    });
  });
}

const BEAST_MODE_TYPES = {
  beastlord: ['Beast','Volant','Serpent','Plant','Scorpion','Insect','Spider','Phantasm','Direbear','Wyvern','Psychic','Bulwark'],
  boss: [], // TODO: fill in with the Boss Rush type list
  huntbounty: [], // TODO: fill in with the Hunter Bounty type list
};
function monsterTypeIconPath(type, folder){ return `images/${folder}/${(type||'beast').toLowerCase()}.png`; }

function bagCardHTML(p){
  return `
    <a href="#/objets/${encodeURIComponent(p.id)}" class="spiribone-card" style="text-decoration:none;">
      <div class="spiribone-card-thumb">
        ${effectiveImage(p) ? `<img src="${encodeURI(effectiveImage(p))}" alt="" loading="lazy">` : ''}
      </div>
      <div class="spiribone-card-name">${p.title}</div>
    </a>
  `;
}

function pageCardHTML(p){
  return `
    <div class="page-card${p.rarity ? ' card-' + p.rarity.toLowerCase() : ''}" data-id="${p.id}">
      <div class="thumb">
        ${effectiveImage(p) ? `<img src="${encodeURI(effectiveImage(p))}" alt="" loading="lazy">` : ''}
        ${p.rarity ? `<span class="rarity-pill rarity-${p.rarity}">${p.rarity}</span>` : ''}
      </div>
      <div class="body">
        <h4>${p.title}</h4>
        <div class="subtitle">${p.subtitle || ''}</div>
        <div class="tag-row">${(p.tags||[]).map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
      </div>
    </div>
  `;
}

function beastCardHTML(p, isSelected){
  const levelStat = (p.stats || []).find(s => /^lv\.?|level/i.test(s.label || ''));
  return `
    <div class="beast-card${isSelected ? ' selected' : ''}" data-id="${p.id}" style="--beast-panel-color:${p.panelColor || 'var(--gold)'};">
      <div class="beast-card-art">
        ${effectiveImage(p) ? `<img src="${encodeURI(effectiveImage(p))}" alt="" loading="lazy">` : ''}
      </div>
      <div class="beast-card-divider">
        <span class="beast-card-line"></span>
        <span class="beast-card-type-icon" title="${p.monsterType || ''}">
          <img src="${monsterTypeIconPath(p.monsterType, 'monster-types')}" alt="">
        </span>
        <span class="beast-card-line"></span>
      </div>
      <div class="beast-card-body">
        ${levelStat ? `<div class="beast-card-level">${escapeHtml(levelStat.value)}</div>` : ''}
        <div class="beast-card-name">${p.title}</div>
      </div>
    </div>
  `;
}

function renderCategoryView(catId, focusId){
  setCharBackground(null);
  setCharBackgroundLeft(null);
  const cat = CATEGORIES.find(c => c.id === catId);
  const pages = getPages(catId);
  const availableTags = (window.TAGS && window.TAGS[catId]) || [];
  const showRarityFilter = catId === 'personnages';

  app.innerHTML = `
    <div class="breadcrumbs">
      <a href="#/">${LABELS.home}</a><span class="sep">/</span><span>${categoryLabel(cat)}</span>
    </div>
    <div class="section-title">
      <h2>${categoryLabel(cat)}</h2>
      <span class="sub">${pages.length} ${pages.length > 1 ? 'entries' : 'entry'}</span>
    </div>
    <div class="${catId === 'objets' || catId === 'monstres' ? 'bag-layout' : ''}">
      ${catId === 'objets' ? `
        <div class="bag-type-menu" id="bagTypeMenu">
          <div class="bag-type-indicator" id="bagTypeIndicator"></div>
          <div class="bag-type-btn active" data-type="">
            <div class="bag-type-tile bag-type-all">All</div>
          </div>
          ${BAG_TYPES.map(bt => `
            <div class="bag-type-btn" data-type="${bt.id}">
              <div class="bag-type-tile" style="background-image:url('${encodeURI(bt.icon)}')"></div>
            </div>
          `).join('')}
        </div>
      ` : ''}
      ${catId === 'monstres' ? `
        <div class="beast-mode-menu" id="beastModeMenu">
          <div class="beast-mode-indicator" id="beastModeIndicator"></div>
          ${BEAST_MODES.map((m, i) => `
            <div class="beast-mode-btn beast-mode-${m.id}${i === 0 ? ' active' : ''}" data-mode="${m.id}">
              <div class="beast-mode-tile" style="background-image:url('images/beast-modes/beast-icon.png')"></div>
              <span class="beast-mode-label">${m.label}</span>
            </div>
          `).join('')}
        </div>
      ` : ''}
      <div class="bag-content">
        <div class="search-bar${(catId === 'monstres' || catId === 'objets' || catId === 'personnages') ? ' with-select' : ''}">
          <input type="text" id="searchInput" placeholder="${LABELS.searchPlaceholder}">
          ${catId === 'personnages' ? `
            <select id="spiritMechanicFilterSelect">
              <option value="">All Mechanics</option>
              ${MECHANICS.map(m => `<option value="${m}">${m}</option>`).join('')}
            </select>
          ` : ''}
          ${catId === 'objets' ? `
            <select id="spiriboneMechanicFilterSelect" style="display:none;">
              <option value="">All Mechanics</option>
              ${MECHANICS.map(m => `<option value="${m}">${m}</option>`).join('')}
            </select>
          ` : ''}
          ${catId === 'monstres' ? `
            <select id="monsterTypeSelect">
              <option value="">All Types</option>
              ${BEAST_MODE_TYPES.beastlord.map(t => `<option value="${t}">${t}</option>`).join('')}
            </select>
          ` : ''}
          ${catId === 'objets' ? `
            <select id="spiriboneGenreFilterSelect" style="display:none;">
              <option value="">All Genres</option>
              <option value="Arm Bone (L)">Arm Bone (L)</option>
              <option value="Arm Bone (R)">Arm Bone (R)</option>
              <option value="Leg Bone (L)">Leg Bone (L)</option>
              <option value="Leg Bone (R)">Leg Bone (R)</option>
              <option value="Skull">Skull</option>
              <option value="Trunk">Trunk</option>
            </select>
            <select id="spiriboneTypeFilterSelect" style="display:none;">
              <option value="">All Types</option>
              <option value="Beast">Beast</option>
              <option value="Volant">Volant</option>
              <option value="Serpent">Serpent</option>
              <option value="Plant">Plant</option>
              <option value="Scorpion">Scorpion</option>
              <option value="Insect">Insect</option>
              <option value="Spider">Spider</option>
              <option value="Phantasm">Phantasm</option>
              <option value="Direbear">Direbear</option>
              <option value="Wyvern">Wyvern</option>
              <option value="Psychic">Psychic</option>
              <option value="Bulwark">Bulwark</option>
            </select>
            <select id="haloTypeFilterSelect" style="display:none;">
              <option value="">All Spirits</option>
              <option value="Bruiser">Bruiser</option>
              <option value="Control">Control</option>
              <option value="Defense">Defense</option>
              <option value="Agility">Agility</option>
              <option value="Support">Support</option>
            </select>
          ` : ''}
        </div>
        ${catId === 'monstres' ? `
          <div class="zone-selector-row" id="zoneSelectorRow"></div>
        ` : ''}
        ${(catId !== 'monstres' && (availableTags.length || showRarityFilter)) ? `
          <div class="filter-bar">
            ${showRarityFilter ? `
              <div class="filter-group">
                <span class="filter-label">Rarity</span>
                <div class="tag-checkbox-list" id="rarityFilterList">
                  ${['R','SR','SSR'].map(r => `<span class="tag-toggle rarity-toggle-${r}" data-rarity="${r}">${r}</span>`).join('')}
                </div>
              </div>
            ` : ''}
            ${availableTags.length ? `
              <div class="filter-group">
                <span class="filter-label">Tags</span>
                <div class="tag-checkbox-list" id="tagFilterList">
                  ${availableTags.map(tag => {
                    const known = matchKnownType(tag);
                    return known
                      ? `<span class="tag-toggle type-toggle" data-tag="${tag}" title="${tag}"><img class="type-icon" src="${typeIconPath(known)}" alt="${tag}"></span>`
                      : `<span class="tag-toggle" data-tag="${tag}">${tag}</span>`;
                  }).join('')}
                </div>
              </div>
            ` : ''}
          </div>
        ` : ''}
        ${catId === 'objets' ? `
          <div class="filter-bar" id="soulcoreFilterBar" style="display:none;">
            <div class="filter-group">
              <span class="filter-label">Rarity</span>
              <div class="tag-checkbox-list" id="soulcoreRarityFilterList">
                ${['SR','SSR'].map(r => `<span class="tag-toggle rarity-toggle-${r}" data-rarity="${r}">${r}</span>`).join('')}
              </div>
            </div>
            <div class="filter-group">
              <span class="filter-label">Type</span>
              <div class="tag-checkbox-list" id="soulcoreTypeFilterList">
                ${SOULCORE_TYPES.map(t => `<span class="tag-toggle type-toggle" data-type="${t}" title="${t}"><img class="type-icon" src="${typeIconPath(t)}" alt="${t}"></span>`).join('')}
              </div>
            </div>
          </div>
        ` : ''}
        <div id="pageGrid" class="${catId === 'objets' ? 'compact-grid' : ''}"></div>
        <div class="btn-row" id="catPager" style="justify-content:center; margin-top:20px;"></div>
        ${catId === 'monstres' ? `<div id="beastDescPanel"></div>` : ''}
        ${catId === 'objets' ? `
          <div class="soulcore-layout" id="soulcoreLayout" style="display:none;">
            <div class="soulcore-detail" id="soulcoreDetail"></div>
            <div class="soulcore-thumb-row" id="soulcoreThumbRow"></div>
          </div>
        ` : ''}
        ${catId === 'objets' ? `
          <div class="spiribone-layout" id="spiriboneLayout" style="display:none;">
            <div class="spiribone-list-col" id="spiriboneListCol">
              <div class="page-grid" id="spiriboneGrid"></div>
            </div>
            <div class="spiribone-desc-col" id="spiriboneDescCol"></div>
          </div>
        ` : ''}
        ${catId === 'objets' ? `
          <div class="spiribone-layout" id="haloLayout" style="display:none;">
            <div class="spiribone-list-col" id="haloListCol">
              <div class="page-grid" id="haloGrid"></div>
            </div>
            <div class="spiribone-desc-col" id="haloDescCol"></div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
  const grid = document.getElementById('pageGrid');
  const pager = document.getElementById('catPager');
  let selectedTags = [];
  let selectedRarities = [];
  let selectedBagType = '';
  let selectedBeastMode = 'beastlord';
  let selectedMonsterType = '';
  let selectedMonsterId = null;
  const allZones = getPages('zones');
  let selectedZone = allZones.length ? allZones[0].id : '';
  let selectedSoulcoreRarities = [];
  let selectedSpiriboneGenre = '';
  let selectedSpiriboneType = '';
  let openSpiriboneId = null;
  let selectedHaloType = '';
  let selectedSpiritMechanic = '';
  let selectedSpiriboneMechanic = '';
  let openHaloId = null;
  let selectedSoulcoreTypes = [];
  let soulcoreSelectedIndex = 0;
  let currentPage = 1;
  const PAGE_SIZE = catId === 'personnages' ? 24 : Infinity;

  function bindCardClicks(){
    grid.querySelectorAll('.page-card').forEach(el => {
      el.addEventListener('click', () => { location.hash = `#/${catId}/${encodeURIComponent(el.dataset.id)}`; });
    });
  }

  function draw(filter){
    const f = (filter || '').toLowerCase();
    const filtered = pages.filter(p => {
      const matchesSearch = !f || p.title.toLowerCase().includes(f) || (p.subtitle||'').toLowerCase().includes(f) ||
        (p.description||'').toLowerCase().includes(f) ||
        (p.tags||[]).some(tag => tag.toLowerCase().includes(f));
      const matchesTags = !selectedTags.length ||
        (p.tags||[]).some(tag => selectedTags.some(sel => sel.toLowerCase() === tag.toLowerCase()));
      const matchesRarity = !selectedRarities.length || selectedRarities.includes(p.rarity);
      const matchesBagType = !selectedBagType || p.bagType === selectedBagType;
      const matchesBeastMode = catId !== 'monstres' ||
        (p.beastMode || 'beastlord') === selectedBeastMode;
      const matchesZone = catId !== 'monstres' || selectedBeastMode !== 'beastlord' ||
        !selectedZone || p.zone === selectedZone;
      const matchesMonsterType = catId !== 'monstres' || !selectedMonsterType ||
        p.monsterType === selectedMonsterType;
      const matchesSpiriboneGenre = selectedBagType !== 'spiribone' || !selectedSpiriboneGenre ||
        p.spiriboneGenre === selectedSpiriboneGenre;
      const matchesSpiriboneType = selectedBagType !== 'spiribone' || !selectedSpiriboneType ||
        p.spiriboneType === selectedSpiriboneType;
      const matchesSpiritMechanic = catId !== 'personnages' || !selectedSpiritMechanic ||
        (p.mechanics || []).includes(selectedSpiritMechanic);
      return matchesSearch && matchesTags && matchesRarity && matchesBagType && matchesBeastMode && matchesZone && matchesMonsterType && matchesSpiriboneGenre && matchesSpiriboneType && matchesSpiritMechanic;
    });
    if (!filtered.length){
      grid.innerHTML = `<div class="empty-state"><div class="big">🗺️</div>${LABELS.noResults}</div>`;
      pager.innerHTML = '';
      return;
    }

    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    if (currentPage > totalPages) currentPage = totalPages;
    const pageStart = (currentPage - 1) * PAGE_SIZE;
    const pageItems = Number.isFinite(PAGE_SIZE) ? filtered.slice(pageStart, pageStart + PAGE_SIZE) : filtered;

    if (GROUPED_CATEGORIES.includes(catId)){
      const cardFn = catId === 'monstres' ? (p) => beastCardHTML(p, p.id === selectedMonsterId)
        : catId === 'objets' ? bagCardHTML
        : pageCardHTML;
      const groups = {};
      const noGroup = [];
      filtered.forEach(p => {
        if (p.category){ (groups[p.category] = groups[p.category] || []).push(p); }
        else { noGroup.push(p); }
      });
      let html = '';
      const gridClass = catId === 'objets' ? 'page-grid page-grid-circular'
        : catId === 'monstres' ? 'beast-card-row'
        : 'page-grid';
      Object.keys(groups).forEach(groupName => {
        html += `
          <div class="ability-panel">
            <div class="panel-title"><span class="dot"></span>${groupName}</div>
            <div class="${gridClass}">${groups[groupName].map(cardFn).join('')}</div>
          </div>
        `;
      });
      if (noGroup.length){
        html += `
          <div class="ability-panel">
            <div class="panel-title"><span class="dot"></span>Uncategorized</div>
            <div class="${gridClass}">${noGroup.map(cardFn).join('')}</div>
          </div>
        `;
      }
      grid.innerHTML = html;
    } else {
      grid.innerHTML = `<div class="page-grid">${pageItems.map(pageCardHTML).join('')}</div>`;
    }
    renderCatPager(totalPages, currentPage, (p) => { currentPage = p; draw(document.getElementById('searchInput').value); window.scrollTo({top:0, behavior:'smooth'}); });
    bindCardClicks();
    if (catId === 'monstres') bindBeastCardClicks(filtered);
  }

  function spiribonePageCardHTML(p){
    return `
      <div class="spiribone-card${p.id === openSpiriboneId ? ' selected' : ''}" data-id="${p.id}">
        <div class="spiribone-card-thumb">
          ${effectiveImage(p) ? `<img src="${encodeURI(effectiveImage(p))}" alt="" loading="lazy">` : ''}
        </div>
        <div class="spiribone-card-name">${p.title}</div>
      </div>
    `;
  }

  function drawSpiribones(filter){
    const f = (filter || '').toLowerCase();
    const filtered = pages.filter(p => {
      if (p.bagType !== 'spiribone') return false;
      const matchesSearch = !f || p.title.toLowerCase().includes(f) || (p.description||'').toLowerCase().includes(f);
      const matchesGenre = !selectedSpiriboneGenre || p.spiriboneGenre === selectedSpiriboneGenre;
      const matchesType = !selectedSpiriboneType || p.spiriboneType === selectedSpiriboneType;
      const matchesMechanic = !selectedSpiriboneMechanic || (p.mechanics || []).includes(selectedSpiriboneMechanic);
      return matchesSearch && matchesGenre && matchesType && matchesMechanic;
    });
    const spiribGrid = document.getElementById('spiriboneGrid');
    if (!filtered.length){
      spiribGrid.innerHTML = `<div class="empty-state"><div class="big">🦴</div>${LABELS.noResults}</div>`;
      return;
    }
    spiribGrid.innerHTML = filtered.map(spiribonePageCardHTML).join('');
    spiribGrid.querySelectorAll('.spiribone-card').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.dataset.id;
        if (openSpiriboneId === id){
          closeSpiriboneDesc();
        } else {
          openSpiriboneDesc(filtered.find(p => p.id === id));
        }
      });
    });
  }

  const SPIRIBONE_FAVORED_SPIRITS = {
    'Arm Bone (R)': ['Bruiser'],
    'Arm Bone (L)': ['Control', 'Defense'],
    'Leg Bone (R)': ['Agility'],
    'Leg Bone (L)': ['Support'],
    'Skull': ['Bruiser', 'Control', 'Defense', 'Agility', 'Support'],
    'Trunk': ['Bruiser', 'Control', 'Defense', 'Agility', 'Support'],
  };
  function favoredSpiritsRow(genre){
    const types = SPIRIBONE_FAVORED_SPIRITS[genre];
    if (!types || !types.length) return '';
    return `
      <div class="spiribone-compat-row">
        <span class="spiribone-compat-label">Compatible With</span>
        <div class="spiribone-compat-icons">
          ${types.map(t => `<img class="type-icon type-icon-gold" src="${typeIconPath(t)}" alt="${t}" title="${t}">`).join('')}
        </div>
      </div>
    `;
  }

  function openSpiriboneDesc(p){
    openSpiriboneId = p.id;
    const layout = document.getElementById('spiriboneLayout');
    const descCol = document.getElementById('spiriboneDescCol');
    layout.classList.add('open');
    const typeIcon = p.spiriboneType ? `<img class="type-icon type-icon-gold" src="${monsterTypeIconPath(p.spiriboneType, 'monster-types')}" alt="" title="${p.spiriboneType}">` : '';
    const skill = p.spiriboneSkill || {};
    const tiers = p.spiriboneTiers || [];
    const stars = p.spiriboneStarStats || [];
    let html = `
      <div class="spiribone-desc-close" id="spiriboneDescClose">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </div>
      <div class="spiribone-desc-image"><img src="${encodeURI(effectiveImage(p))}" alt=""></div>
      <div class="spiribone-title-row"><h3>${p.title}</h3>${typeIcon}</div>
      ${p.subtitle ? `<div class="subtitle" style="text-align:center;">${p.subtitle}</div>` : ''}
      <div class="spiribone-meta-row">
        ${p.spiriboneRating ? `<span class="spiribone-rating">Rating: ${escapeHtml(p.spiriboneRating)}</span>` : ''}
        <div class="tag-row">${(p.tags||[]).map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>
    `;
    if (skill.title || skill.description){
      html += `<div class="ability-panel"><div class="panel-title"><span class="dot"></span>Skill</div>${panelSkillBox(skill)}${favoredSpiritsRow(p.spiriboneGenre)}</div>`;
    }
    if (tiers.some(t => t.description)){
      html += `<div class="ability-panel"><div class="panel-title"><span class="dot"></span>Tiers</div>`;
      tiers.forEach(t => {
        if (!t.description) return;
        html += `<div class="tier"><span class="th">${escapeHtml(t.threshold||'')}</span>: ${parseDesc(t.description)}${t.condition ? ` <span class="cond">${escapeHtml(t.condition)}</span>` : ''}</div>`;
      });
      html += `</div>`;
    }
    html += `
      <div class="spiribone-starstats-wrap" id="spiriboneStarStatsWrap">
        <div class="ability-panel"><div class="panel-title"><span class="dot"></span>Star Stats</div>
          <table class="soulcore-value-table" style="text-align:left;">
            ${stars.map((s, i) => `
              <tr>
                <td style="text-align:left;">${escapeHtml(s.label || '')}</td>
                <td style="text-align:right; color:var(--gold-bright); white-space:nowrap;">
                  ${i > 0 ? `${['','2★','3★','4★','5★','6★'][i]} ${escapeHtml(s.value || 'Unlocked')}` : escapeHtml(s.value || '')}
                </td>
              </tr>
            `).join('')}
          </table>
        </div>
      </div>
      <div class="spiribone-toggle-btn" id="spiriboneStarStatsToggle">
        <span>View More</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      ${sourceLinkHTML(p)}
      ${containsPanelHTML(p)}
    `;
    descCol.innerHTML = `<div class="spiribone-desc-inner">${html}</div>`;
    document.getElementById('spiriboneStarStatsToggle').addEventListener('click', () => {
      const wrap = document.getElementById('spiriboneStarStatsWrap');
      const btn = document.getElementById('spiriboneStarStatsToggle');
      const isOpen = wrap.classList.toggle('open');
      btn.classList.toggle('open', isOpen);
      btn.querySelector('span').textContent = isOpen ? 'View Less' : 'View More';
    });
    document.getElementById('spiriboneDescClose').addEventListener('click', closeSpiriboneDesc);
    descCol.addEventListener('click', (e) => { if (e.target === descCol) closeSpiriboneDesc(); });
    document.querySelectorAll('#spiriboneGrid .spiribone-card').forEach(c => c.classList.toggle('selected', c.dataset.id === p.id));
    requestAnimationFrame(() => {
      descCol.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function closeSpiriboneDesc(){
    openSpiriboneId = null;
    document.getElementById('spiriboneLayout')?.classList.remove('open');
    document.querySelectorAll('#spiriboneGrid .spiribone-card').forEach(c => c.classList.remove('selected'));
    setTimeout(() => {
      const descCol = document.getElementById('spiriboneDescCol');
      if (descCol && !document.getElementById('spiriboneLayout').classList.contains('open')) descCol.innerHTML = '';
    }, 350);
  }

  function haloCardHTML(p){
    return `
      <div class="spiribone-card${p.id === openHaloId ? ' selected' : ''}" data-id="${p.id}">
        <div class="spiribone-card-thumb">
          ${effectiveImage(p) ? `<img src="${encodeURI(effectiveImage(p))}" alt="" loading="lazy">` : ''}
        </div>
        <div class="spiribone-card-name">${p.title}</div>
      </div>
    `;
  }

  function drawHalos(filter){
    const f = (filter || '').toLowerCase();
    const filtered = pages.filter(p => {
      if (p.bagType !== 'halo') return false;
      const matchesSearch = !f || p.title.toLowerCase().includes(f) || (p.description||'').toLowerCase().includes(f);
      const haloSpiritTypes = p.haloSpiritTypes || (p.haloSpiritType ? [p.haloSpiritType] : []);
      const matchesType = !selectedHaloType || haloSpiritTypes.includes(selectedHaloType);
      return matchesSearch && matchesType;
    });
    const haloGridEl = document.getElementById('haloGrid');
    if (!filtered.length){
      haloGridEl.innerHTML = `<div class="empty-state"><div class="big">💠</div>${LABELS.noResults}</div>`;
      return;
    }
    haloGridEl.innerHTML = filtered.map(haloCardHTML).join('');
    haloGridEl.querySelectorAll('.spiribone-card').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.dataset.id;
        if (openHaloId === id){
          closeHaloDesc();
        } else {
          openHaloDesc(filtered.find(p => p.id === id));
        }
      });
    });
  }

  function openHaloDesc(p){
    openHaloId = p.id;
    const layout = document.getElementById('haloLayout');
    const descCol = document.getElementById('haloDescCol');
    layout.classList.add('open');
    const monsterTypeIcon = (p.haloType && p.haloType !== 'All') ? `<img class="type-icon type-icon-gold" src="${monsterTypeIconPath(p.haloType, 'monster-types')}" alt="" title="${p.haloType}">` : '';
    const haloSpiritTypes = p.haloSpiritTypes || (p.haloSpiritType ? [p.haloSpiritType] : []);
    const spiritTypeIcon = haloSpiritTypes.map(t => `<img class="type-icon type-icon-gold" src="${typeIconPath(t)}" alt="" title="${t}">`).join('');
    let html = `
      <div class="spiribone-desc-close" id="haloDescClose">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </div>
      <div class="spiribone-desc-image"><img src="${encodeURI(effectiveImage(p))}" alt=""></div>
      <div class="spiribone-title-row"><h3>${p.title}</h3>${spiritTypeIcon}${monsterTypeIcon}</div>
    `;
    const hasHaloStats = p.haloATK || p.haloHP || p.haloDEF;
    const hasGenericStats = p.stats && p.stats.length;
    if (hasHaloStats || hasGenericStats){
      html += `<div class="ability-panel"><div class="panel-title"><span class="dot"></span>Stats</div>
        <table class="soulcore-value-table" style="text-align:left;">
          ${p.haloATK ? `<tr><td>ATK</td><td style="text-align:right; color:var(--gold-bright);">${escapeHtml(p.haloATK)}</td></tr>` : ''}
          ${p.haloHP ? `<tr><td>HP</td><td style="text-align:right; color:var(--gold-bright);">${escapeHtml(p.haloHP)}</td></tr>` : ''}
          ${p.haloDEF ? `<tr><td>DEF</td><td style="text-align:right; color:var(--gold-bright);">${escapeHtml(p.haloDEF)}</td></tr>` : ''}
          ${hasGenericStats ? p.stats.map(s => `<tr><td>${escapeHtml(s.label || '')}</td><td style="text-align:right; color:var(--gold-bright);">${escapeHtml(s.value || '')}</td></tr>`).join('') : ''}
        </table>
      </div>`;
    }
    if (p.description){
      html += `<div class="ability-panel"><div class="panel-title"><span class="dot"></span>Description</div>
        <div class="description">${parseDesc(p.description)}</div>
      </div>`;
    }
    html += sourceLinkHTML(p);
    html += containsPanelHTML(p);
    descCol.innerHTML = `<div class="spiribone-desc-inner">${html}</div>`;
    document.getElementById('haloDescClose').addEventListener('click', closeHaloDesc);
    descCol.addEventListener('click', (e) => { if (e.target === descCol) closeHaloDesc(); });
    document.querySelectorAll('#haloGrid .spiribone-card').forEach(c => c.classList.toggle('selected', c.dataset.id === p.id));
    requestAnimationFrame(() => {
      descCol.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function closeHaloDesc(){
    openHaloId = null;
    document.getElementById('haloLayout')?.classList.remove('open');
    document.querySelectorAll('#haloGrid .spiribone-card').forEach(c => c.classList.remove('selected'));
    setTimeout(() => {
      const descCol = document.getElementById('haloDescCol');
      if (descCol && !document.getElementById('haloLayout').classList.contains('open')) descCol.innerHTML = '';
    }, 350);
  }

  function drawSoulcores(filter, focusId){
    const f = (filter || '').toLowerCase();
    const filtered = pages.filter(p => {
      if (p.bagType !== 'soulcore') return false;
      const matchesSearch = !f || p.title.toLowerCase().includes(f) || (p.description||'').toLowerCase().includes(f);
      const matchesRarity = !selectedSoulcoreRarities.length || selectedSoulcoreRarities.includes(p.rarity);
      const matchesType = !selectedSoulcoreTypes.length ||
        (p.soulcoreTypes||[]).some(t => selectedSoulcoreTypes.includes(t));
      return matchesSearch && matchesRarity && matchesType;
    });

    if (focusId){
      const idx = filtered.findIndex(p => p.id === focusId);
      if (idx !== -1) soulcoreSelectedIndex = idx;
    }

    const detail = document.getElementById('soulcoreDetail');
    const thumbRow = document.getElementById('soulcoreThumbRow');

    if (!filtered.length){
      detail.innerHTML = `<div class="empty-state"><div class="big">🔮</div>${LABELS.noResults}</div>`;
      thumbRow.innerHTML = '';
      return;
    }
    if (soulcoreSelectedIndex >= filtered.length) soulcoreSelectedIndex = 0;

    function typeIconHTML(type, cls){
      return `<img class="type-icon ${cls || ''}" src="images/spirit-types/${type.toLowerCase()}.png" alt="${type}" title="${type}">`;
    }

    function renderDetail(){
      const p = filtered[soulcoreSelectedIndex];
      detail.className = 'soulcore-detail' + (p.rarity === 'SR' ? ' rarity-SR' : '');
      const bigImg = p.descriptionImage || effectiveImage(p);
      let html = `
        <div class="soulcore-detail-image" style="${bigImg ? `background-image:url('${encodeURI(bigImg)}')` : ''}"></div>
        <div class="soulcore-detail-info">
          <div class="soulcore-detail-header">
            <h3>${p.title}</h3>
            ${p.rarity ? `<span class="rarity-pill rarity-${p.rarity}">${p.rarity}</span>` : ''}
          </div>
          <div class="soulcore-set-block">
            <div class="soulcore-set-effect-title">
              <span>Set Effect</span>
              <span class="soulcore-applicable">Applicable Spirit
                ${(p.soulcoreTypes || []).map(t => typeIconHTML(t)).join('')}
              </span>
            </div>
      `;
      if (p.namedSet && p.setName){
        html += `
            <div class="soulcore-set-name-row">
              ${p.setIcon ? `<img class="soulcore-set-icon" src="${encodeURI(p.setIcon)}" alt="">` : ''}
              <span>${escapeHtml(p.setName)}</span>
            </div>
        `;
      }
      const showStars = p.rarity !== 'SR';

      function starValueTableHTML(stars, values){
        if (!showStars) return '';
        const hasAny = (values || []).some(v => v);
        if (!hasAny) return '';
        return `
          <table class="soulcore-value-table">
            <tr>${stars.map(s => `<th>${s}★</th>`).join('')}</tr>
            <tr>${stars.map((s, i) => `<td>${values[i] ? values[i] + '%' : '—'}</td>`).join('')}</tr>
          </table>
        `;
      }

      if (p.namedSet){
        html += `
            <div class="soulcore-tier">
              <div class="soulcore-tier-header"><span>2-Piece Set</span>${showStars ? '<span>Set 2/4/6/8/10/12★</span>' : ''}</div>
              ${p.tier12Description ? `<div class="soulcore-tier-desc">${parseDesc(p.tier12Description)}</div>` : ''}
              ${starValueTableHTML([2,4,6,8,10,12], p.tier12Values)}
              ${p.tier12Bonus ? `<div class="soulcore-tier-bonus"><b>12★:</b> ${parseDesc(p.tier12Bonus)}</div>` : ''}
            </div>
        `;
      } else {
        html += `
            <div class="soulcore-tier">
              <div class="soulcore-tier-header"><span>2-Piece Set</span>${showStars ? '<span>Set 2★</span>' : ''}</div>
              ${p.tier2Description ? `<div class="soulcore-tier-desc">${parseDesc(p.tier2Description)}</div>` : ''}
            </div>
            <div class="soulcore-tier">
              <div class="soulcore-tier-header"><span>4-Piece Set</span>${showStars ? '<span>Set 4/8/12/16/20/24★</span>' : ''}</div>
              ${p.tier4Description ? `<div class="soulcore-tier-desc">${parseDesc(p.tier4Description)}</div>` : ''}
              ${starValueTableHTML([4,8,12,16,20,24], p.tier4Values)}
              ${p.tier24Bonus ? `<div class="soulcore-tier-bonus"><b>24★:</b> ${parseDesc(p.tier24Bonus)}</div>` : ''}
            </div>
        `;
      }
      html += `
          </div>
        </div>
      `;
      detail.innerHTML = html;
    }

    thumbRow.innerHTML = filtered.map((p, i) => `
      <div class="soulcore-thumb${i === soulcoreSelectedIndex ? ' active' : ''}" data-idx="${i}"
        style="${effectiveImage(p) ? `background-image:url('${encodeURI(effectiveImage(p))}')` : ''}" title="${p.title}"></div>
    `).join('');
    thumbRow.querySelectorAll('.soulcore-thumb').forEach(el => {
      el.addEventListener('click', () => {
        soulcoreSelectedIndex = Number(el.dataset.idx);
        thumbRow.querySelectorAll('.soulcore-thumb').forEach(t => t.classList.remove('active'));
        el.classList.add('active');
        renderDetail();
      });
    });

    renderDetail();
  }
  document.getElementById('tagFilterList')?.querySelectorAll('.tag-toggle').forEach(el => {
    el.addEventListener('click', () => {
      const tag = el.dataset.tag;
      if (selectedTags.includes(tag)) selectedTags = selectedTags.filter(t => t !== tag);
      else selectedTags.push(tag);
      el.classList.toggle('active');
      currentPage = 1;
      draw(document.getElementById('searchInput').value);
    });
  });
  document.getElementById('rarityFilterList')?.querySelectorAll('.tag-toggle').forEach(el => {
    el.addEventListener('click', () => {
      const r = el.dataset.rarity;
      if (selectedRarities.includes(r)) selectedRarities = selectedRarities.filter(x => x !== r);
      else selectedRarities.push(r);
      el.classList.toggle('active');
      currentPage = 1;
      draw(document.getElementById('searchInput').value);
    });
  });
  function moveBagIndicator(btn){
    const menu = document.getElementById('bagTypeMenu');
    const indicator = document.getElementById('bagTypeIndicator');
    if (!menu || !indicator || !btn) return;
    const menuRect = menu.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    indicator.style.width = btnRect.width + 'px';
    indicator.style.height = btnRect.height + 'px';
    indicator.style.transform = `translate(${btnRect.left - menuRect.left}px, ${btnRect.top - menuRect.top}px)`;
  }
  const BEAST_MODE_COLORS = { beastlord:'#ffffff', boss:'#a76ef0', huntbounty:'var(--red)' };
  function moveBeastIndicator(btn){
    const menu = document.getElementById('beastModeMenu');
    const indicator = document.getElementById('beastModeIndicator');
    if (!menu || !indicator || !btn) return;
    const menuRect = menu.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    indicator.style.width = btnRect.width + 'px';
    indicator.style.height = btnRect.height + 'px';
    indicator.style.transform = `translate(${btnRect.left - menuRect.left}px, ${btnRect.top - menuRect.top}px)`;
    indicator.style.borderColor = BEAST_MODE_COLORS[btn.dataset.mode] || '#fff';
  }
  function toggleSoulcoreView(focusId){
    const isSoulcore = selectedBagType === 'soulcore';
    const isSpiribone = selectedBagType === 'spiribone';
    const isHalo = selectedBagType === 'halo';
    document.getElementById('soulcoreFilterBar').style.display = isSoulcore ? 'flex' : 'none';
    document.getElementById('spiriboneGenreFilterSelect').style.display = isSpiribone ? 'block' : 'none';
    document.getElementById('spiriboneTypeFilterSelect').style.display = isSpiribone ? 'block' : 'none';
    document.getElementById('spiriboneMechanicFilterSelect').style.display = isSpiribone ? 'block' : 'none';
    document.getElementById('haloTypeFilterSelect').style.display = isHalo ? 'block' : 'none';
    document.getElementById('soulcoreLayout').style.display = isSoulcore ? 'block' : 'none';
    document.getElementById('spiriboneLayout').style.display = isSpiribone ? 'flex' : 'none';
    document.getElementById('haloLayout').style.display = isHalo ? 'flex' : 'none';
    grid.style.display = (isSoulcore || isSpiribone || isHalo) ? 'none' : '';
    pager.style.display = (isSoulcore || isSpiribone || isHalo) ? 'none' : '';
    const normalFilterBar = document.querySelector('.bag-content > .filter-bar:not(#soulcoreFilterBar)');
    if (normalFilterBar) normalFilterBar.style.display = isSoulcore ? 'none' : '';
    if (isSoulcore){
      soulcoreSelectedIndex = 0;
      drawSoulcores(document.getElementById('searchInput').value, focusId);
    }
    if (isSpiribone){
      closeSpiriboneDesc();
      drawSpiribones(document.getElementById('searchInput').value);
    }
    if (isHalo){
      closeHaloDesc();
      drawHalos(document.getElementById('searchInput').value);
    }
  }

  function renderBeastDescPanel(filteredList){
    const panel = document.getElementById('beastDescPanel');
    if (!panel) return;
    if (!selectedMonsterId){
      panel.classList.remove('open');
      panel.innerHTML = '';
      return;
    }
    const p = filteredList.find(x => x.id === selectedMonsterId);
    if (!p){ panel.classList.remove('open'); panel.innerHTML = ''; return; }
    panel.classList.add('open');
    panel.innerHTML = `
      <div class="beast-desc-inner" style="--beast-panel-color:${p.panelColor || 'var(--gold)'};">
        <div class="beast-desc-close" id="beastDescClose">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </div>
        <div class="beast-desc-info">
          <h3>${p.title}</h3>
          ${p.subtitle ? `<div class="subtitle">${p.subtitle}</div>` : ''}
          ${(p.stats && p.stats.length) ? `<table class="stat-table">${p.stats.map(s => `<tr><td>${s.label}</td><td>${s.value}</td></tr>`).join('')}</table>` : ''}
          ${p.description ? `
            <div class="beast-desc-text-wrap" id="beastDescTextWrap">
              <div class="description">${parseDesc(p.description)}</div>
            </div>
            <div class="spiribone-toggle-btn" id="beastDescTextToggle">
              <span>View More</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          ` : ''}
          ${beastDropsPanelHTML(p)}
          ${sourceLinkHTML(p)}
        </div>
      </div>
    `;
    document.getElementById('beastDescClose').addEventListener('click', () => {
      selectedMonsterId = null;
      document.querySelectorAll('.beast-card').forEach(c => c.classList.remove('selected'));
      renderBeastDescPanel(filteredList);
    });
    const descToggle = document.getElementById('beastDescTextToggle');
    const descWrap = document.getElementById('beastDescTextWrap');
    if (descToggle && descWrap){
      if (descWrap.scrollHeight <= descWrap.clientHeight + 4){
        descToggle.style.display = 'none';
      } else {
        descToggle.addEventListener('click', () => {
          const isOpen = descWrap.classList.toggle('open');
          descToggle.classList.toggle('open', isOpen);
          descToggle.querySelector('span').textContent = isOpen ? 'View Less' : 'View More';
        });
      }
    }
  }

  function bindBeastCardClicks(filteredList){
    document.querySelectorAll('.beast-card').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.dataset.id;
        const wasOpening = selectedMonsterId !== id;
        selectedMonsterId = (selectedMonsterId === id) ? null : id;
        document.querySelectorAll('.beast-card').forEach(c => c.classList.toggle('selected', c.dataset.id === selectedMonsterId));
        renderBeastDescPanel(filteredList);
        if (wasOpening && selectedMonsterId && window.innerWidth <= 640){
          requestAnimationFrame(() => {
            document.getElementById('beastDescPanel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
        }
      });
    });
    renderBeastDescPanel(filteredList);
  }

  function renderZoneSelector(){
    const row = document.getElementById('zoneSelectorRow');
    if (!row) return;
    if (selectedBeastMode !== 'beastlord' || !allZones.length){
      row.style.display = 'none';
      return;
    }
    row.style.display = 'flex';
    row.innerHTML = allZones.map(z => `
      <div class="zone-select-btn${z.id === selectedZone ? ' active' : ''}" data-zone="${z.id}">
        <div class="zone-select-icon" style="background-image:url('images/zone-icons/${z.id}.png')"></div>
        <span class="zone-select-name">${z.title}</span>
      </div>
    `).join('');
    row.querySelectorAll('.zone-select-btn').forEach(el => {
      el.addEventListener('click', () => {
        selectedZone = el.dataset.zone;
        currentPage = 1;
        selectedMonsterId = null;
        const beastPanel = document.getElementById('beastDescPanel');
        if (beastPanel){ beastPanel.classList.remove('open'); beastPanel.innerHTML = ''; }
        renderZoneSelector();
        draw(document.getElementById('searchInput').value);
      });
    });
  }
  renderZoneSelector();

  function updateMonsterTypeSelect(){
    const sel = document.getElementById('monsterTypeSelect');
    if (!sel) return;
    const types = BEAST_MODE_TYPES[selectedBeastMode] || [];
    sel.innerHTML = `<option value="">All Types</option>` +
      types.map(t => `<option value="${t}">${t}</option>`).join('');
    selectedMonsterType = '';
  }

  document.getElementById('beastModeMenu')?.querySelectorAll('.beast-mode-btn').forEach(el => {
    el.addEventListener('click', () => {
      document.querySelectorAll('#beastModeMenu .beast-mode-btn').forEach(b => b.classList.remove('active'));
      el.classList.add('active');
      moveBeastIndicator(el);
      selectedBeastMode = el.dataset.mode;
      currentPage = 1;
      selectedMonsterId = null;
      const beastPanel = document.getElementById('beastDescPanel');
      if (beastPanel){ beastPanel.classList.remove('open'); beastPanel.innerHTML = ''; }
      updateMonsterTypeSelect();
      renderZoneSelector();
      draw(document.getElementById('searchInput').value);
    });
  });
  if (document.getElementById('beastModeMenu')){
    requestAnimationFrame(() => moveBeastIndicator(document.querySelector('#beastModeMenu .beast-mode-btn.active')));
    window.addEventListener('resize', () => {
      const active = document.querySelector('#beastModeMenu .beast-mode-btn.active');
      if (active) moveBeastIndicator(active);
    });
  }

  document.getElementById('bagTypeMenu')?.querySelectorAll('.bag-type-btn').forEach(el => {
    el.addEventListener('click', () => {
      document.querySelectorAll('#bagTypeMenu .bag-type-btn').forEach(b => b.classList.remove('active'));
      el.classList.add('active');
      moveBagIndicator(el);
      selectedBagType = el.dataset.type;
      currentPage = 1;
      toggleSoulcoreView();
      if (!['soulcore','spiribone','halo'].includes(selectedBagType)) draw(document.getElementById('searchInput').value);
    });
  });
  document.getElementById('soulcoreRarityFilterList')?.querySelectorAll('.tag-toggle').forEach(el => {
    el.addEventListener('click', () => {
      const r = el.dataset.rarity;
      if (selectedSoulcoreRarities.includes(r)) selectedSoulcoreRarities = selectedSoulcoreRarities.filter(x => x !== r);
      else selectedSoulcoreRarities.push(r);
      el.classList.toggle('active');
      soulcoreSelectedIndex = 0;
      drawSoulcores(document.getElementById('searchInput').value);
    });
  });
  document.getElementById('spiriboneGenreFilterSelect')?.addEventListener('change', (e) => {
    selectedSpiriboneGenre = e.target.value;
    currentPage = 1;
    closeSpiriboneDesc();
    drawSpiribones(document.getElementById('searchInput').value);
  });
  document.getElementById('spiriboneTypeFilterSelect')?.addEventListener('change', (e) => {
    selectedSpiriboneType = e.target.value;
    currentPage = 1;
    closeSpiriboneDesc();
    drawSpiribones(document.getElementById('searchInput').value);
  });
  document.getElementById('haloTypeFilterSelect')?.addEventListener('change', (e) => {
    selectedHaloType = e.target.value;
    currentPage = 1;
    closeHaloDesc();
    drawHalos(document.getElementById('searchInput').value);
  });
  document.getElementById('spiritMechanicFilterSelect')?.addEventListener('change', (e) => {
    selectedSpiritMechanic = e.target.value;
    currentPage = 1;
    draw(document.getElementById('searchInput').value);
  });
  document.getElementById('spiriboneMechanicFilterSelect')?.addEventListener('change', (e) => {
    selectedSpiriboneMechanic = e.target.value;
    currentPage = 1;
    closeSpiriboneDesc();
    drawSpiribones(document.getElementById('searchInput').value);
  });
  document.getElementById('monsterTypeSelect')?.addEventListener('change', (e) => {
    selectedMonsterType = e.target.value;
    currentPage = 1;
    draw(document.getElementById('searchInput').value);
  });
  document.getElementById('soulcoreTypeFilterList')?.querySelectorAll('.tag-toggle').forEach(el => {
    el.addEventListener('click', () => {
      const t = el.dataset.type;
      if (selectedSoulcoreTypes.includes(t)) selectedSoulcoreTypes = selectedSoulcoreTypes.filter(x => x !== t);
      else selectedSoulcoreTypes.push(t);
      el.classList.toggle('active');
      soulcoreSelectedIndex = 0;
      drawSoulcores(document.getElementById('searchInput').value);
    });
  });
  if (document.getElementById('bagTypeMenu')){
    requestAnimationFrame(() => moveBagIndicator(document.querySelector('#bagTypeMenu .bag-type-btn.active')));
    window.addEventListener('resize', () => {
      const active = document.querySelector('#bagTypeMenu .bag-type-btn.active');
      if (active) moveBagIndicator(active);
    });
  }
  draw('');

  if (focusId){
    const focusEntry = pages.find(p => p.id === focusId);
    if (focusEntry && focusEntry.bagType === 'soulcore'){
      selectedBagType = 'soulcore';
      document.querySelectorAll('#bagTypeMenu .bag-type-btn').forEach(b => b.classList.remove('active'));
      const soulcoreBtn = document.querySelector('#bagTypeMenu .bag-type-btn[data-type="soulcore"]');
      if (soulcoreBtn){
        soulcoreBtn.classList.add('active');
        requestAnimationFrame(() => moveBagIndicator(soulcoreBtn));
      }
      toggleSoulcoreView(focusId);
    }
    if (focusEntry && focusEntry.bagType === 'spiribone'){
      selectedBagType = 'spiribone';
      document.querySelectorAll('#bagTypeMenu .bag-type-btn').forEach(b => b.classList.remove('active'));
      const spiriboneBtn = document.querySelector('#bagTypeMenu .bag-type-btn[data-type="spiribone"]');
      if (spiriboneBtn){
        spiriboneBtn.classList.add('active');
        requestAnimationFrame(() => moveBagIndicator(spiriboneBtn));
      }
      toggleSoulcoreView();
      openSpiriboneDesc(focusEntry);
    }
    if (focusEntry && focusEntry.bagType === 'halo'){
      selectedBagType = 'halo';
      document.querySelectorAll('#bagTypeMenu .bag-type-btn').forEach(b => b.classList.remove('active'));
      const haloBtn = document.querySelector('#bagTypeMenu .bag-type-btn[data-type="halo"]');
      if (haloBtn){
        haloBtn.classList.add('active');
        requestAnimationFrame(() => moveBagIndicator(haloBtn));
      }
      toggleSoulcoreView();
      openHaloDesc(focusEntry);
    }
  }
  document.getElementById('searchInput').addEventListener('input', (e) => {
    currentPage = 1;
    if (selectedBagType === 'soulcore'){
      soulcoreSelectedIndex = 0;
      drawSoulcores(e.target.value);
    } else if (selectedBagType === 'spiribone'){
      drawSpiribones(e.target.value);
    } else if (selectedBagType === 'halo'){
      drawHalos(e.target.value);
    } else {
      draw(e.target.value);
    }
  });
}

function abilityBoxHTML(slotKey, ability, full){
  ability = ability || {};
  let html = `<div class="ability-box"><div class="slot-name">${LABELS[slotKey]}</div>`;
  html += `<div class="ability-head"><div class="ability-icon">${ability.icon || '◆'}</div><div class="t">${ability.title || 'N/A'}</div></div>`;
  if (ability.key) html += `<span class="ability-key">${escapeHtml(ability.key)}</span>`;
  if (full && (ability.cost || ability.cd)){
    html += `<div class="cost-cd">${LABELS.cost}: <b>${ability.cost||0}</b>&nbsp;·&nbsp;${LABELS.cd}: <b>${ability.cd||0}s</b></div>`;
  }
  if (ability.description) html += `<div class="ability-desc">${parseDesc(ability.description)}</div>`;
  if (full && (ability.haloTitle || ability.haloDescription)){
    html += `<div class="halo-box">
      <div class="halo-title">
        <span class="halo-line"></span>
        <span class="halo-diamond">✦</span>
        <span class="halo-text">${escapeHtml(ability.haloTitle || '')}</span>
        <span class="halo-diamond">✦</span>
        <span class="halo-line"></span>
      </div>
      <div class="halo-desc">${parseDesc(ability.haloDescription || '')}</div>
    </div>`;
  }
  if (full && ability.tiers && ability.tiers.length){
    ability.tiers.forEach(tier => {
      html += `<div class="tier"><span class="th">${escapeHtml(tier.threshold||'')}</span>: ${parseDesc(tier.description||'')}${tier.condition ? ` <span class="cond">${escapeHtml(tier.condition)}</span>` : ''}</div>`;
    });
  }
  html += `</div>`;
  return html;
}
function panelHTML(titleKey, pairs){
  let html = `<div class="ability-panel"><div class="panel-title"><span class="dot"></span>${LABELS[titleKey]}</div><div class="ability-pair">`;
  pairs.forEach(([slotKey, ability, full]) => { html += abilityBoxHTML(slotKey, ability, full); });
  html += `</div></div>`;
  return html;
}

// Finds the fusion data to show on this Spirit's page — either this
// Spirit's own fusion entry, or (if none) another Spirit's fusion entry
// that names this one as its partner, so both pages show it without
// having to fill it in twice.
function getFusionData(page){
  if (page.fusion && page.fusion.title){
    return { fusion: page.fusion, partnerId: page.fusion.fuseWith };
  }
  const reciprocal = getPages('personnages').find(p => p.fusion && p.fusion.fuseWith === page.id);
  if (reciprocal){
    return { fusion: reciprocal.fusion, partnerId: reciprocal.id };
  }
  return null;
}

function skinsPanelHTML(page){
  if (!page.skins || !page.skins.length) return '';
  let html = `<div class="ability-panel skins-panel"><div class="panel-title"><span class="dot"></span>${LABELS.panelSkins}</div><div class="skin-grid">`;
  page.skins.forEach(skin => {
    html += `
      <div class="skin-card" data-image="${skin.image ? encodeURI(skin.image) : ''}" data-name="${escapeHtml(skin.name || '')}">
        <div class="thumb" style="${skin.image ? `background-image:url('${encodeURI(skin.image)}')` : ''}"></div>
        <div class="body">
          <h4>${skin.name || ''}</h4>
          ${skin.description ? `<div class="sub">${escapeHtml(skin.description)}</div>` : ''}
        </div>
      </div>
    `;
  });
  html += `</div></div>`;
  return html;
}

function ensureLightbox(){
  if (document.getElementById('skinLightbox')) return;
  const box = document.createElement('div');
  box.id = 'skinLightbox';
  box.className = 'skin-lightbox';
  box.innerHTML = `
    <div class="skin-lightbox-close" id="skinLightboxClose">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </div>
    <img id="skinLightboxImg" src="" alt="">
    <div class="skin-lightbox-name" id="skinLightboxName"></div>
  `;
  document.body.appendChild(box);
  const close = () => box.classList.remove('open');
  document.getElementById('skinLightboxClose').addEventListener('click', close);
  box.addEventListener('click', (e) => { if (e.target === box) close(); });
}

document.addEventListener('click', (e) => {
  const card = e.target.closest('.skin-card');
  if (!card || !card.dataset.image) return;
  ensureLightbox();
  const box = document.getElementById('skinLightbox');
  document.getElementById('skinLightboxImg').src = card.dataset.image;
  document.getElementById('skinLightboxName').textContent = card.dataset.name;
  box.classList.add('open');
});

function fusionPanelHTML(page){
  const data = getFusionData(page);
  if (!data) return '';
  const partner = data.partnerId
    ? getPages('personnages').find(p => p.id === data.partnerId)
    : null;
  let html = `<div class="ability-panel fusion-panel"><div class="panel-title"><span class="dot"></span>${LABELS.panelFusion}</div>`;
  if (partner){
    html += `<div class="fusion-partner">${LABELS.fusesWith}: <a href="#/personnages/${encodeURIComponent(partner.id)}">${partner.title}</a></div>`;
  }
  html += `<div class="ability-pair fusion-single">${abilityBoxHTML('slotFusion', data.fusion, true)}</div></div>`;
  return html;
}

function spiribonePanelHTML(page){
  const skill = page.spiriboneSkill || {};
  const tiers = page.spiriboneTiers || [];
  const stars = page.spiriboneStarStats || [];
  let html = `<div style="margin-top:26px;">`;

  html += `<div class="ability-panel">
    <div class="panel-title"><span class="dot"></span>Spiribone Info</div>
    <div class="soulcore-type-row" style="margin-bottom:10px;">
      ${page.spiriboneGenre ? `<span class="soulcore-type-badge">${escapeHtml(page.spiriboneGenre)}</span>` : ''}
      ${page.spiriboneType ? `<span class="soulcore-type-badge">${escapeHtml(page.spiriboneType)}</span>` : ''}
    </div>
    ${page.spiriboneRating ? `<div class="beast-card-level" style="font-size:15px;">Rating: ${escapeHtml(page.spiriboneRating)}</div>` : ''}
  </div>`;

  if (skill.title || skill.description){
    html += `<div class="ability-panel">
      <div class="panel-title"><span class="dot"></span>Skill</div>
      ${panelSkillBox(skill)}
    </div>`;
  }

  if (tiers.some(t => t.description)){
    html += `<div class="ability-panel"><div class="panel-title"><span class="dot"></span>Tiers</div>`;
    tiers.forEach(t => {
      if (!t.description) return;
      html += `<div class="tier"><span class="th">${escapeHtml(t.threshold||'')}</span>: ${parseDesc(t.description)}${t.condition ? ` <span class="cond">${escapeHtml(t.condition)}</span>` : ''}</div>`;
    });
    html += `</div>`;
  }

  html += `<div class="ability-panel">
      <div class="panel-title"><span class="dot"></span>Star Stats</div>
      <table class="soulcore-value-table" style="text-align:left;">
        ${stars.map((s, i) => `
          <tr>
            <td style="text-align:left;">${escapeHtml(s.label || '')}</td>
            <td style="text-align:right; color:var(--gold-bright); white-space:nowrap;">
              ${i > 0
                ? `${['','2★','3★','4★','5★','6★'][i]} ${escapeHtml(s.value || 'Unlocked')}`
                : escapeHtml(s.value || '')
              }
            </td>
          </tr>
        `).join('')}
      </table>
    </div>`;

  html += `</div>`;
  return html;
}

function panelSkillBox(skill){
  return `<div class="ability-box">
    <div class="ability-head"><div class="t">${escapeHtml(skill.title || '')}</div></div>
    ${skill.key ? `<span class="ability-key">${escapeHtml(skill.key)}</span>` : ''}
    ${skill.description ? `<div class="ability-desc">${parseDesc(skill.description)}</div>` : ''}
  </div>`;
}

function beastDropsPanelHTML(p){
  const matchingHalos = p.monsterType
    ? getPages('objets').filter(o => o.bagType === 'halo' && o.haloType === p.monsterType)
    : [];
  const spiriboneDrops = (p.spiribones || []).filter(Boolean)
    .map(id => getPages('objets').find(o => o.id === id))
    .filter(Boolean);
  const containsDrops = (p.contains || [])
    .map(id => getPages('objets').find(o => o.id === id))
    .filter(Boolean);
  const seen = new Set();
  const drops = [...matchingHalos, ...spiriboneDrops, ...containsDrops].filter(o => {
    if (seen.has(o.id)) return false;
    seen.add(o.id);
    return true;
  });
  if (!drops.length) return '';
  return `
    <div class="ability-panel" style="margin-top:20px;">
      <div class="panel-title"><span class="dot"></span>Drops</div>
      <div class="page-grid page-grid-circular">
        ${drops.map(bagCardHTML).join('')}
      </div>
    </div>
  `;
}

function containsPanelHTML(p){
  if (!(p.contains || []).length) return '';
  const items = getPages('objets').filter(o => (p.contains || []).includes(o.id));
  if (!items.length) return '';
  return `
    <div class="ability-panel" style="margin-top:20px;">
      <div class="panel-title"><span class="dot"></span>Contains</div>
      <div class="page-grid page-grid-circular">
        ${items.map(bagCardHTML).join('')}
      </div>
    </div>
  `;
}

function materialApplicableSpiritHTML(p){
  const types = p.materialApplicableSpirits || [];
  if (!types.length) return '';
  return `
    <div class="material-applicable-spirit">
      <span class="label">Applicable Spirit</span>
      ${types.map(t => `<img class="type-icon" src="images/spirit-types/${t.toLowerCase()}.png" alt="${t}" title="${t}">`).join('')}
    </div>
  `;
}

function sourceLinkHTML(p){
  const sourceIds = p.sources || (p.source ? [p.source] : []);
  const trials = getPages('trials').filter(t => sourceIds.includes(t.id));
  const textSources = p.textSources || [];
  if (!trials.length && !textSources.length) return '';
  const totalCount = trials.length + textSources.length;
  return `
    <div class="ability-panel" style="margin-top:20px;">
      <div class="panel-title"><span class="dot"></span>Source${totalCount > 1 ? 's' : ''}</div>
      <div class="source-row-list">
        ${trials.map(trial => `
          <a href="#/trials/${encodeURIComponent(trial.id)}" class="source-row">
            <span class="source-row-bullet">◆</span>
            <span class="source-row-title">${trial.title}</span>
            <svg class="source-row-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg>
          </a>
        `).join('')}
        ${textSources.map(txt => `
          <div class="source-row source-row-static">
            <span class="source-row-bullet">◆</span>
            <span class="source-row-title">${escapeHtml(txt)}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function trialRewardsPanelHTML(trial){
  const drops = getPages('objets').filter(o => (o.sources || (o.source ? [o.source] : [])).includes(trial.id));
  if (!drops.length){
    return `<div style="margin-top:26px;"><div class="ability-panel"><div class="panel-title"><span class="dot"></span>Materials &amp; Rewards</div>
      <p style="color:var(--text-dim); font-size:13.5px;">No Bag entries currently point to this Trial as their Source.</p>
    </div></div>`;
  }
  return `<div style="margin-top:26px;"><div class="ability-panel"><div class="panel-title"><span class="dot"></span>Materials &amp; Rewards</div>
    <div class="page-grid page-grid-circular">
      ${drops.map(bagCardHTML).join('')}
    </div>
  </div></div>`;
}

function ruleBlocksHTML(page){
  const cats = page.categoryBlocks || [];
  if (!cats.length) return '';
  return `
    <div class="rule-blocks" style="max-width:760px; margin:0 auto 30px;">
      ${cats.map(cat => `
        <div class="rule-group">
          ${cat.image ? `<div class="rule-group-image"><img src="${encodeURI(cat.image)}" alt="" loading="lazy"></div>` : ''}
          ${cat.title ? `<h2 class="rule-group-title">${escapeHtml(cat.title)}</h2>` : ''}
          ${cat.description ? `<div class="description" style="text-align:center; margin-bottom:16px;">${parseDesc(cat.description)}</div>` : ''}
          ${(cat.subtitles || []).map(s => `
            <div class="rule-item">
              ${s.title ? `<h3 class="rule-item-title">${escapeHtml(s.title)}</h3>` : ''}
              ${s.description ? `<div class="description">${parseDesc(s.description)}</div>` : ''}
            </div>
          `).join('')}
        </div>
      `).join('')}
    </div>
  `;
}

function docBlocksHTML(page){
  if (!(page.docBlocks || []).length) return '';
  return `
    <div class="zone-doc-blocks" style="margin-top:26px;">
      ${page.docBlocks.map(b => `
        <div class="zone-doc-block">
          ${b.image ? `<div class="zone-doc-block-image"><img src="${encodeURI(b.image)}" alt="" loading="lazy"></div>` : ''}
          ${b.description ? `<div class="description">${parseDesc(b.description)}</div>` : ''}
        </div>
      `).join('')}
    </div>
  `;
}

function renderZoneDocPage(cat, page, catId){
  const bannerSrc = effectiveImage(page) || page.mapFile;
  app.innerHTML = `
    <div class="breadcrumbs">
      <a href="#/">${LABELS.home}</a><span class="sep">/</span>
      <a href="#/${cat.id}">${categoryLabel(cat)}</a><span class="sep">/</span>
      <span>${page.title}</span>
    </div>
    <div class="zone-doc-page">
      ${bannerSrc ? `<div class="zone-doc-banner"><img src="${encodeURI(bannerSrc)}" alt=""></div>` : ''}
      <h1 class="zone-doc-title">${page.title}</h1>
      ${page.subtitle ? `<div class="subtitle" style="text-align:center;">${page.subtitle}</div>` : ''}
      ${page.mapFile ? `<div style="display:flex; justify-content:center; margin-bottom:20px;">
        <div class="map-open-btn" id="openMapBtn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
          ${LABELS.openMap}
        </div>
      </div>` : ''}
      ${page.description ? `<div class="description" style="max-width:760px; margin:0 auto 30px;">${parseDesc(page.description)}</div>` : ''}
      ${catId === 'trials' ? ruleBlocksHTML(page) : ''}
      ${docBlocksHTML(page)}
      ${catId === 'trials' ? trialRewardsPanelHTML(page) : ''}
    </div>
  `;
  if (page.mapFile){
    document.getElementById('openMapBtn').addEventListener('click', () => openZoneMap(page));
  }
}

function renderDetailView(catId, pageId){
  const cat = CATEGORIES.find(c => c.id === catId);
  const pages = getPages(catId);
  const page = pages.find(p => p.id === pageId);
  if (!page){
    app.innerHTML = `<div class="empty-state"><div class="big">❓</div>${LABELS.noResults}</div>`;
    return;
  }
  if (catId === 'zones' || catId === 'trials'){
    renderZoneDocPage(cat, page, catId);
    return;
  }
  const isSpirit = catId === 'personnages';
  const spiritTypeIcon = isSpirit
    ? SOULCORE_TYPES.find(t => (page.tags || []).some(tag => matchKnownType(tag) === t))
    : null;
  setCharBackground(isSpirit && page.backgroundImage ? page.backgroundImage : null);
  let fusionPartnerBg = null;
  if (isSpirit){
    const fd = getFusionData(page);
    if (fd && fd.partnerId){
      const partner = getPages('personnages').find(p => p.id === fd.partnerId);
      if (partner && partner.backgroundImage) fusionPartnerBg = partner.backgroundImage;
    }
  }
  setCharBackgroundLeft(fusionPartnerBg);

  app.innerHTML = `
    <div class="breadcrumbs">
      <a href="#/">${LABELS.home}</a><span class="sep">/</span>
      <a href="#/${catId}">${categoryLabel(cat)}</a><span class="sep">/</span>
      <span>${page.title}</span>
    </div>
    <div class="page-detail">
      <div class="detail-media${page.rarity ? ' card-' + page.rarity.toLowerCase() : ''}">
        ${page.rarity ? `<span class="rarity-pill rarity-${page.rarity} detail-rarity-badge">${page.rarity}</span>` : ''}
        ${effectiveImage(page) ? `<img src="${encodeURI(effectiveImage(page))}" alt="${page.title}">` : `<div class="no-img">No image</div>`}
        ${(page.stats && page.stats.length) ? `
          <table class="stat-table">
            ${page.stats.map(s => `<tr><td>${s.label}</td><td>${s.value}</td></tr>`).join('')}
          </table>
        ` : ''}
      </div>
      <div class="detail-body">
        <div class="spirit-title-row"><h1>${page.title}</h1>${isSpirit && spiritTypeIcon ? `<img class="type-icon type-icon-gold" src="${typeIconPath(spiritTypeIcon)}" title="${spiritTypeIcon}" alt="${spiritTypeIcon}">` : ''}</div>
        ${page.subtitle ? `<div class="subtitle">${page.subtitle}</div>` : ''}
        ${materialApplicableSpiritHTML(page)}
        ${!isSpirit ? `<div class="tag-row" style="margin-bottom:14px;">${(page.tags||[]).map(tag => `<span class="tag">${tag}</span>`).join('')}</div>` : ''}
        ${page.description ? `<div class="description">${parseDesc(page.description)}</div>` : ''}
        ${page.mapFile ? `<div class="map-open-btn" id="openMapBtn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
          ${LABELS.openMap}
        </div>` : ''}
      </div>
    </div>
    ${isSpirit ? `
      <div style="margin-top:26px;">
        ${panelHTML('panelNormal', [['slotNormal', page.normalAttack, false], ['slotInitiative', page.initiative, false]])}
        ${panelHTML('panelUltimate', [['slotSkill1', page.ultimate && page.ultimate.skill1, true], ['slotSkill4', page.ultimate && page.ultimate.skill4, true]])}
        ${panelHTML('panelSkill', [['slotSkill2', page.skill && page.skill.skill2, true], ['slotSkill6', page.skill && page.skill.skill6, true]])}
        ${panelHTML('panelPassive', [['slotSkill3', page.passive && page.passive.skill3, true], ['slotSkill5', page.passive && page.passive.skill5, true]])}
        ${fusionPanelHTML(page)}
        ${skinsPanelHTML(page)}
      </div>
    ` : ''}
    ${page.bagType === 'spiribone' ? spiribonePanelHTML(page) : ''}
    ${sourceLinkHTML(page)}
    ${containsPanelHTML(page)}
  `;
  if (page.mapFile){
    document.getElementById('openMapBtn').addEventListener('click', () => openZoneMap(page));
  }
}

/* ---------- Zone interactive map modal (Leaflet, CRS.Simple) ---------- */
let zoneMap = null;
let zoneLayer = null;
let zoneBoundsCurrent = null;

function ensureModal(){
  if (document.getElementById('mapModal')) return;
  const modal = document.createElement('div');
  modal.className = 'map-modal';
  modal.id = 'mapModal';
  modal.innerHTML = `
    <div class="modal-backdrop" id="modalBackdrop"></div>
    <div class="modal-map" id="modalMapEl"></div>

    <div class="modal-label">
      <div class="name" id="modalMapName"></div>
      <div class="sub">${LABELS.mapSub}</div>
    </div>

    <div class="modal-coords" id="modalCoords">x: 0 · y: 0</div>

    <div class="marker-panel" id="markerPanel">
      <div class="marker-panel-header">
        <div class="marker-panel-title">Markers</div>
        <div class="marker-panel-close" id="markerPanelCloseBtn" title="Close">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </div>
      </div>
      <div id="markerPanelList"></div>
    </div>
    <div class="marker-panel-reopen" id="markerPanelReopenBtn" title="Show markers">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
    </div>

    <div class="modal-toolbar">
      <div class="modal-tool-btn" id="modalZoomIn" title="${LABELS.zoomIn}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
      </div>
      <div class="modal-tool-btn" id="modalZoomOut" title="${LABELS.zoomOut}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
      </div>
      <div class="modal-tool-btn" id="modalReset" title="${LABELS.resetView}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg>
      </div>
      <div class="modal-tool-btn" id="modalToggleMarkers" title="Hide/show markers">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
      </div>
      <div class="modal-tool-btn" id="modalFullscreen" title="${LABELS.fullscreen}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>
      </div>
    </div>

    <div class="modal-close" id="modalCloseBtn" title="${LABELS.closeMap}">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById('modalCloseBtn').addEventListener('click', closeZoneMap);
  document.getElementById('markerPanelCloseBtn').addEventListener('click', () => {
    document.getElementById('markerPanel').classList.add('collapsed');
    document.getElementById('markerPanelReopenBtn').classList.add('visible');
  });
  document.getElementById('markerPanelReopenBtn').addEventListener('click', () => {
    document.getElementById('markerPanel').classList.remove('collapsed');
    document.getElementById('markerPanelReopenBtn').classList.remove('visible');
  });
  document.getElementById('modalZoomIn').addEventListener('click', () => zoneMap && zoneMap.zoomIn());
  document.getElementById('modalZoomOut').addEventListener('click', () => zoneMap && zoneMap.zoomOut());
  document.getElementById('modalReset').addEventListener('click', () => {
    if (zoneMap && zoneBoundsCurrent) setModalCoverView(zoneBoundsCurrent, true);
  });
  document.getElementById('modalToggleMarkers').addEventListener('click', (e) => {
    markersVisible = !markersVisible;
    document.querySelectorAll('.marker-pin').forEach(el => {
      el.style.display = markersVisible ? 'flex' : 'none';
    });
    e.currentTarget.classList.toggle('active', !markersVisible);
  });
  document.getElementById('modalFullscreen').addEventListener('click', () => {
    const modalEl = document.getElementById('mapModal');
    if (!document.fullscreenElement){ modalEl.requestFullscreen?.(); }
    else { document.exitFullscreen?.(); }
  });
}

function setModalCoverView(bounds, animate){
  const b = L.latLngBounds(bounds);
  const coverZoom = zoneMap.getBoundsZoom(b, false);
  zoneMap.setView(b.getCenter(), coverZoom, { animate: !!animate });
}

let markerPinsCurrent = [];
let markersVisible = true;
const MARKER_ZOOM = 0.7;

function zoomToMarker(marker){
  zoneMap.setView([marker.y, marker.x], MARKER_ZOOM, { animate: true });
}

function renderZoneMarkers(page){
  markerPinsCurrent.forEach(pin => zoneMap.removeLayer(pin));
  markerPinsCurrent = [];
  const panel = document.getElementById('markerPanel');
  const list = document.getElementById('markerPanelList');
  const markers = page.markers || [];
  panel.classList.remove('collapsed');
  document.getElementById('markerPanelReopenBtn').classList.remove('visible');

  if (!markers.length){
    panel.classList.remove('has-markers');
    list.innerHTML = '';
    return;
  }
  panel.classList.add('has-markers');

  const groups = {};
  markers.forEach((m, i) => {
    const key = m.name || 'Marker';
    (groups[key] = groups[key] || []).push({ ...m, _idx: i });
  });

  function markerItemHTML(m){
    return `
      <div class="marker-item" data-idx="${m._idx}">
        <div class="m-icon">${m.icon || '📍'}</div>
        <div>
          <div class="m-name">${m.name}</div>
          ${m.description ? `<div class="m-desc">${escapeHtml(m.description)}</div>` : ''}
        </div>
      </div>
    `;
  }

  list.innerHTML = Object.keys(groups).map(name => {
    const group = groups[name];
    if (group.length === 1) return markerItemHTML(group[0]);
    const groupId = 'mgrp_' + name.replace(/[^a-z0-9]+/gi, '_') + '_' + Math.random().toString(36).slice(2, 7);
    return `
      <div class="marker-group">
        <div class="marker-group-header" data-target="${groupId}">
          <span class="marker-group-title">${escapeHtml(name)} <span class="marker-group-count">(${group.length})</span></span>
          <svg class="marker-group-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
        <div class="marker-group-items" id="${groupId}">
          ${group.map(markerItemHTML).join('')}
        </div>
      </div>
    `;
  }).join('');

  list.querySelectorAll('.marker-group-header').forEach(header => {
    header.addEventListener('click', () => {
      header.classList.toggle('open');
      document.getElementById(header.dataset.target).classList.toggle('open');
    });
  });
  list.querySelectorAll('.marker-item').forEach(el => {
    el.addEventListener('click', () => zoomToMarker(markers[Number(el.dataset.idx)]));
  });

  markers.forEach(m => {
    const icon = L.divIcon({ className:'', html:`<div class="marker-pin">${m.icon || '📍'}</div>`, iconSize:[28,28], iconAnchor:[14,14] });
    const pin = L.marker([m.y, m.x], { icon }).addTo(zoneMap);
    pin.on('click', () => zoomToMarker(m));
    markerPinsCurrent.push(pin);
  });
  updateMarkerPinScale();
  if (!markersVisible){
    document.querySelectorAll('.marker-pin').forEach(el => { el.style.display = 'none'; });
  }
}

function updateMarkerPinScale(){
  if (!zoneMap) return;
  const zoom = zoneMap.getZoom();
  const minZoom = zoneMap.getMinZoom();
  const scale = 1 + Math.max(0, zoom - minZoom) * 0.25;
  document.querySelectorAll('.marker-pin').forEach(el => {
    el.style.transform = `scale(${scale})`;
  });
}

function openZoneMap(page){
  ensureModal();
  const modal = document.getElementById('mapModal');
  modal.classList.add('open');
  document.getElementById('modalMapName').textContent = page.title;
  document.getElementById('modalBackdrop').style.backgroundImage = `url('${encodeURI(page.mapFile)}')`;

  if (!zoneMap){
    zoneMap = L.map('modalMapEl', {
      crs: L.CRS.Simple,
      minZoom: -5, maxZoom: 4,
      zoomSnap: 0, zoomDelta: 0.5,
      zoomControl: false,
      attributionControl: true,
    });
    zoneMap.attributionControl.setPrefix('Fan-made · Soul Land: Awakening World');
    zoneMap.on('mousemove', (e) => {
      const box = document.getElementById('modalCoords');
      if (box) box.innerHTML = `x: <b>${Math.round(e.latlng.lng)}</b> · y: <b>${Math.round(e.latlng.lat)}</b>`;
    });
    zoneMap.on('zoomend', updateMarkerPinScale);
  }

  const url = encodeURI(page.mapFile);
  // Image size is detected live from the file itself: nothing to store or type in.
  const probe = new Image();
  probe.onload = () => {
    if (zoneLayer){ zoneMap.removeLayer(zoneLayer); }
    const bounds = [[0, 0], [probe.naturalHeight, probe.naturalWidth]];
    zoneLayer = L.imageOverlay(url, bounds).addTo(zoneMap);
    const b = L.latLngBounds(bounds);
    zoneMap.setMaxBounds(b.pad(0.15));
    zoneBoundsCurrent = bounds;
    renderZoneMarkers(page);
    setTimeout(() => {
      zoneMap.invalidateSize();
      setModalCoverView(bounds, false);
    }, 50);
  };
  probe.src = url;
}
function closeZoneMap(){
  document.getElementById('mapModal').classList.remove('open');
  if (document.fullscreenElement) document.exitFullscreen?.();
}

/* ---------- Init ---------- */
document.getElementById('brandLink').addEventListener('click', () => { location.hash = '#/'; });
window.addEventListener('hashchange', render);
render();
