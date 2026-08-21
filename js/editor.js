/* ==========================================================
   Content editor (admin): 100% client-side CRUD.
   Nothing is sent to a server: the array is edited in memory,
   then the up-to-date content/xxx.js file is generated/downloaded,
   which you replace yourself on your hosting.
   ========================================================== */

let currentCat = CATEGORIES[0].id;
let editingId = null; // id of the entry being edited, or null = new entry
let currentView = 'category'; // 'category' | 'glossary' | 'tags'

/* ---------- Discord-style formatting toolbar for description textareas ---------- */
function attachFormatToolbar(textarea){
  if (!textarea || textarea.dataset.toolbarAttached) return;
  textarea.dataset.toolbarAttached = '1';
  const toolbar = document.createElement('div');
  toolbar.className = 'format-toolbar';
  toolbar.innerHTML = `
    <button type="button" data-fmt="bold" title="Bold (**text**)"><b>B</b></button>
    <button type="button" data-fmt="italic" title="Italic (_text_)"><i>I</i></button>
    <button type="button" data-fmt="bullet" title="Bullet list">• List</button>
    <button type="button" data-fmt="link" title="Link selected text to another page">🔗 Link</button>
  `;
  textarea.parentNode.insertBefore(toolbar, textarea);
  toolbar.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.fmt === 'link') openLinkPicker(textarea);
      else applyTextFormat(textarea, btn.dataset.fmt);
    });
  });
}
function applyTextFormat(textarea, fmt){
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const value = textarea.value;
  const selected = value.slice(start, end);
  const before = value.slice(0, start);
  const after = value.slice(end);
  let newText;
  if (fmt === 'bold'){
    newText = `**${selected || 'bold text'}**`;
  } else if (fmt === 'italic'){
    newText = `_${selected || 'italic text'}_`;
  } else if (fmt === 'bullet'){
    const lines = (selected || 'list item').split('\n');
    newText = lines.map(l => l.startsWith('* ') ? l : `* ${l}`).join('\n');
  }
  textarea.value = before + newText + after;
  textarea.focus();
  textarea.selectionStart = start;
  textarea.selectionEnd = start + newText.length;
}
function attachAllFormatToolbars(){
  ['fSoulcoreTier12Desc','fSoulcoreTier12Bonus','fSoulcoreTier2Desc','fSoulcoreTier4Desc',
   'fSoulcoreTier24Bonus','fSpiriboneSkillDesc','fDescription'].forEach(id => {
    attachFormatToolbar(document.getElementById(id));
  });
}

function slugify(str){
  return (str || '')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '') || 'entry';
}
function uniqueId(base, list, ignoreId){
  let id = base, n = 2;
  while (list.some(p => p.id === id && p.id !== ignoreId)) { id = `${base}-${n}`; n++; }
  return id;
}

function getList(catId){
  window.WIKI[catId] = window.WIKI[catId] || [];
  return window.WIKI[catId];
}

function showToast(msg){
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => el.classList.remove('show'), 2200);
}

/* ---------- "Spirit" ability fields (personnages category) ---------- */
const SPIRIT_SLOTS = [
  { path:['normalAttack'], label:'Normal Attack', full:false },
  { path:['initiative'], label:'Initiative', full:false },
  { path:['ultimate','skill1'], label:'Ultimate: Skill 1', full:true },
  { path:['ultimate','skill4'], label:'Ultimate: Skill 4', full:true },
  { path:['skill','skill2'], label:'Skill: Skill 2', full:true },
  { path:['skill','skill6'], label:'Skill: Skill 6', full:true },
  { path:['passive','skill3'], label:'Passive: Skill 3', full:true },
  { path:['passive','skill5'], label:'Passive: Skill 5', full:true },
];
function slotKey(path){ return path.join('_'); }

function buildSpiritFieldsUI(){
  const wrap = document.getElementById('spiritFields');
  wrap.innerHTML = SPIRIT_SLOTS.map(slot => {
    const key = slotKey(slot.path);
    return `
      <div class="card">
        <h3>${slot.label}</h3>
        <div class="row2">
          <div class="field"><label>Title</label><input type="text" id="sp_${key}_title"></div>
          <div class="field"><label>Keyword (e.g. Dmg, 35k Yr…)</label><input type="text" id="sp_${key}_key"></div>
        </div>
        <div class="row2">
          <div class="field"><label>Icon (temporary emoji)</label><input type="text" id="sp_${key}_icon" placeholder="◆"></div>
          ${slot.full ? `
          <div class="field">
            <label>Cost / CD (seconds)</label>
            <div style="display:flex; gap:8px;">
              <input type="text" id="sp_${key}_cost" placeholder="Cost">
              <input type="text" id="sp_${key}_cd" placeholder="CD (s)">
            </div>
          </div>` : `<div></div>`}
        </div>
        <div class="field">
          <label>Description: use [Term] to link a glossary word</label>
          <textarea id="sp_${key}_description"></textarea>
        </div>
        ${slot.full ? `
        <div class="field" style="background:var(--panel-2); padding:12px 14px; border-radius:10px; border:1px dashed var(--gold);">
          <label style="color:var(--gold-bright);">✦ Gold Halo (optional bonus effect box)</label>
          <input type="text" id="sp_${key}_haloTitle" placeholder="Divine Effect" style="margin-bottom:10px;">
          <textarea id="sp_${key}_haloDescription" placeholder="Effect description: use [Term] to link a glossary word"></textarea>
        </div>` : ''}
        ${slot.full ? `
        <div class="field">
          <label>Tiers (threshold / description / activation condition)</label>
          <div class="stat-rows" id="tiers_${key}"></div>
          <div class="add-row-btn" data-tier-key="${key}">+ Add a tier</div>
        </div>` : ''}
      </div>
    `;
  }).join('');
  wrap.querySelectorAll('.add-row-btn[data-tier-key]').forEach(btn => {
    btn.addEventListener('click', () => addTierRow(btn.dataset.tierKey, '', '', ''));
  });
}

const CONDITION_OPTIONS = [
  { value:'', label:'No condition' },
  { value:'🟡 4★ activated', label:'🟡 4★ (Yellow)' },
  { value:'🟡 5★ activated', label:'🟡 5★ (Yellow)' },
  { value:'🔴 1★ activated', label:'🔴 1★ (Red)' },
  { value:'🔴 2★ activated', label:'🔴 2★ (Red)' },
  { value:'🔴 3★ activated', label:'🔴 3★ (Red)' },
  { value:'🔴 4★ activated', label:'🔴 4★ (Red)' },
  { value:'🔴 5★ activated', label:'🔴 5★ (Red)' },
];
function conditionOptionsHTML(selected){
  return CONDITION_OPTIONS.map(o =>
    `<option value="${o.value}"${o.value === selected ? ' selected' : ''}>${o.label}</option>`
  ).join('');
}

function addTierRow(key, threshold, description, condition){
  const container = document.getElementById(`tiers_${key}`);
  const row = document.createElement('div');
  row.className = 'stat-row';
  row.style.gridTemplateColumns = '1fr 2fr 1fr auto';
  row.innerHTML = `
    <input type="text" class="tierThreshold" placeholder="10k Yr">
    <input type="text" class="tierDescription" placeholder="Tier description">
    <select class="tierCondition">${conditionOptionsHTML(condition || '')}</select>
    <div class="icon-btn removeTierRow" title="Remove">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </div>
  `;
  row.querySelector('.tierThreshold').value = threshold || '';
  row.querySelector('.tierDescription').value = description || '';
  row.querySelector('.removeTierRow').addEventListener('click', () => row.remove());
  container.appendChild(row);
}

function readTierRows(key){
  const container = document.getElementById(`tiers_${key}`);
  return Array.from(container.querySelectorAll('.stat-row')).map(row => ({
    threshold: row.querySelector('.tierThreshold').value.trim(),
    description: row.querySelector('.tierDescription').value.trim(),
    condition: row.querySelector('.tierCondition').value.trim(),
  })).filter(t => t.threshold || t.description);
}

function getAbilityAt(page, path){
  let obj = page;
  for (const k of path){ obj = obj && obj[k]; }
  return obj || {};
}

function fillSpiritForm(page){
  document.getElementById('fRarity').value = page.rarity || 'R';
  document.getElementById('fBgImage').value = page.backgroundImage || '';
  document.getElementById('fBgImagePathDisplay').textContent = page.backgroundImage || 'No file selected';
  const savedSpiritMechanics = page.mechanics || [];
  document.querySelectorAll('#spiritMechanicCheckboxes .tag-toggle').forEach(el => {
    el.classList.toggle('active', savedSpiritMechanics.includes(el.dataset.mechanic));
  });
  SPIRIT_SLOTS.forEach(slot => {
    const key = slotKey(slot.path);
    const ab = getAbilityAt(page, slot.path);
    document.getElementById(`sp_${key}_title`).value = ab.title || '';
    document.getElementById(`sp_${key}_key`).value = ab.key || '';
    document.getElementById(`sp_${key}_icon`).value = ab.icon || '';
    document.getElementById(`sp_${key}_description`).value = ab.description || '';
    if (slot.full){
      document.getElementById(`sp_${key}_cost`).value = ab.cost || '';
      document.getElementById(`sp_${key}_cd`).value = ab.cd || '';
      document.getElementById(`sp_${key}_haloTitle`).value = ab.haloTitle || '';
      document.getElementById(`sp_${key}_haloDescription`).value = ab.haloDescription || '';
      document.getElementById(`tiers_${key}`).innerHTML = '';
      (ab.tiers || []).forEach(tier => addTierRow(key, tier.threshold, tier.description, tier.condition));
    }
  });
  fillFusionForm(page);
  fillSkinsForm(page);
}

const DEFAULT_TIER_THRESHOLDS = ['1k Yr', '10k Yr', '25k Yr', '50k Yr', '100k Yr'];

function clearSpiritForm(){
  document.getElementById('fRarity').value = 'R';
  document.getElementById('fBgImage').value = '';
  document.getElementById('fBgImagePathDisplay').textContent = 'No file selected';
  document.querySelectorAll('#spiritMechanicCheckboxes .tag-toggle').forEach(el => el.classList.remove('active'));
  SPIRIT_SLOTS.forEach(slot => {
    const key = slotKey(slot.path);
    document.getElementById(`sp_${key}_title`).value = '';
    document.getElementById(`sp_${key}_key`).value = '';
    document.getElementById(`sp_${key}_icon`).value = '';
    document.getElementById(`sp_${key}_description`).value = '';
    if (slot.full){
      document.getElementById(`sp_${key}_cost`).value = '';
      document.getElementById(`sp_${key}_cd`).value = '';
      document.getElementById(`sp_${key}_haloTitle`).value = '';
      document.getElementById(`sp_${key}_haloDescription`).value = '';
      const tc = document.getElementById(`tiers_${key}`);
      if (tc) tc.innerHTML = '';
      DEFAULT_TIER_THRESHOLDS.forEach(th => addTierRow(key, th, '', ''));
    }
  });
  clearFusionForm();
  clearSkinsForm();
}

/* ---------- Fusion Skill (optional, one Spirit + a partner) ---------- */
let fusionEnabled = false;

function buildFusionCard(){
  const wrap = document.getElementById('fusionCardWrap');
  wrap.innerHTML = `
    <div class="card">
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:4px;">
        <h3 style="margin:0;">Fusion Skill</h3>
        <div class="btn btn-danger" id="removeFusionBtn" style="padding:6px 12px; font-size:12.5px;">🗑️ Remove</div>
      </div>
      <div class="row2">
        <div class="field"><label>Title</label><input type="text" id="sp_fusion_title"></div>
        <div class="field"><label>Keyword (e.g. Dmg, 35k Yr…)</label><input type="text" id="sp_fusion_key"></div>
      </div>
      <div class="row2">
        <div class="field"><label>Icon (temporary emoji)</label><input type="text" id="sp_fusion_icon" placeholder="◆"></div>
        <div class="field">
          <label>Cost / CD (seconds)</label>
          <div style="display:flex; gap:8px;">
            <input type="text" id="sp_fusion_cost" placeholder="Cost">
            <input type="text" id="sp_fusion_cd" placeholder="CD (s)">
          </div>
        </div>
      </div>
      <div class="field">
        <label>Fuses with</label>
        <select id="sp_fusion_fuseWith"></select>
      </div>
      <div class="field">
        <label>Description: use [Term] to link a glossary word</label>
        <textarea id="sp_fusion_description"></textarea>
      </div>
      <div class="field">
        <label>Tiers (threshold / description / activation condition)</label>
        <div class="stat-rows" id="tiers_fusion"></div>
        <div class="add-row-btn" id="addFusionTierBtn">+ Add a tier</div>
      </div>
    </div>
  `;
  populateFuseWithSelect();
  document.getElementById('addFusionTierBtn').addEventListener('click', () => addTierRow('fusion', '', '', ''));
  document.getElementById('removeFusionBtn').addEventListener('click', () => {
    fusionEnabled = false;
    document.getElementById('fusionCardWrap').innerHTML = '';
    document.getElementById('addFusionBtn').style.display = 'inline-block';
  });
}

function populateFuseWithSelect(selected){
  const list = (window.WIKI.personnages || []).filter(p => p.id !== editingId);
  const sel = document.getElementById('sp_fusion_fuseWith');
  if (!sel) return;
  sel.innerHTML = `<option value="">— Choose a Spirit —</option>` +
    list.map(p => `<option value="${p.id}"${p.id === selected ? ' selected' : ''}>${p.title}</option>`).join('');
}

document.getElementById('addFusionBtn').addEventListener('click', () => {
  fusionEnabled = true;
  buildFusionCard();
  document.getElementById('addFusionBtn').style.display = 'none';
});

function clearFusionForm(){
  fusionEnabled = false;
  document.getElementById('fusionCardWrap').innerHTML = '';
  document.getElementById('addFusionBtn').style.display = 'inline-block';
}

function fillFusionForm(page){
  if (page.fusion && page.fusion.title){
    fusionEnabled = true;
    document.getElementById('addFusionBtn').style.display = 'none';
    buildFusionCard();
    document.getElementById('sp_fusion_title').value = page.fusion.title || '';
    document.getElementById('sp_fusion_key').value = page.fusion.key || '';
    document.getElementById('sp_fusion_icon').value = page.fusion.icon || '';
    document.getElementById('sp_fusion_cost').value = page.fusion.cost || '';
    document.getElementById('sp_fusion_cd').value = page.fusion.cd || '';
    document.getElementById('sp_fusion_description').value = page.fusion.description || '';
    populateFuseWithSelect(page.fusion.fuseWith || '');
    (page.fusion.tiers || []).forEach(t => addTierRow('fusion', t.threshold, t.description, t.condition));
  } else {
    clearFusionForm();
  }
}

function readFusionData(){
  if (!fusionEnabled) return null;
  const title = document.getElementById('sp_fusion_title').value.trim();
  if (!title) return null;
  return {
    title,
    key: document.getElementById('sp_fusion_key').value.trim(),
    icon: document.getElementById('sp_fusion_icon').value.trim() || '◆',
    cost: Number(document.getElementById('sp_fusion_cost').value) || 0,
    cd: Number(document.getElementById('sp_fusion_cd').value) || 0,
    fuseWith: document.getElementById('sp_fusion_fuseWith').value,
    description: document.getElementById('sp_fusion_description').value,
    tiers: readTierRows('fusion'),
  };
}

/* ---------- Skins (repeatable list, each with its own image) ---------- */
function skinIdSlug(){ return 's' + Date.now() + Math.floor(Math.random()*1000); }

function addSkinRow(skin){
  skin = skin || { id: skinIdSlug(), name:'', image:'', description:'' };
  const rows = document.getElementById('skinsRows');
  const row = document.createElement('div');
  row.className = 'card skin-row';
  row.dataset.id = skin.id;
  row.style.background = 'var(--panel-2)';
  row.style.marginBottom = '12px';
  row.innerHTML = `
    <div class="row2">
      <div class="field"><label>Skin Name</label><input type="text" class="skinName" placeholder="Frostforged Blade"></div>
      <div class="field">
        <label>Image</label>
        <div class="btn-row" style="margin-bottom:6px;"><div class="btn pickSkinImageBtn" style="padding:8px 12px; font-size:13px;">📁 Browse</div></div>
        <div class="skinImagePath" style="color:var(--text-dim); font-size:12px;">No file selected</div>
        <input type="hidden" class="skinImage">
      </div>
    </div>
    <div class="field">
      <label>Description / how to obtain</label>
      <textarea class="skinDescription" placeholder="Winter Event skin, limited-time gacha…"></textarea>
    </div>
    <div class="btn btn-danger removeSkinBtn" style="padding:6px 12px; font-size:12.5px;">🗑️ Remove</div>
  `;
  row.querySelector('.skinName').value = skin.name || '';
  row.querySelector('.skinImage').value = skin.image || '';
  row.querySelector('.skinImagePath').textContent = skin.image || 'No file selected';
  row.querySelector('.skinDescription').value = skin.description || '';

  row.querySelector('.removeSkinBtn').addEventListener('click', () => row.remove());
  row.querySelector('.pickSkinImageBtn').addEventListener('click', async () => {
    const status = await fsGetStatus();
    if (status !== 'connected'){
      showToast('Connect your project folder first (top of the page) to browse files');
      return;
    }
    const idForFolder = document.getElementById('fId').value.trim() ||
      slugify(document.getElementById('fTitle').value.trim()) || 'untitled';
    const skinNameSlug = slugify(row.querySelector('.skinName').value.trim() || 'skin');
    try {
      const path = await fsPickAndCopyImage(['images', 'personnages', idForFolder, 'skins'], `${idForFolder}-${skinNameSlug}`);
      row.querySelector('.skinImage').value = path;
      row.querySelector('.skinImagePath').textContent = path;
      showToast('Skin image copied into your project ✅');
    } catch (e) {
      if (e && e.name !== 'AbortError') showToast('Could not copy that image');
    }
  });

  rows.appendChild(row);
}

document.getElementById('addSkinBtn').addEventListener('click', () => addSkinRow());

function readSkinRows(){
  return Array.from(document.querySelectorAll('#skinsRows .skin-row')).map(row => ({
    id: row.dataset.id,
    name: row.querySelector('.skinName').value.trim(),
    image: row.querySelector('.skinImage').value.trim(),
    description: row.querySelector('.skinDescription').value,
  })).filter(s => s.name || s.image);
}

function clearSkinsForm(){
  document.getElementById('skinsRows').innerHTML = '';
}

function fillSkinsForm(page){
  clearSkinsForm();
  (page.skins || []).forEach(skin => addSkinRow(skin));
}

/* ---------- Skill text import (paste formatted skill text, auto-fill) ---------- */
function parseSkillImport(text){
  const lines = text.replace(/\r\n/g, '\n').split('\n');
  const headerRe = /^(Innate Skill|Skill\s*\d+)\s*[—-]\s*(.+)$/i;
  const blocks = [];
  let current = null;
  lines.forEach(line => {
    const m = line.match(headerRe);
    if (m){
      if (current) blocks.push(current);
      current = { type: m[1].replace(/\s+/g, ' ').trim(), title: m[2].trim(), lines: [] };
    } else if (current){
      current.lines.push(line);
    }
  });
  if (current) blocks.push(current);

  const skillNumToSlot = {
    '1': ['ultimate', 'skill1'], '4': ['ultimate', 'skill4'],
    '2': ['skill', 'skill2'], '6': ['skill', 'skill6'],
    '3': ['passive', 'skill3'], '5': ['passive', 'skill5'],
  };
  const tierRe = /^(\d+k\s*Yr)\s*:\s*(.+?)(?:\s*⚠\s*Spirit\s*(\d+)\s*(⭐|🔴)\s*activated)?\s*$/i;

  const result = { normalAttack: null, initiative: null, ultimate: {}, skill: {}, passive: {} };
  let innateCount = 0;

  blocks.forEach(block => {
    const body = block.lines.join('\n');
    const keyMatch = body.match(/Tags:\s*(.+)/i);
    const costCdMatch = body.match(/Cost:\s*(.+?)\s*\|\s*CD:\s*(.+)/i);
    const key = keyMatch ? keyMatch[1].trim() : '';
    let cost = 0, cd = 0;
    if (costCdMatch){
      cost = /none/i.test(costCdMatch[1]) ? 0 : (parseInt(costCdMatch[1]) || 0);
      cd = parseInt(costCdMatch[2]) || 0;
    }

    const tiers = [];
    const descLines = [];
    let inTiers = false;
    block.lines.forEach(line => {
      const tm = line.match(tierRe);
      if (tm){
        inTiers = true;
        let condition = '';
        if (tm[3] && tm[4]) condition = `${tm[4] === '⭐' ? '🟡' : '🔴'} ${tm[3]}★ activated`;
        tiers.push({ threshold: tm[1].replace(/\s+/g, ' '), description: tm[2].trim(), condition });
      } else if (!inTiers && !/^Tags:/i.test(line) && !/^Cost:/i.test(line) && line.trim() !== ''){
        descLines.push(line.trim());
      }
    });

    const ability = { title: block.title, key, description: descLines.join(' ').trim(), cost, cd, tiers };

    if (/^innate skill$/i.test(block.type)){
      innateCount++;
      if (innateCount === 1) result.normalAttack = ability;
      else if (innateCount === 2) result.initiative = ability;
    } else {
      const num = block.type.replace(/Skill\s*/i, '').trim();
      const target = skillNumToSlot[num];
      if (target) result[target[0]][target[1]] = ability;
    }
  });

  return result;
}

function applyParsedSkills(parsed){
  function fillAbility(key, ability, full){
    if (!ability) return;
    document.getElementById(`sp_${key}_title`).value = ability.title || '';
    document.getElementById(`sp_${key}_key`).value = ability.key || '';
    document.getElementById(`sp_${key}_description`).value = ability.description || '';
    if (full){
      document.getElementById(`sp_${key}_cost`).value = ability.cost || '';
      document.getElementById(`sp_${key}_cd`).value = ability.cd || '';
      const tc = document.getElementById(`tiers_${key}`);
      tc.innerHTML = '';
      (ability.tiers || []).forEach(t => addTierRow(key, t.threshold, t.description, t.condition));
    }
  }
  fillAbility('normalAttack', parsed.normalAttack, false);
  fillAbility('initiative', parsed.initiative, false);
  fillAbility('ultimate_skill1', parsed.ultimate.skill1, true);
  fillAbility('ultimate_skill4', parsed.ultimate.skill4, true);
  fillAbility('skill_skill2', parsed.skill.skill2, true);
  fillAbility('skill_skill6', parsed.skill.skill6, true);
  fillAbility('passive_skill3', parsed.passive.skill3, true);
  fillAbility('passive_skill5', parsed.passive.skill5, true);
}

document.getElementById('parseSkillImportBtn').addEventListener('click', () => {
  const text = document.getElementById('skillImportText').value;
  if (!text.trim()){ showToast('Paste some skill text first'); return; }
  const parsed = parseSkillImport(text);
  const found = [parsed.normalAttack, parsed.initiative, parsed.ultimate.skill1, parsed.ultimate.skill4,
    parsed.skill.skill2, parsed.skill.skill6, parsed.passive.skill3, parsed.passive.skill5].filter(Boolean).length;
  if (!found){ showToast('Could not recognize any skill blocks in that text'); return; }
  applyParsedSkills(parsed);
  showToast(`${found} skill block(s) imported — review below, then Save`);
});

function populateBeastZoneSelect(selected){
  const zones = window.WIKI.zones || [];
  const sel = document.getElementById('fBeastZone');
  if (!sel) return;
  sel.innerHTML = zones.map(z => `<option value="${z.id}"${z.id === selected ? ' selected' : ''}>${z.title}</option>`).join('');
}
function updateBeastZoneFieldVisibility(){
  const mode = document.getElementById('fBeastMode').value;
  document.getElementById('beastZoneField').style.display = mode === 'beastlord' ? 'block' : 'none';
}
document.getElementById('fBeastMode').addEventListener('change', updateBeastZoneFieldVisibility);

/* ---------- Spiribone (Bag Type = spiribone) ---------- */
const SPIRIBONE_GENRE_TYPES = {
  'Leg Bone (L)': { types: ['Plant', 'Phantasm', 'Bulwark'], order: 'hp-atk' },
  'Arm Bone (L)': { types: ['Serpent', 'Spider', 'Willpower'], order: 'hp-atk' },
  'Leg Bone (R)': { types: ['Volant', 'Insect', 'Wyvern'], order: 'atk-hp' },
  'Arm Bone (R)': { types: ['Beast', 'Scorpion', 'Direbear'], order: 'atk-hp' },
};
const SPIRIBONE_SINGLE_TYPES = {
  'Skull': ['Serpent', 'Plant', 'Spider', 'Phantasm', 'Willpower', 'Bulwark'],
  'Trunk': ['Beast', 'Volant', 'Scorpion', 'Insect', 'Direbear', 'Wyvern'],
};
const SPIRIBONE_STAR_NUMS = [null, 2, 3, 4, 5, 6];
const SPIRIBONE_TIER_THRESHOLDS = ['10k Yr', '25k Yr', '50k Yr', '80k Yr', '100k Yr'];

function spiriboneFixedLabels(genre){
  const cfg = SPIRIBONE_GENRE_TYPES[genre];
  if (cfg){
    const [t1, t2, t3] = cfg.types;
    const pair = cfg.order === 'hp-atk' ? ['HP', 'ATK'] : ['ATK', 'HP'];
    return [
      `${t1} Halo Basic ${pair[0]}`, `${t1} Halo Basic ${pair[1]}`,
      `${t2} Halo Basic ${pair[0]}`, `${t2} Halo Basic ${pair[1]}`,
      `${t3} Halo Basic ${pair[0]}`, `${t3} Halo Basic ${pair[1]}`,
    ];
  }
  if (SPIRIBONE_SINGLE_TYPES[genre]){
    return SPIRIBONE_SINGLE_TYPES[genre].map(t => `${t} Halo Basic Stats`);
  }
  return null;
}

function renderSpiriboneStarStats(saved){
  const genre = document.getElementById('fSpiriboneGenre').value;
  const fixedLabels = spiriboneFixedLabels(genre);
  const wrap = document.getElementById('spiriboneStarStatsRows');
  const rows = saved && saved.length === 6 ? saved : [0,1,2,3,4,5].map(() => ({ label:'', value:'' }));
  wrap.innerHTML = rows.map((row, i) => {
    const label = fixedLabels ? fixedLabels[i] : (row.label || '');
    const star = SPIRIBONE_STAR_NUMS[i];
    return `
      <div class="spiribone-star-row" data-idx="${i}" style="display:flex; gap:8px; align-items:center; margin-bottom:8px;">
        ${fixedLabels
          ? `<div class="spiribone-star-label-fixed" style="flex:2; padding:8px 10px; background:var(--panel-3); border-radius:7px; font-size:13px; color:var(--text-dim);">${label}</div>`
          : `<input type="text" class="spiribone-star-label" placeholder="Custom label" value="${label.replace(/"/g,'&quot;')}" style="flex:2; padding:8px 10px; border-radius:7px; background:var(--panel-2); border:1px solid var(--line); color:var(--text); font-size:13px;">`
        }
        ${star ? `<span style="color:var(--gold-bright); font-size:12.5px; white-space:nowrap;">${star}★</span>` : ''}
        <input type="text" class="spiribone-star-value" placeholder="${star ? 'Unlocked' : '+2.5%'}" value="${(row.value||'').replace(/"/g,'&quot;')}" style="flex:1; padding:8px 10px; border-radius:7px; background:var(--panel-2); border:1px solid var(--line); color:var(--text); font-size:13px;">
      </div>
    `;
  }).join('');
}
function spiriboneDefaultRating(genre){
  return (genre === 'Skull' || genre === 'Trunk') ? '8300' : '5000';
}
function updateSpiriboneTypeFieldVisibility(){
  const genre = document.getElementById('fSpiriboneGenre').value;
  const field = document.getElementById('spiriboneTypeField');
  if (field) field.style.display = (genre === 'Skull' || genre === 'Trunk') ? 'none' : 'block';
}
document.getElementById('fSpiriboneGenre').addEventListener('change', () => {
  renderSpiriboneStarStats();
  updateSpiriboneTypeFieldVisibility();
  const ratingEl = document.getElementById('fSpiriboneRating');
  if (!ratingEl.value.trim()){
    ratingEl.value = spiriboneDefaultRating(document.getElementById('fSpiriboneGenre').value);
  }
});

function readSpiriboneStarStats(){
  return Array.from(document.querySelectorAll('#spiriboneStarStatsRows .spiribone-star-row')).map(row => {
    const labelInput = row.querySelector('.spiribone-star-label');
    const labelFixed = row.querySelector('.spiribone-star-label-fixed');
    return {
      label: labelInput ? labelInput.value.trim() : (labelFixed ? labelFixed.textContent.trim() : ''),
      value: row.querySelector('.spiribone-star-value').value.trim(),
    };
  });
}

const SPIRIBONE_TIER_CONDITIONS = {
  '10k Yr': 'Spiribone 2⭐ Effective',
  '25k Yr': 'Spiribone 3⭐ Effective',
  '50k Yr': 'Spiribone 4⭐ Effective',
  '80k Yr': 'Spiribone 5⭐ Effective',
  '100k Yr': 'Spiribone 6⭐ Effective',
};

function renderSpiriboneTierRows(tiers){
  const wrap = document.getElementById('tiers_spiribone');
  const data = SPIRIBONE_TIER_THRESHOLDS.map(th => {
    const saved = (tiers || []).find(t => t.threshold === th);
    return { threshold: th, description: saved ? saved.description : '' };
  });
  wrap.innerHTML = data.map(t => `
    <div class="stat-row" data-threshold="${t.threshold}" style="grid-template-columns:110px 2fr 1fr;">
      <div style="padding:8px 10px; background:var(--panel-3); border-radius:7px; font-size:13px; color:var(--gold-bright); display:flex; align-items:center;">${t.threshold}</div>
      <input type="text" class="spiribone-tier-desc" placeholder="Effect at this tier…" value="${t.description.replace(/"/g,'&quot;')}">
      <div style="padding:8px 10px; background:var(--panel-2); border:1px solid var(--line); border-radius:7px; font-size:12.5px; color:var(--text-dim); display:flex; align-items:center;">${SPIRIBONE_TIER_CONDITIONS[t.threshold]}</div>
    </div>
  `).join('');
}

function readSpiriboneTierRows(){
  return Array.from(document.querySelectorAll('#tiers_spiribone .stat-row')).map(row => ({
    threshold: row.dataset.threshold,
    description: row.querySelector('.spiribone-tier-desc').value.trim(),
    condition: SPIRIBONE_TIER_CONDITIONS[row.dataset.threshold],
  }));
}

function clearSpiriboneTierRows(){
  renderSpiriboneTierRows([]);
}
function fillSpiriboneTierRows(tiers){
  renderSpiriboneTierRows(tiers);
}

/* ---------- Spiribone text import ---------- */
function parseSpiriboneImport(text){
  const rawLines = text.replace(/\r\n/g, '\n').split('\n').map(l => l.replace(/\t/g, '    '));
  const lines = rawLines.map(l => l.trimEnd()).filter(l => l.trim() !== '');

  let idx = 0;
  const headerLine = (lines[idx++] || '').trim();
  const genreMatch = headerLine.match(/(Arm Bone\s*\([LR]\)|Leg Bone\s*\([LR]\)|Skull|Trunk)/i);
  let genre = '';
  if (genreMatch){
    const found = genreMatch[1].replace(/\s+/g, ' ').trim();
    const known = ['Arm Bone (L)', 'Arm Bone (R)', 'Leg Bone (L)', 'Leg Bone (R)', 'Skull', 'Trunk'];
    genre = known.find(k => k.toLowerCase() === found.toLowerCase()) || found;
  }

  if (/^skill$/i.test((lines[idx] || '').trim())) idx++;

  const skillLine = (lines[idx++] || '').trim();
  const skillParts = skillLine.split(/\s{2,}/).map(s => s.trim()).filter(Boolean);
  const skillName = skillParts[0] || '';
  const skillTag = skillParts[1] || '';

  const description = (lines[idx++] || '').trim();

  const tierRe = /^(\d+k\s*Yr)\s+(.+)$/i;
  const tiers = {};
  for (; idx < lines.length; idx++){
    const m = lines[idx].trim().match(tierRe);
    if (m) tiers[m[1].replace(/\s+/g, ' ')] = m[2].trim();
  }

  return { genre, headerLine, skillName, skillTag, description, tiers };
}

function applySpiriboneImport(parsed){
  if (parsed.skillName){
    document.getElementById('fTitle').value = parsed.skillName;
    document.getElementById('fId').value = slugify(parsed.skillName);
  }
  if (parsed.genre){
    const genreSelect = document.getElementById('fSpiriboneGenre');
    const hasOption = Array.from(genreSelect.options).some(o => o.value === parsed.genre);
    if (hasOption){
      genreSelect.value = parsed.genre;
      genreSelect.dispatchEvent(new Event('change'));
    }
  }
  document.getElementById('fSpiriboneSkillTitle').value = parsed.headerLine;
  document.getElementById('fSpiriboneSkillTag').value = parsed.skillTag;
  document.getElementById('fSpiriboneSkillDesc').value = parsed.description;

  SPIRIBONE_TIER_THRESHOLDS.forEach(th => {
    const key = Object.keys(parsed.tiers).find(k => k.replace(/\s+/g,'').toLowerCase() === th.replace(/\s+/g,'').toLowerCase());
    if (!key) return;
    const row = document.querySelector(`#tiers_spiribone .stat-row[data-threshold="${th}"] .spiribone-tier-desc`);
    if (row) row.value = parsed.tiers[key];
  });
}

document.getElementById('parseSpiriboneImportBtn').addEventListener('click', () => {
  const text = document.getElementById('spiriboneImportText').value;
  if (!text.trim()){ showToast('Paste some skill text first'); return; }
  const parsed = parseSpiriboneImport(text);
  if (!parsed.skillName && !parsed.genre){ showToast('Could not recognize that text format'); return; }
  applySpiriboneImport(parsed);
  showToast('Spiribone imported — review the fields below, then Save');
});

function updateTrialFieldsVisibility(){
  const el = document.getElementById('trialFieldsField');
  if (el) el.style.display = currentCat === 'trials' ? 'block' : 'none';
}
/* ---------- Bag "Contains" picker (this entry holds/rewards other Bag items) ---------- */
let containsSelectedIds = [];
let beastContainsSelectedIds = [];
let containsPickerTarget = 'bag'; // 'bag' or 'beast'
/* ---------- Description "Link to…" picker (inserts a [text](category/id) link) ---------- */
let linkPickerTargetTextarea = null;
let linkPickerSelectionStart = 0;
let linkPickerSelectionEnd = 0;
const LINK_PICKER_CATEGORIES = [
  { id: 'personnages', label: 'Spirits' },
  { id: 'monstres', label: 'Beast' },
  { id: 'objets', label: 'Bag' },
  { id: 'zones', label: 'Zones' },
  { id: 'trials', label: 'Trial' },
];
function openLinkPicker(textarea){
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  if (start === end){
    showToast('Select some text first, then click Link');
    return;
  }
  linkPickerTargetTextarea = textarea;
  linkPickerSelectionStart = start;
  linkPickerSelectionEnd = end;
  document.getElementById('linkPickerModal').style.display = 'flex';
  document.getElementById('linkPickerSearch').value = '';
  document.getElementById('linkPickerCategoryFilter').value = '';
  renderLinkPickerList();
}
function closeLinkPicker(){
  document.getElementById('linkPickerModal').style.display = 'none';
  linkPickerTargetTextarea = null;
}
function renderLinkPickerList(){
  const search = document.getElementById('linkPickerSearch').value.toLowerCase();
  const catFilter = document.getElementById('linkPickerCategoryFilter').value;
  const cats = catFilter ? LINK_PICKER_CATEGORIES.filter(c => c.id === catFilter) : LINK_PICKER_CATEGORIES;
  let results = [];
  cats.forEach(cat => {
    const items = ((window.WIKI && window.WIKI[cat.id]) || []).filter(o =>
      !search || o.title.toLowerCase().includes(search)
    );
    items.forEach(o => results.push({ ...o, __cat: cat.id, __catLabel: cat.label }));
  });
  const list = document.getElementById('linkPickerList');
  if (!results.length){
    list.innerHTML = `<div class="empty-state" style="grid-column:1/-1; padding:20px;">No pages match.</div>`;
    return;
  }
  list.innerHTML = results.map(o => `
    <div class="entry-row" data-cat="${o.__cat}" data-id="${o.id}" style="cursor:pointer;">
      <div class="row-top">
        <div class="thumb" style="${o.image ? `background-image:url('${o.image}')` : ''}"></div>
        <div class="info">
          <div class="t">${o.title}</div>
          <div class="s" style="color:var(--text-dim); font-size:11px;">${o.__catLabel}</div>
        </div>
      </div>
    </div>
  `).join('');
  list.querySelectorAll('.entry-row').forEach(row => {
    row.addEventListener('click', () => {
      insertLinkIntoTextarea(row.dataset.cat, row.dataset.id);
    });
  });
}
function insertLinkIntoTextarea(cat, id){
  const textarea = linkPickerTargetTextarea;
  if (!textarea) return;
  const value = textarea.value;
  const selectedText = value.slice(linkPickerSelectionStart, linkPickerSelectionEnd);
  const linkMarkup = `[${selectedText}](${cat}/${id})`;
  textarea.value = value.slice(0, linkPickerSelectionStart) + linkMarkup + value.slice(linkPickerSelectionEnd);
  closeLinkPicker();
  textarea.focus();
  textarea.selectionStart = textarea.selectionEnd = linkPickerSelectionStart + linkMarkup.length;
  showToast('Link inserted');
}
document.getElementById('closeLinkPickerBtn').addEventListener('click', closeLinkPicker);
document.getElementById('linkPickerModal').addEventListener('click', (e) => {
  if (e.target.id === 'linkPickerModal') closeLinkPicker();
});
document.getElementById('linkPickerSearch').addEventListener('input', renderLinkPickerList);
document.getElementById('linkPickerCategoryFilter').addEventListener('change', renderLinkPickerList);

function openContainsPicker(target){
  containsPickerTarget = target || 'bag';
  document.getElementById('containsPickerModal').style.display = 'flex';
  document.getElementById('containsPickerSearch').value = '';
  document.getElementById('containsPickerTypeFilter').value = '';
  renderContainsPickerList();
}
function closeContainsPicker(){
  document.getElementById('containsPickerModal').style.display = 'none';
}
function renderContainsPickerList(){
  const search = document.getElementById('containsPickerSearch').value.toLowerCase();
  const typeFilter = document.getElementById('containsPickerTypeFilter').value;
  const selfId = document.getElementById('fId').value.trim();
  const activeIds = containsPickerTarget === 'beast' ? beastContainsSelectedIds : containsSelectedIds;
  const items = ((window.WIKI && window.WIKI.objets) || []).filter(o => {
    if (o.id === selfId) return false;
    if (typeFilter && o.bagType !== typeFilter) return false;
    if (search && !o.title.toLowerCase().includes(search)) return false;
    return true;
  });
  const list = document.getElementById('containsPickerList');
  if (!items.length){
    list.innerHTML = `<div class="empty-state" style="grid-column:1/-1; padding:20px;">No items match.</div>`;
    return;
  }
  list.innerHTML = items.map(o => `
    <div class="entry-row" data-id="${o.id}" style="cursor:pointer; ${activeIds.includes(o.id) ? 'border-color:var(--gold); background:rgba(240,193,75,0.08);' : ''}">
      <div class="row-top">
        <div class="thumb" style="${o.image ? `background-image:url('${o.image}')` : ''}"></div>
        <div class="info"><div class="t">${o.title}</div></div>
      </div>
    </div>
  `).join('');
  list.querySelectorAll('.entry-row').forEach(row => {
    row.addEventListener('click', () => {
      const id = row.dataset.id;
      if (containsPickerTarget === 'beast'){
        if (beastContainsSelectedIds.includes(id)) beastContainsSelectedIds = beastContainsSelectedIds.filter(x => x !== id);
        else beastContainsSelectedIds.push(id);
        renderBeastContainsChips();
      } else {
        if (containsSelectedIds.includes(id)) containsSelectedIds = containsSelectedIds.filter(x => x !== id);
        else containsSelectedIds.push(id);
        renderContainsChips();
      }
      renderContainsPickerList();
    });
  });
}
function renderContainsChips(){
  const wrap = document.getElementById('containsChips');
  const items = ((window.WIKI && window.WIKI.objets) || []).filter(o => containsSelectedIds.includes(o.id));
  if (!items.length){ wrap.innerHTML = `<span style="color:var(--text-dim); font-size:12.5px;">No items added yet.</span>`; return; }
  wrap.innerHTML = items.map(o => `
    <span class="tag" data-id="${o.id}" style="display:inline-flex; align-items:center; gap:6px; cursor:pointer;">
      ${o.title} <span style="color:var(--red);">✕</span>
    </span>
  `).join('');
  wrap.querySelectorAll('.tag').forEach(chip => {
    chip.addEventListener('click', () => {
      containsSelectedIds = containsSelectedIds.filter(x => x !== chip.dataset.id);
      renderContainsChips();
    });
  });
}
function renderBeastContainsChips(){
  const wrap = document.getElementById('beastContainsChips');
  const items = ((window.WIKI && window.WIKI.objets) || []).filter(o => beastContainsSelectedIds.includes(o.id));
  if (!items.length){ wrap.innerHTML = `<span style="color:var(--text-dim); font-size:12.5px;">No items added yet.</span>`; return; }
  wrap.innerHTML = items.map(o => `
    <span class="tag" data-id="${o.id}" style="display:inline-flex; align-items:center; gap:6px; cursor:pointer;">
      ${o.title} <span style="color:var(--red);">✕</span>
    </span>
  `).join('');
  wrap.querySelectorAll('.tag').forEach(chip => {
    chip.addEventListener('click', () => {
      beastContainsSelectedIds = beastContainsSelectedIds.filter(x => x !== chip.dataset.id);
      renderBeastContainsChips();
    });
  });
}
document.getElementById('openContainsPickerBtn').addEventListener('click', () => openContainsPicker('bag'));
document.getElementById('openBeastContainsPickerBtn').addEventListener('click', () => openContainsPicker('beast'));
document.getElementById('closeContainsPickerBtn').addEventListener('click', closeContainsPicker);
document.getElementById('containsPickerModal').addEventListener('click', (e) => {
  if (e.target.id === 'containsPickerModal') closeContainsPicker();
});
document.getElementById('containsPickerSearch').addEventListener('input', renderContainsPickerList);
document.getElementById('containsPickerTypeFilter').addEventListener('change', renderContainsPickerList);

function updateBagSourceDropdownLabel(){
  const label = document.getElementById('bagSourceDropdownLabel');
  const checked = Array.from(document.querySelectorAll('#bagSourceCheckboxes .checkbox-row input:checked'));
  if (!checked.length){
    label.textContent = 'Select sources…';
  } else if (checked.length === 1){
    label.textContent = checked[0].closest('.checkbox-row').querySelector('span').textContent;
  } else {
    label.textContent = `${checked.length} sources selected`;
  }
}
/* ---------- Bag free-text sources (no linked page) ---------- */
let bagTextSources = [];
function renderBagTextSourceChips(){
  const wrap = document.getElementById('bagTextSourceChips');
  wrap.innerHTML = bagTextSources.map((txt, i) => `
    <span class="tag" data-idx="${i}" style="display:inline-flex; align-items:center; gap:6px; cursor:pointer;">
      ${txt} <span style="color:var(--red);">✕</span>
    </span>
  `).join('');
  wrap.querySelectorAll('.tag').forEach(chip => {
    chip.addEventListener('click', () => {
      bagTextSources.splice(Number(chip.dataset.idx), 1);
      renderBagTextSourceChips();
    });
  });
}
document.getElementById('addBagTextSourceBtn').addEventListener('click', () => {
  const input = document.getElementById('fBagTextSourceInput');
  const val = input.value.trim();
  if (!val) return;
  bagTextSources.push(val);
  input.value = '';
  renderBagTextSourceChips();
});
document.getElementById('fBagTextSourceInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter'){ e.preventDefault(); document.getElementById('addBagTextSourceBtn').click(); }
});

function populateBagSourceSelect(selected){
  const wrap = document.getElementById('bagSourceCheckboxes');
  if (!wrap) return;
  const trials = ((window.WIKI && window.WIKI.trials) || []).slice().sort((a, b) => a.title.localeCompare(b.title));
  const selectedArr = Array.isArray(selected) ? selected : (selected ? [selected] : []);
  if (!trials.length){
    wrap.innerHTML = `<span style="color:var(--text-dim); font-size:12.5px; padding:8px 10px; display:block;">No Trials created yet.</span>`;
    updateBagSourceDropdownLabel();
    return;
  }
  wrap.innerHTML = trials.map(t => `
    <label class="checkbox-row" data-source-id="${t.id}">
      <input type="checkbox" ${selectedArr.includes(t.id) ? 'checked' : ''}>
      <span>${t.title}</span>
    </label>
  `).join('');
  wrap.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', updateBagSourceDropdownLabel);
  });
  updateBagSourceDropdownLabel();
}
document.getElementById('bagSourceDropdownTrigger').addEventListener('click', (e) => {
  e.stopPropagation();
  const panel = document.getElementById('bagSourceCheckboxes');
  panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
});
document.addEventListener('click', (e) => {
  const dropdown = document.getElementById('bagSourceDropdown');
  if (dropdown && !dropdown.contains(e.target)){
    document.getElementById('bagSourceCheckboxes').style.display = 'none';
  }
});

function updateMaterialFieldsVisibility(){
  const el = document.getElementById('materialFieldsField');
  const bt = document.getElementById('fBagType').value;
  if (el) el.style.display = (bt === 'material' || bt === 'item') ? 'block' : 'none';
}
document.getElementById('fBagType').addEventListener('change', updateMaterialFieldsVisibility);
document.querySelectorAll('#materialApplicableSpiritCheckboxes .tag-toggle').forEach(el => {
  el.addEventListener('click', () => el.classList.toggle('active'));
});

function updateHaloFieldsVisibility(){
  const el = document.getElementById('haloFieldsField');
  if (el) el.style.display = document.getElementById('fBagType').value === 'halo' ? 'block' : 'none';
}
document.getElementById('fBagType').addEventListener('change', updateHaloFieldsVisibility);

function updateSpiriboneFieldsVisibility(){
  const el = document.getElementById('spiriboneFieldsField');
  if (!el) return;
  el.style.display = document.getElementById('fBagType').value === 'spiribone' ? 'block' : 'none';
}
document.getElementById('fBagType').addEventListener('change', updateSpiriboneFieldsVisibility);

function populateBeastSpiriboneSelects(selected1, selected2){
  const monsterType = document.getElementById('fMonsterType').value;
  const matches = ((window.WIKI && window.WIKI.objets) || [])
    .filter(o => o.bagType === 'spiribone' && o.spiriboneType === monsterType);
  const optionsHtml = `<option value="">— None —</option>` +
    matches.map(o => `<option value="${o.id}">${o.title}</option>`).join('');
  const sel1 = document.getElementById('fSpiribone1');
  const sel2 = document.getElementById('fSpiribone2');
  if (!sel1 || !sel2) return;
  sel1.innerHTML = optionsHtml;
  sel2.innerHTML = optionsHtml;
  if (selected1 && matches.some(o => o.id === selected1)) sel1.value = selected1;
  if (selected2 && matches.some(o => o.id === selected2)) sel2.value = selected2;
}
document.getElementById('fMonsterType')?.addEventListener('change', () => populateBeastSpiriboneSelects());

function updateSoulcoreFieldsVisibility(){
  const el = document.getElementById('soulcoreFieldsField');
  if (!el) return;
  el.style.display = document.getElementById('fBagType').value === 'soulcore' ? 'block' : 'none';
}
document.getElementById('fBagType').addEventListener('change', updateSoulcoreFieldsVisibility);
document.querySelectorAll('#soulcoreTypeCheckboxes .tag-toggle').forEach(el => {
  el.addEventListener('click', () => el.classList.toggle('active'));
});
document.querySelectorAll('#haloSpiritTypeCheckboxes .tag-toggle').forEach(el => {
  el.addEventListener('click', () => el.classList.toggle('active'));
});
document.querySelectorAll('#spiritMechanicCheckboxes .tag-toggle').forEach(el => {
  el.addEventListener('click', () => el.classList.toggle('active'));
});
document.querySelectorAll('#spiriboneMechanicCheckboxes .tag-toggle').forEach(el => {
  el.addEventListener('click', () => el.classList.toggle('active'));
});

function updateSoulcoreNamedSetVisibility(){
  const named = document.getElementById('fSoulcoreNamedSet').checked;
  document.getElementById('soulcoreSetNameFields').style.display = named ? 'block' : 'none';
  document.getElementById('soulcoreTier12Fields').style.display = named ? 'block' : 'none';
  document.getElementById('soulcoreTier24Fields').style.display = named ? 'none' : 'block';
}
document.getElementById('fSoulcoreNamedSet').addEventListener('change', updateSoulcoreNamedSetVisibility);

document.getElementById('pickSoulcoreDescImageBtn').addEventListener('click', async () => {
  const status = await fsGetStatus();
  if (status !== 'connected'){ showToast('Connect your project folder first (top of the page) to browse files'); return; }
  const idForFolder = document.getElementById('fId').value.trim() ||
    slugify(document.getElementById('fTitle').value.trim()) || 'untitled';
  try {
    const path = await fsPickAndCopyImage(['images', 'objets', idForFolder], `${idForFolder}-description`);
    document.getElementById('fSoulcoreDescImage').value = path;
    document.getElementById('fSoulcoreDescImagePathDisplay').textContent = path;
    showToast('Description image copied into your project ✅');
  } catch (e) {
    if (e && e.name !== 'AbortError') showToast('Could not copy that image');
  }
});

document.getElementById('pickSoulcoreSetIconBtn').addEventListener('click', async () => {
  const status = await fsGetStatus();
  if (status !== 'connected'){ showToast('Connect your project folder first (top of the page) to browse files'); return; }
  const idForFolder = document.getElementById('fId').value.trim() ||
    slugify(document.getElementById('fTitle').value.trim()) || 'untitled';
  try {
    const path = await fsPickAndCopyImage(['images', 'objets', idForFolder], `${idForFolder}-set-icon`);
    document.getElementById('fSoulcoreSetIcon').value = path;
    document.getElementById('fSoulcoreSetIconPathDisplay').textContent = path;
    showToast('Set icon copied into your project ✅');
  } catch (e) {
    if (e && e.name !== 'AbortError') showToast('Could not copy that image');
  }
});

function readSpiritData(){
  const data = {
    rarity: document.getElementById('fRarity').value,
    backgroundImage: document.getElementById('fBgImage').value.trim(),
    mechanics: Array.from(document.querySelectorAll('#spiritMechanicCheckboxes .tag-toggle.active')).map(el => el.dataset.mechanic),
  };
  const setAt = (obj, path, val) => {
    let o = obj;
    for (let i=0;i<path.length-1;i++){ o[path[i]] = o[path[i]] || {}; o = o[path[i]]; }
    o[path[path.length-1]] = val;
  };
  SPIRIT_SLOTS.forEach(slot => {
    const key = slotKey(slot.path);
    const ability = {
      title: document.getElementById(`sp_${key}_title`).value.trim(),
      key: document.getElementById(`sp_${key}_key`).value.trim(),
      icon: document.getElementById(`sp_${key}_icon`).value.trim() || '◆',
      description: document.getElementById(`sp_${key}_description`).value,
    };
    if (slot.full){
      ability.cost = Number(document.getElementById(`sp_${key}_cost`).value) || 0;
      ability.cd = Number(document.getElementById(`sp_${key}_cd`).value) || 0;
      ability.haloTitle = document.getElementById(`sp_${key}_haloTitle`).value.trim();
      ability.haloDescription = document.getElementById(`sp_${key}_haloDescription`).value;
      ability.tiers = readTierRows(key);
    }
    setAt(data, slot.path, ability);
  });
  return data;
}

/* ---------- Sub-categories (Bag & Beast) ---------- */
window.SUBCATS = window.SUBCATS || {};

function populateSubcatSelect(selected){
  const list = window.SUBCATS[currentCat] || [];
  const sel = document.getElementById('fSubcat');
  sel.innerHTML = `<option value="">No category</option>` +
    list.map(c => `<option value="${c}">${c}</option>`).join('');
  sel.value = selected && list.includes(selected) ? selected : '';
}

document.getElementById('addSubcatBtn').addEventListener('click', () => {
  const name = document.getElementById('fNewSubcat').value.trim();
  if (!name){ showToast('Enter a category name first'); return; }
  window.SUBCATS[currentCat] = window.SUBCATS[currentCat] || [];
  if (!window.SUBCATS[currentCat].includes(name)){
    window.SUBCATS[currentCat].push(name);
  }
  document.getElementById('fNewSubcat').value = '';
  populateSubcatSelect(name);
  persistSubcats();
});

function generateSubcatsFileContent(){
  return `// Sub-categories for the "Bag" and "Beast" pages: used to group entries\n` +
         `// into separate panels on the public site. Manage from editeur.html\n` +
         `// (a "+ Add category" field appears on those two pages), or edit here.\n` +
         `window.SUBCATS = window.SUBCATS || {};\n` +
         `Object.assign(window.SUBCATS, ${JSON.stringify(window.SUBCATS, null, 2)});\n`;
}

async function persistSubcats(){
  const content = generateSubcatsFileContent();
  const status = await fsGetStatus();
  if (status === 'connected'){
    try {
      await fsWriteContentFile('subcategories', content);
      showToast('Category saved: content/subcategories.js written to disk ✅');
      return;
    } catch (e) {
      showToast('Write error: download content/subcategories.js as a fallback');
      return;
    }
  }
  showToast('Category added (remember to export content/subcategories.js: see the browser console)');
  console.log(content);
}

/* ---------- Tags (per-page tag registry) ---------- */
window.TAGS = window.TAGS || {};
let tagCurrentCat = CATEGORIES.find(c => ['personnages','monstres','objets','guides'].includes(c.id)).id;
const TAG_PAGES = CATEGORIES.filter(c => ['personnages','monstres','objets','guides'].includes(c.id));

function renderTagCatTabs(){
  const wrap = document.getElementById('tagCatTabs');
  wrap.innerHTML = TAG_PAGES.map(cat =>
    `<button data-cat="${cat.id}" class="${cat.id===tagCurrentCat?'active':''}">${cat.fallbackLabel}</button>`
  ).join('');
  wrap.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      tagCurrentCat = btn.dataset.cat;
      renderTagCatTabs();
      renderTagList();
    });
  });
  document.getElementById('tagCatLabel').textContent =
    TAG_PAGES.find(c => c.id === tagCurrentCat).fallbackLabel;
  renderTagList();
}

document.getElementById('clearAllTagsBtn').addEventListener('click', () => {
  const list = window.TAGS[tagCurrentCat] || [];
  if (!list.length){ showToast('Nothing to clear here'); return; }
  const label = TAG_PAGES.find(c => c.id === tagCurrentCat).fallbackLabel;
  if (!confirm(`Delete all ${list.length} tags for ${label}? Entries using them will just lose that tag. This can't be undone.`)) return;
  window.TAGS[tagCurrentCat] = [];
  renderTagList();
  persistTags();
  if (currentCat === tagCurrentCat) renderFormTagCheckboxes();
});

function renderTagList(){
  document.getElementById('tagCatLabel').textContent =
    TAG_PAGES.find(c => c.id === tagCurrentCat).fallbackLabel;
  const list = window.TAGS[tagCurrentCat] || [];
  const wrap = document.getElementById('tagList');
  if (!list.length){
    wrap.innerHTML = `<div class="tag-empty-hint">No tags yet for this page.</div>`;
  } else {
    wrap.innerHTML = list.map(tag => `
      <span class="tag-toggle active" data-tag="${tag}" title="Click to delete">${tag} ✕</span>
    `).join('');
    wrap.querySelectorAll('.tag-toggle').forEach(el => {
      el.addEventListener('click', () => {
        if (!confirm(`Delete tag "${el.dataset.tag}" from ${TAG_PAGES.find(c=>c.id===tagCurrentCat).fallbackLabel}?`)) return;
        window.TAGS[tagCurrentCat] = (window.TAGS[tagCurrentCat] || []).filter(t => t !== el.dataset.tag);
        renderTagList();
        persistTags();
        if (currentCat === tagCurrentCat) renderFormTagCheckboxes();
      });
    });
  }
  renderTagsCode();
}

document.getElementById('tAddBtn').addEventListener('click', () => {
  const name = document.getElementById('tNewTag').value.trim();
  if (!name){ showToast('Enter a tag name first'); return; }
  window.TAGS[tagCurrentCat] = window.TAGS[tagCurrentCat] || [];
  if (!window.TAGS[tagCurrentCat].includes(name)) window.TAGS[tagCurrentCat].push(name);
  document.getElementById('tNewTag').value = '';
  renderTagList();
  persistTags();
  if (currentCat === tagCurrentCat) renderFormTagCheckboxes();
});

function generateTagsFileContent(){
  return `// Tags for each wiki page: kept separate per page on purpose, so\n` +
         `// "Elite" on Beast has nothing to do with "Elite" on Spirits. Manage\n` +
         `// from editeur.html (the "🏷️ Tags" section), or edit the arrays here.\n` +
         `window.TAGS = window.TAGS || {};\n` +
         `Object.assign(window.TAGS, ${JSON.stringify(window.TAGS, null, 2)});\n`;
}
function renderTagsCode(){
  document.getElementById('tCodeOut').value = generateTagsFileContent();
}
async function persistTags(){
  const content = generateTagsFileContent();
  const status = await fsGetStatus();
  if (status === 'connected'){
    try {
      await fsWriteContentFile('tags', content);
      showToast('Tags saved: content/tags.js written to disk ✅');
      renderTagsCode();
      return;
    } catch (e) {
      showToast('Write error: download content/tags.js as a fallback');
      renderTagsCode();
      return;
    }
  }
  showToast('Tag saved in memory (remember to download content/tags.js)');
  renderTagsCode();
}
document.getElementById('tDownloadBtn').addEventListener('click', () => {
  const content = generateTagsFileContent();
  const blob = new Blob([content], { type:'text/javascript' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'tags.js';
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
  showToast('Downloaded: tags.js: replace it in /content on your hosting');
});
document.getElementById('tCopyBtn').addEventListener('click', () => {
  const out = document.getElementById('tCodeOut');
  out.select();
  navigator.clipboard?.writeText(out.value).then(() => showToast('Code copied')).catch(() => {
    document.execCommand('copy');
    showToast('Code copied');
  });
});

// Checkbox-style tag picker inside the main entry form, scoped to currentCat.
let selectedFormTags = [];
function renderFormTagCheckboxes(){
  const wrap = document.getElementById('fTagsList');
  const list = window.TAGS[currentCat] || [];
  if (!list.length){
    wrap.innerHTML = `<div class="tag-empty-hint">No tags defined yet for this page: add some from the 🏷️ Tags section.</div>`;
    return;
  }
  wrap.innerHTML = list.map(tag =>
    `<span class="tag-toggle${selectedFormTags.includes(tag)?' active':''}" data-tag="${tag}">${tag}</span>`
  ).join('');
  wrap.querySelectorAll('.tag-toggle').forEach(el => {
    el.addEventListener('click', () => {
      const tag = el.dataset.tag;
      if (selectedFormTags.includes(tag)) selectedFormTags = selectedFormTags.filter(t => t !== tag);
      else selectedFormTags.push(tag);
      el.classList.toggle('active');
    });
  });
}

/* ---------- Category tabs ---------- */
function renderCatTabs(){
  const wrap = document.getElementById('editorCats');
  wrap.innerHTML = CATEGORIES.map(cat =>
    `<button data-cat="${cat.id}" class="${cat.id===currentCat && currentView==='category' ?'active':''}">${cat.fallbackLabel}</button>`
  ).join('') +
  `<div style="height:1px; background:var(--line); margin:8px 4px;"></div>` +
  `<button data-cat="__glossary__" class="${currentView==='glossary'?'active':''}">📖 Glossary</button>` +
  `<button data-cat="__tags__" class="${currentView==='tags'?'active':''}">🏷️ Tags</button>`;

  function showPanel(view){
    currentView = view;
    document.getElementById('categoryPanel').style.display = view === 'category' ? 'flex' : 'none';
    document.getElementById('glossaryPanel').style.display = view === 'glossary' ? 'flex' : 'none';
    document.getElementById('tagsPanel').style.display = view === 'tags' ? 'flex' : 'none';
  }

  wrap.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.cat === '__glossary__'){
        showPanel('glossary');
        renderCatTabs();
        return;
      }
      if (btn.dataset.cat === '__tags__'){
        showPanel('tags');
        renderCatTabs();
        renderTagCatTabs();
        return;
      }
      showPanel('category');
      currentCat = btn.dataset.cat;
      editingId = null;
      document.getElementById('entrySearchInput').value = '';
      entryListCategoryFilter = '';
      renderCatTabs();
      clearForm();
      renderEntryList();
      renderCode();
    });
  });
  document.getElementById('zoneFields').style.display = currentCat === 'zones' ? 'block' : 'none';
  document.getElementById('imageField').style.display = currentCat === 'zones' ? 'none' : 'block';
  document.getElementById('imageFieldZoneNote').style.display = currentCat === 'zones' ? 'block' : 'none';
  updateTrialFieldsVisibility();
  document.getElementById('rarityField').style.display = currentCat === 'personnages' ? 'block' : 'none';
  const isSubcatPage = currentCat === 'objets' || currentCat === 'monstres';
  document.getElementById('subcatField').style.display = isSubcatPage ? 'block' : 'none';
  if (isSubcatPage) populateSubcatSelect();
  document.getElementById('bagTypeField').style.display = currentCat === 'objets' ? 'block' : 'none';
  document.getElementById('beastModeField').style.display = currentCat === 'monstres' ? 'block' : 'none';
  if (currentCat === 'monstres'){
    populateBeastZoneSelect();
    updateBeastZoneFieldVisibility();
  }
  document.getElementById('spiritFields').style.display = currentCat === 'personnages' ? 'flex' : 'none';
  document.getElementById('skillImportField').style.display = currentCat === 'personnages' ? 'block' : 'none';
  document.getElementById('fusionSection').style.display = currentCat === 'personnages' ? 'block' : 'none';
  document.getElementById('skinsSection').style.display = currentCat === 'personnages' ? 'block' : 'none';
  document.getElementById('fileNameLabel').textContent = `content/${currentCat}.js`;
}

/* ---------- Stat rows ---------- */
function addStatRow(label, value){
  const rows = document.getElementById('statRows');
  const row = document.createElement('div');
  row.className = 'stat-row';
  row.innerHTML = `
    <input type="text" class="statLabel" placeholder="Spirit rank" value="${label ? label.replace(/"/g,'&quot;') : ''}">
    <input type="text" class="statValue" placeholder="Titan" value="${value ? value.replace(/"/g,'&quot;') : ''}">
    <div class="icon-btn removeStatRow" title="Remove">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </div>
  `;
  row.querySelector('.removeStatRow').addEventListener('click', () => row.remove());
  rows.appendChild(row);
}
document.getElementById('addStatRow').addEventListener('click', () => addStatRow('', ''));

function readStatRows(){
  return Array.from(document.querySelectorAll('#statRows .stat-row')).map(row => ({
    label: row.querySelector('.statLabel').value.trim(),
    value: row.querySelector('.statValue').value.trim(),
  })).filter(s => s.label || s.value);
}

/* ---------- Zone markers (admin preview map) ---------- */
let markerPreviewMapInstance = null;
let markerPreviewImageLayer = null;
let markerPreviewPins = []; // Leaflet marker objects currently on the preview
let pendingMarkersToLoad = []; // markers from the entry being edited, applied once the preview loads

/* ---------- Zone Documentation Blocks (illustrated sections) ---------- */
let docBlockCounter = 0;
function addDocBlockRow(containerId, image, description){
  const wrap = document.getElementById(containerId);
  const rowId = `docBlock_${docBlockCounter++}`;
  const row = document.createElement('div');
  row.className = 'card';
  row.dataset.rowId = rowId;
  row.style.cssText = 'background:var(--panel-2); padding:14px; margin-bottom:10px; position:relative;';
  row.innerHTML = `
    <div class="btn-row" style="margin-bottom:8px;">
      <div class="btn" data-role="pick">📁 Browse image</div>
      <div class="btn" data-role="remove" style="color:var(--red);">🗑 Remove block</div>
    </div>
    <div data-role="pathDisplay" style="color:var(--text-dim); font-size:12.5px; margin-bottom:8px;">${image || 'No file selected'}</div>
    <input type="hidden" data-role="image" value="${(image || '').replace(/"/g,'&quot;')}">
    <textarea data-role="description" placeholder="Describe this image…" style="min-height:70px;">${(description || '').replace(/</g,'&lt;')}</textarea>
  `;
  wrap.appendChild(row);
  attachFormatToolbar(row.querySelector('[data-role="description"]'));
  row.querySelector('[data-role="remove"]').addEventListener('click', () => row.remove());
  row.querySelector('[data-role="pick"]').addEventListener('click', async () => {
    const status = await fsGetStatus();
    if (status !== 'connected'){
      showToast('Connect your project folder first (top of the page) to browse files');
      return;
    }
    const idForFolder = document.getElementById('fId').value.trim() ||
      slugify(document.getElementById('fTitle').value.trim()) || 'untitled';
    try {
      const path = await fsPickAndCopyImage(['images', idForFolder], `doc-${rowId}`);
      row.querySelector('[data-role="image"]').value = path;
      row.querySelector('[data-role="pathDisplay"]').textContent = path;
      showToast('Image copied into your project ✅');
    } catch (e) {
      if (e && e.name !== 'AbortError') showToast('Could not copy that image');
    }
  });
}
function clearDocBlockRows(containerId){
  document.getElementById(containerId).innerHTML = '';
}
function readDocBlockRows(containerId){
  return Array.from(document.querySelectorAll(`#${containerId} > .card`)).map(row => ({
    image: row.querySelector('[data-role="image"]').value.trim(),
    description: row.querySelector('[data-role="description"]').value,
  })).filter(b => b.image || b.description);
}
document.getElementById('addDocBlockBtn').addEventListener('click', () => addDocBlockRow('docBlockRows', '', ''));
document.getElementById('addTrialDocBlockBtn').addEventListener('click', () => addDocBlockRow('trialDocBlockRows', '', ''));

/* ---------- Trial Category Blocks (image + title + description, each with several subtitles) ---------- */
function addSubtitleRow(subtitlesWrap, title, description){
  const row = document.createElement('div');
  row.className = 'card';
  row.style.cssText = 'background:var(--panel-3); padding:12px; margin-bottom:8px;';
  row.innerHTML = `
    <input type="text" data-role="subtitle-title" value="${(title||'').replace(/"/g,'&quot;')}" placeholder="Gameplay Rules" style="margin-bottom:8px;">
    <textarea data-role="subtitle-description" placeholder="* One bullet per line, starting with *…" style="min-height:90px;">${(description||'').replace(/</g,'&lt;')}</textarea>
    <div class="btn" data-role="remove" style="color:var(--red); margin-top:8px;">🗑 Remove subtitle</div>
  `;
  subtitlesWrap.appendChild(row);
  attachFormatToolbar(row.querySelector('[data-role="subtitle-description"]'));
  row.querySelector('[data-role="remove"]').addEventListener('click', () => row.remove());
}
function addCategoryBlock(data){
  data = data || {};
  const wrap = document.getElementById('categoryBlockRows');
  const card = document.createElement('div');
  card.className = 'card';
  card.style.cssText = 'background:var(--panel-2); padding:16px; margin-bottom:14px; border:1px solid var(--line);';
  card.innerHTML = `
    <div class="btn-row" style="margin-bottom:8px;">
      <div class="btn" data-role="pick-image">📁 Browse category image</div>
      <div class="btn" data-role="remove-category" style="color:var(--red);">🗑 Remove category</div>
    </div>
    <div data-role="image-path" style="color:var(--text-dim); font-size:12.5px; margin-bottom:10px;">${data.image || 'No file selected'}</div>
    <input type="hidden" data-role="image" value="${(data.image||'').replace(/"/g,'&quot;')}">
    <input type="text" data-role="cat-title" value="${(data.title||'').replace(/"/g,'&quot;')}" placeholder="Category title (e.g. Rules)" style="margin-bottom:8px;">
    <textarea data-role="cat-description" placeholder="Category description (optional)" style="min-height:70px; margin-bottom:12px;">${(data.description||'').replace(/</g,'&lt;')}</textarea>
    <label style="font-size:12.5px; color:var(--text-dim); display:block; margin-bottom:8px;">Subtitles in this category</label>
    <div data-role="subtitles"></div>
    <div class="btn" data-role="add-subtitle">+ Add a subtitle</div>
  `;
  wrap.appendChild(card);
  attachFormatToolbar(card.querySelector('[data-role="cat-description"]'));

  const subtitlesWrap = card.querySelector('[data-role="subtitles"]');
  (data.subtitles || []).forEach(s => addSubtitleRow(subtitlesWrap, s.title, s.description));

  card.querySelector('[data-role="remove-category"]').addEventListener('click', () => card.remove());
  card.querySelector('[data-role="add-subtitle"]').addEventListener('click', () => addSubtitleRow(subtitlesWrap, '', ''));
  card.querySelector('[data-role="pick-image"]').addEventListener('click', async () => {
    const status = await fsGetStatus();
    if (status !== 'connected'){
      showToast('Connect your project folder first (top of the page) to browse files');
      return;
    }
    const idForFolder = document.getElementById('fId').value.trim() ||
      slugify(document.getElementById('fTitle').value.trim()) || 'untitled';
    try {
      const path = await fsPickAndCopyImage(['images', idForFolder], `category-${Date.now()}`);
      card.querySelector('[data-role="image"]').value = path;
      card.querySelector('[data-role="image-path"]').textContent = path;
      showToast('Image copied into your project ✅');
    } catch (e) {
      if (e && e.name !== 'AbortError') showToast('Could not copy that image');
    }
  });
}
function clearCategoryBlocks(){
  document.getElementById('categoryBlockRows').innerHTML = '';
}
function readCategoryBlocks(){
  return Array.from(document.querySelectorAll('#categoryBlockRows > .card')).map(card => ({
    image: card.querySelector('[data-role="image"]').value.trim(),
    title: card.querySelector('[data-role="cat-title"]').value.trim(),
    description: card.querySelector('[data-role="cat-description"]').value,
    subtitles: Array.from(card.querySelectorAll('[data-role="subtitles"] > .card')).map(row => ({
      title: row.querySelector('[data-role="subtitle-title"]').value.trim(),
      description: row.querySelector('[data-role="subtitle-description"]').value,
    })).filter(s => s.title || s.description),
  })).filter(c => c.image || c.title || c.description || c.subtitles.length);
}
document.getElementById('addCategoryBlockBtn').addEventListener('click', () => addCategoryBlock());

function clearMarkerPreview(){
  document.getElementById('markerRows').innerHTML = '';
  document.getElementById('markerPreviewMap').style.display = 'none';
  pendingMarkersToLoad = [];
  markerPreviewPins = [];
  if (markerPreviewMapInstance){
    markerPreviewMapInstance.remove();
    markerPreviewMapInstance = null;
    markerPreviewImageLayer = null;
  }
}

function markerIdSlug(){ return 'm' + Date.now() + Math.floor(Math.random()*1000); }

document.getElementById('addMarkerManualBtn').addEventListener('click', () => {
  const name = document.getElementById('mNewName').value.trim();
  const icon = document.getElementById('mNewIcon').value.trim() || '📍';
  const x = Number(document.getElementById('mNewX').value);
  const y = Number(document.getElementById('mNewY').value);
  if (!name){ showToast('Enter a marker name'); return; }
  if (!Number.isFinite(x) || !Number.isFinite(y)){ showToast('X and Y must be numbers'); return; }

  const marker = { id: markerIdSlug(), x, y, icon, name, description:'' };
  addMarkerRow(marker);
  if (markerPreviewMapInstance) addMarkerPinToPreview(marker);

  document.getElementById('mNewName').value = '';
  document.getElementById('mNewIcon').value = '';
  document.getElementById('mNewX').value = '';
  document.getElementById('mNewY').value = '';
  showToast('Marker added: click Save entry to keep it');
});

function addMarkerPinToPreview(marker){
  const icon = L.divIcon({ className:'', html:`<div class="marker-pin">${marker.icon || '📍'}</div>`, iconSize:[28,28], iconAnchor:[14,14] });
  const pin = L.marker([marker.y, marker.x], { icon }).addTo(markerPreviewMapInstance);
  pin._markerId = marker.id;
  markerPreviewPins.push(pin);
}

function addMarkerRow(marker){
  const rows = document.getElementById('markerRows');
  const row = document.createElement('div');
  row.className = 'stat-row marker-row';
  row.dataset.id = marker.id;
  row.dataset.x = marker.x;
  row.dataset.y = marker.y;
  row.style.gridTemplateColumns = '52px 1fr 1fr auto';
  row.innerHTML = `
    <input type="text" class="markerIcon" value="${marker.icon || '📍'}" style="text-align:center;">
    <input type="text" class="markerName" value="${marker.name || ''}" placeholder="Marker name">
    <input type="text" class="markerDesc" value="${marker.description || ''}" placeholder="Short note (optional)">
    <div class="icon-btn removeMarkerRow" title="Remove">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </div>
  `;
  row.querySelector('.removeMarkerRow').addEventListener('click', () => {
    row.remove();
    const pin = markerPreviewPins.find(p => p._markerId === marker.id);
    if (pin){ markerPreviewMapInstance.removeLayer(pin); markerPreviewPins = markerPreviewPins.filter(p => p !== pin); }
  });
  rows.appendChild(row);
}

function readMarkerRows(){
  return Array.from(document.querySelectorAll('#markerRows .marker-row')).map(row => ({
    id: row.dataset.id,
    x: Number(row.dataset.x),
    y: Number(row.dataset.y),
    icon: row.querySelector('.markerIcon').value.trim() || '📍',
    name: row.querySelector('.markerName').value.trim(),
    description: row.querySelector('.markerDesc').value.trim(),
  })).filter(m => m.name);
}

/* ---------- Image browse buttons (all categories) ---------- */
document.getElementById('pickImageBtn').addEventListener('click', async () => {
  const status = await fsGetStatus();
  if (status !== 'connected'){
    showToast('Connect your project folder first (top of the page) to browse files');
    return;
  }
  const idForFolder = document.getElementById('fId').value.trim() ||
    slugify(document.getElementById('fTitle').value.trim()) || 'untitled';
  try {
    const path = await fsPickAndCopyImage(['images', currentCat, idForFolder], `${idForFolder}-image`);
    document.getElementById('fImage').value = path;
    document.getElementById('fImagePathDisplay').textContent = path;
    document.getElementById('fUseLocalImage').checked = true;
    showToast('Image copied into your project ✅');
  } catch (e) {
    if (e && e.name !== 'AbortError') showToast('Could not copy that image');
  }
});

document.getElementById('pickBgImageBtn').addEventListener('click', async () => {
  const status = await fsGetStatus();
  if (status !== 'connected'){
    showToast('Connect your project folder first (top of the page) to browse files');
    return;
  }
  const idForFolder = document.getElementById('fId').value.trim() ||
    slugify(document.getElementById('fTitle').value.trim()) || 'untitled';
  try {
    const path = await fsPickAndCopyImage(['images', 'personnages', idForFolder, 'background'], `${idForFolder}-background`);
    document.getElementById('fBgImage').value = path;
    document.getElementById('fBgImagePathDisplay').textContent = path;
    showToast('Background image copied into your project ✅');
  } catch (e) {
    if (e && e.name !== 'AbortError') showToast('Could not copy that image');
  }
});

document.getElementById('pickCoverImageBtn').addEventListener('click', async () => {
  const status = await fsGetStatus();
  if (status !== 'connected'){
    showToast('Connect your project folder first (top of the page) to browse files');
    return;
  }
  const idForFolder = document.getElementById('fId').value.trim() ||
    slugify(document.getElementById('fTitle').value.trim()) || 'untitled';
  try {
    const path = await fsPickAndCopyImage(['images', 'zone-covers'], `${idForFolder}-cover`);
    document.getElementById('fCoverImage').value = path;
    document.getElementById('fCoverImagePathDisplay').textContent = path;
    showToast('Cover image copied into your project ✅');
  } catch (e) {
    if (e && e.name !== 'AbortError') showToast('Could not copy that image');
  }
});
document.getElementById('pickMapFileBtn').addEventListener('click', async () => {
  const status = await fsGetStatus();
  if (status !== 'connected'){
    showToast('Connect your project folder first (top of the page) to browse files');
    return;
  }
  const idForFolder = document.getElementById('fId').value.trim() ||
    slugify(document.getElementById('fTitle').value.trim()) || 'untitled';
  try {
    const path = await fsPickAndCopyImage(['images', 'maps'], `${idForFolder}-map`);
    document.getElementById('fMapFile').value = path;
    document.getElementById('fMapFilePathDisplay').textContent = path;
    showToast('Map image copied into your project ✅');
  } catch (e) {
    if (e && e.name !== 'AbortError') showToast('Could not copy that image');
  }
});

document.getElementById('loadMapPreviewBtn').addEventListener('click', () => {
  const file = document.getElementById('fMapFile').value.trim();
  if (!file){ showToast('Enter a map file path first'); return; }

  if (markerPreviewMapInstance){ markerPreviewMapInstance.remove(); markerPreviewMapInstance = null; }
  markerPreviewPins = [];
  document.getElementById('markerPreviewMap').style.display = 'block';

  const probe = new Image();
  probe.onload = () => {
    markerPreviewMapInstance = L.map('markerPreviewMap', {
      crs: L.CRS.Simple, minZoom:-5, maxZoom:4, zoomSnap:0, zoomDelta:0.5,
    });
    const bounds = [[0,0],[probe.naturalHeight, probe.naturalWidth]];
    markerPreviewImageLayer = L.imageOverlay(encodeURI(file), bounds).addTo(markerPreviewMapInstance);
    markerPreviewMapInstance.fitBounds(bounds);

    markerPreviewMapInstance.on('click', (e) => {
      const marker = { id: markerIdSlug(), x: e.latlng.lng, y: e.latlng.lat, icon:'📍', name:'New marker', description:'' };
      addMarkerPinToPreview(marker);
      addMarkerRow(marker);
    });

    // Re-place markers already saved on this entry (when editing).
    pendingMarkersToLoad.forEach(m => addMarkerPinToPreview(m));
    setTimeout(() => markerPreviewMapInstance.invalidateSize(), 50);
  };
  probe.onerror = () => showToast('Could not load that image: check the path');
  probe.src = encodeURI(file);
});

/* ---------- Form ---------- */
function clearForm(){
  editingId = null;
  document.getElementById('formTitle').textContent = 'New entry';
  document.getElementById('fTitle').value = '';
  document.getElementById('fId').value = '';
  document.getElementById('fSubtitle').value = '';
  document.getElementById('fImage').value = '';
  document.getElementById('fImagePathDisplay').textContent = 'No local file selected';
  document.getElementById('fImageUrl').value = '';
  document.getElementById('fUseLocalImage').checked = true;
  selectedFormTags = [];
  renderFormTagCheckboxes();
  document.getElementById('fMapFile').value = '';
  document.getElementById('fMapFilePathDisplay').textContent = 'No file selected';
  document.getElementById('fCoverImage').value = '';
  document.getElementById('fCoverImagePathDisplay').textContent = 'No file selected';
  document.getElementById('fDescription').value = '';
  document.getElementById('statRows').innerHTML = '';
  if (currentCat === 'personnages'){
    addStatRow('Name', '');
    addStatRow('Gender', '');
    addStatRow('Archetype', '');
    addStatRow('Role', '');
    addStatRow('Mechanic', '');
    addStatRow('Acquisition', '');
  }
  if (currentCat === 'objets' || currentCat === 'monstres') populateSubcatSelect();
  if (currentCat === 'monstres'){
    document.getElementById('fBeastMode').value = 'beastlord';
    populateBeastZoneSelect();
    updateBeastZoneFieldVisibility();
    document.getElementById('fMonsterType').value = 'Beast';
    document.getElementById('fBeastPanelColor').value = '#f0c14b';
    beastContainsSelectedIds = [];
    renderBeastContainsChips();
    populateBeastSpiriboneSelects();
  }
  if (currentCat === 'objets'){
    document.getElementById('fBagType').value = '';
    populateBagSourceSelect();
    containsSelectedIds = [];
    renderContainsChips();
    bagTextSources = [];
    renderBagTextSourceChips();
  }
  if (currentCat === 'objets'){
    document.getElementById('fSoulcoreRarity').value = 'SR';
    document.querySelectorAll('#soulcoreTypeCheckboxes .tag-toggle').forEach(el => el.classList.remove('active'));
    document.getElementById('fSoulcoreDescImage').value = '';
    document.getElementById('fSoulcoreDescImagePathDisplay').textContent = 'No file selected';
    document.getElementById('fSoulcoreNamedSet').checked = false;
    document.getElementById('fSoulcoreSetName').value = '';
    document.getElementById('fSoulcoreSetIcon').value = '';
    document.getElementById('fSoulcoreSetIconPathDisplay').textContent = 'No file selected';
    document.getElementById('fSoulcoreTier12Desc').value = '';
    document.getElementById('fSoulcoreTier12Bonus').value = '';
    document.getElementById('fSoulcoreTier2Desc').value = '';
    document.getElementById('fSoulcoreTier4Desc').value = '';
    document.getElementById('fSoulcoreTier24Bonus').value = '';
    ['fSoulcoreTier12Val_0','fSoulcoreTier12Val_1','fSoulcoreTier12Val_2','fSoulcoreTier12Val_3','fSoulcoreTier12Val_4','fSoulcoreTier12Val_5',
     'fSoulcoreTier4Val_0','fSoulcoreTier4Val_1','fSoulcoreTier4Val_2','fSoulcoreTier4Val_3','fSoulcoreTier4Val_4','fSoulcoreTier4Val_5'].forEach(id => {
      document.getElementById(id).value = '';
    });
    updateSoulcoreFieldsVisibility();
    document.getElementById("fSpiriboneGenre").value = "Arm Bone (L)";
    updateSpiriboneTypeFieldVisibility();
    document.getElementById("fSpiriboneType").value = "Beast";
    document.getElementById("fSpiriboneRating").value = "5000";
    document.getElementById("fSpiriboneSkillTitle").value = "";
    document.getElementById("fSpiriboneSkillTag").value = "";
    document.getElementById("fSpiriboneSkillDesc").value = "";
    clearSpiriboneTierRows();
    renderSpiriboneStarStats();
    updateSpiriboneFieldsVisibility();
    document.querySelectorAll('#spiriboneMechanicCheckboxes .tag-toggle').forEach(el => el.classList.remove('active'));
    updateSoulcoreNamedSetVisibility();
    document.getElementById('fHaloType').value = 'Beast';
    document.querySelectorAll('#haloSpiritTypeCheckboxes .tag-toggle').forEach(el => el.classList.remove('active'));
    document.getElementById('fHaloATK').value = '';
    document.getElementById('fHaloHP').value = '';
    document.getElementById('fHaloDEF').value = '';
    updateHaloFieldsVisibility();
    document.querySelectorAll('#materialApplicableSpiritCheckboxes .tag-toggle').forEach(el => el.classList.remove('active'));
    updateMaterialFieldsVisibility();
  }
  if (currentCat === 'zones'){
    clearMarkerPreview();
    clearDocBlockRows('docBlockRows');
  }
  if (currentCat === 'trials'){
    document.getElementById('fTrialDifficulty').value = '';
    clearDocBlockRows('trialDocBlockRows');
    clearCategoryBlocks();
  }
  if (currentCat === 'personnages') clearSpiritForm();
}

function fillForm(page){
  editingId = page.id;
  document.getElementById('formTitle').textContent = `Edit: ${page.title}`;
  document.getElementById('fTitle').value = page.title || '';
  document.getElementById('fId').value = page.id || '';
  document.getElementById('fSubtitle').value = page.subtitle || '';
  document.getElementById('fImage').value = page.image || '';
  document.getElementById('fImagePathDisplay').textContent = page.image || 'No local file selected';
  document.getElementById('fImageUrl').value = page.imageUrl || '';
  document.getElementById('fUseLocalImage').checked = page.useLocalImage !== false;
  selectedFormTags = (page.tags || []).slice();
  renderFormTagCheckboxes();
  document.getElementById('fMapFile').value = page.mapFile || '';
  document.getElementById('fMapFilePathDisplay').textContent = page.mapFile || 'No file selected';
  document.getElementById('fCoverImage').value = page.coverImage || '';
  document.getElementById('fCoverImagePathDisplay').textContent = page.coverImage || 'No file selected';

  document.getElementById('fDescription').value = page.description || '';
  document.getElementById('statRows').innerHTML = '';
  (page.stats || []).forEach(s => addStatRow(s.label, s.value));
  if (currentCat === 'objets' || currentCat === 'monstres') populateSubcatSelect(page.category);
  if (currentCat === 'monstres'){
    document.getElementById('fBeastMode').value = page.beastMode || 'beastlord';
    populateBeastZoneSelect(page.zone || '');
    updateBeastZoneFieldVisibility();
    document.getElementById('fMonsterType').value = page.monsterType || 'Beast';
    document.getElementById('fBeastPanelColor').value = page.panelColor || '#f0c14b';
    beastContainsSelectedIds = (page.contains || []).slice();
    renderBeastContainsChips();
    populateBeastSpiriboneSelects((page.spiribones && page.spiribones[0]) || '', (page.spiribones && page.spiribones[1]) || '');
  }
  if (currentCat === 'objets'){
    document.getElementById('fBagType').value = page.bagType || '';
    populateBagSourceSelect(page.sources || (page.source ? [page.source] : []));
    containsSelectedIds = (page.contains || []).slice();
    renderContainsChips();
    bagTextSources = (page.textSources || []).slice();
    renderBagTextSourceChips();
  }
  if (currentCat === 'objets'){
    document.getElementById('fSoulcoreRarity').value = page.rarity || 'SR';
    const types = page.soulcoreTypes || [];
    document.querySelectorAll('#soulcoreTypeCheckboxes .tag-toggle').forEach(el => {
      el.classList.toggle('active', types.includes(el.dataset.soulcoreType));
    });
    document.getElementById('fSoulcoreDescImage').value = page.descriptionImage || '';
    document.getElementById('fSoulcoreDescImagePathDisplay').textContent = page.descriptionImage || 'No file selected';
    document.getElementById('fSoulcoreNamedSet').checked = !!page.namedSet;
    document.getElementById('fSoulcoreSetName').value = page.setName || '';
    document.getElementById('fSoulcoreSetIcon').value = page.setIcon || '';
    document.getElementById('fSoulcoreSetIconPathDisplay').textContent = page.setIcon || 'No file selected';
    document.getElementById('fSoulcoreTier12Desc').value = page.tier12Description || '';
    document.getElementById('fSoulcoreTier12Bonus').value = page.tier12Bonus || '';
    document.getElementById('fSoulcoreTier2Desc').value = page.tier2Description || '';
    document.getElementById('fSoulcoreTier4Desc').value = page.tier4Description || '';
    document.getElementById('fSoulcoreTier24Bonus').value = page.tier24Bonus || '';
    (page.tier12Values || []).forEach((v, i) => { const el = document.getElementById(`fSoulcoreTier12Val_${i}`); if (el) el.value = v || ''; });
    (page.tier4Values || []).forEach((v, i) => { const el = document.getElementById(`fSoulcoreTier4Val_${i}`); if (el) el.value = v || ''; });
    updateSoulcoreFieldsVisibility();
    updateSoulcoreNamedSetVisibility();
    document.getElementById('fSpiriboneGenre').value = page.spiriboneGenre || 'Arm Bone (L)';
    updateSpiriboneTypeFieldVisibility();
    document.getElementById('fSpiriboneType').value = page.spiriboneType || 'Beast';
    document.getElementById('fSpiriboneRating').value = page.spiriboneRating || '';
    document.getElementById('fSpiriboneSkillTitle').value = (page.spiriboneSkill && page.spiriboneSkill.title) || '';
    document.getElementById('fSpiriboneSkillTag').value = (page.spiriboneSkill && page.spiriboneSkill.key) || '';
    document.getElementById('fSpiriboneSkillDesc').value = (page.spiriboneSkill && page.spiriboneSkill.description) || '';
    fillSpiriboneTierRows(page.spiriboneTiers);
    renderSpiriboneStarStats(page.spiriboneStarStats);
    updateSpiriboneFieldsVisibility();
    const savedSpiriboneMechanics = page.mechanics || [];
    document.querySelectorAll('#spiriboneMechanicCheckboxes .tag-toggle').forEach(el => {
      el.classList.toggle('active', savedSpiriboneMechanics.includes(el.dataset.mechanic));
    });
    document.getElementById('fHaloType').value = page.haloType || 'Beast';
    const savedHaloTypes = page.haloSpiritTypes || (page.haloSpiritType ? [page.haloSpiritType] : []);
    document.querySelectorAll('#haloSpiritTypeCheckboxes .tag-toggle').forEach(el => {
      el.classList.toggle('active', savedHaloTypes.includes(el.dataset.haloSpiritType));
    });
    document.getElementById('fHaloATK').value = page.haloATK || '';
    document.getElementById('fHaloHP').value = page.haloHP || '';
    document.getElementById('fHaloDEF').value = page.haloDEF || '';
    updateHaloFieldsVisibility();
    const savedMaterialSpirits = page.materialApplicableSpirits || [];
    document.querySelectorAll('#materialApplicableSpiritCheckboxes .tag-toggle').forEach(el => {
      el.classList.toggle('active', savedMaterialSpirits.includes(el.dataset.materialSpirit));
    });
    updateMaterialFieldsVisibility();
  }
  if (currentCat === 'zones'){
    clearMarkerPreview();
    pendingMarkersToLoad = (page.markers || []).slice();
    pendingMarkersToLoad.forEach(m => addMarkerRow(m));
    clearDocBlockRows('docBlockRows');
    (page.docBlocks || []).forEach(b => addDocBlockRow('docBlockRows', b.image, b.description));
  }
  if (currentCat === 'trials'){
    document.getElementById('fTrialDifficulty').value = page.difficulty || '';
    clearDocBlockRows('trialDocBlockRows');
    (page.docBlocks || []).forEach(b => addDocBlockRow('trialDocBlockRows', b.image, b.description));
    clearCategoryBlocks();
    (page.categoryBlocks || []).forEach(c => addCategoryBlock(c));
  }
  if (currentCat === 'personnages') fillSpiritForm(page);
}

function saveEntry(){
  const title = document.getElementById('fTitle').value.trim();
  if (!title){ showToast('Title is required'); return; }
  const list = getList(currentCat);

  let id = document.getElementById('fId').value.trim() || slugify(title);
  id = uniqueId(slugify(id), list, editingId);

  const entry = {
    id,
    title,
    subtitle: document.getElementById('fSubtitle').value.trim(),
    image: document.getElementById('fImage').value.trim(),
    imageUrl: document.getElementById('fImageUrl').value.trim(),
    useLocalImage: document.getElementById('fUseLocalImage').checked,
    tags: [...selectedFormTags],
    stats: readStatRows(),
    description: document.getElementById('fDescription').value,
  };
  if (currentCat === 'zones'){
    entry.mapFile = document.getElementById('fMapFile').value.trim();
    entry.coverImage = document.getElementById('fCoverImage').value.trim();
    entry.markers = readMarkerRows();
    entry.docBlocks = readDocBlockRows('docBlockRows');
  }
  if (currentCat === 'trials'){
    entry.difficulty = document.getElementById('fTrialDifficulty').value;
    entry.docBlocks = readDocBlockRows('trialDocBlockRows');
    entry.categoryBlocks = readCategoryBlocks();
  }
  if (currentCat === 'objets' || currentCat === 'monstres'){
    entry.category = document.getElementById('fSubcat').value;
  }
  if (currentCat === 'monstres'){
    entry.beastMode = document.getElementById('fBeastMode').value;
    entry.zone = entry.beastMode === 'beastlord' ? document.getElementById('fBeastZone').value : '';
    entry.monsterType = document.getElementById('fMonsterType').value;
    entry.panelColor = document.getElementById('fBeastPanelColor').value;
    entry.contains = beastContainsSelectedIds.slice();
    entry.spiribones = [document.getElementById('fSpiribone1').value, document.getElementById('fSpiribone2').value];
  }
  if (currentCat === 'objets'){
    entry.bagType = document.getElementById('fBagType').value;
    entry.sources = Array.from(document.querySelectorAll('#bagSourceCheckboxes .checkbox-row'))
      .filter(row => row.querySelector('input').checked)
      .map(row => row.dataset.sourceId);
    delete entry.source;
    entry.contains = containsSelectedIds.slice();
    entry.textSources = bagTextSources.slice();
    if (entry.bagType === 'soulcore'){
      entry.rarity = document.getElementById('fSoulcoreRarity').value;
      entry.soulcoreTypes = Array.from(document.querySelectorAll('#soulcoreTypeCheckboxes .tag-toggle.active'))
        .map(el => el.dataset.soulcoreType);
      entry.descriptionImage = document.getElementById('fSoulcoreDescImage').value.trim();
      entry.namedSet = document.getElementById('fSoulcoreNamedSet').checked;
      entry.setName = document.getElementById('fSoulcoreSetName').value.trim();
      entry.setIcon = document.getElementById('fSoulcoreSetIcon').value.trim();
      entry.tier12Description = document.getElementById('fSoulcoreTier12Desc').value;
      entry.tier12Bonus = document.getElementById('fSoulcoreTier12Bonus').value;
      entry.tier2Description = document.getElementById('fSoulcoreTier2Desc').value;
      entry.tier4Description = document.getElementById('fSoulcoreTier4Desc').value;
      entry.tier24Bonus = document.getElementById('fSoulcoreTier24Bonus').value;
      entry.tier12Values = [0,1,2,3,4,5].map(i => document.getElementById(`fSoulcoreTier12Val_${i}`).value.trim());
      entry.tier4Values = [0,1,2,3,4,5].map(i => document.getElementById(`fSoulcoreTier4Val_${i}`).value.trim());
    } else {
      delete entry.rarity;
      delete entry.soulcoreTypes;
      delete entry.descriptionImage;
      delete entry.namedSet;
      delete entry.setName;
      delete entry.setIcon;
      delete entry.tier12Description;
      delete entry.tier12Bonus;
      delete entry.tier2Description;
      delete entry.tier4Description;
      delete entry.tier24Bonus;
      delete entry.tier12Values;
      delete entry.tier4Values;
    }
    if (entry.bagType === 'spiribone'){
      entry.spiriboneGenre = document.getElementById('fSpiriboneGenre').value;
      const savedGenre = document.getElementById('fSpiriboneGenre').value;
      entry.spiriboneType = (savedGenre === 'Skull' || savedGenre === 'Trunk') ? '' : document.getElementById('fSpiriboneType').value;
      entry.spiriboneRating = document.getElementById('fSpiriboneRating').value.trim();
      entry.spiriboneSkill = {
        title: document.getElementById('fSpiriboneSkillTitle').value.trim(),
        key: document.getElementById('fSpiriboneSkillTag').value.trim(),
        description: document.getElementById('fSpiriboneSkillDesc').value,
      };
      entry.spiriboneTiers = readSpiriboneTierRows();
      entry.spiriboneStarStats = readSpiriboneStarStats();
      entry.mechanics = Array.from(document.querySelectorAll('#spiriboneMechanicCheckboxes .tag-toggle.active')).map(el => el.dataset.mechanic);
    } else {
      delete entry.spiriboneGenre;
      delete entry.spiriboneType;
      delete entry.spiriboneRating;
      delete entry.spiriboneSkill;
      delete entry.spiriboneTiers;
      delete entry.spiriboneStarStats;
      delete entry.mechanics;
    }
    if (entry.bagType === 'halo'){
      entry.haloType = document.getElementById('fHaloType').value;
      entry.haloSpiritTypes = Array.from(document.querySelectorAll('#haloSpiritTypeCheckboxes .tag-toggle.active'))
        .map(el => el.dataset.haloSpiritType);
      entry.haloATK = document.getElementById('fHaloATK').value.trim();
      entry.haloHP = document.getElementById('fHaloHP').value.trim();
      entry.haloDEF = document.getElementById('fHaloDEF').value.trim();
    } else {
      delete entry.haloType;
      delete entry.haloSpiritType;
      delete entry.haloSpiritTypes;
      delete entry.haloATK;
      delete entry.haloHP;
      delete entry.haloDEF;
    }
    if (entry.bagType === 'material' || entry.bagType === 'item'){
      entry.materialApplicableSpirits = Array.from(document.querySelectorAll('#materialApplicableSpiritCheckboxes .tag-toggle.active'))
        .map(el => el.dataset.materialSpirit);
    } else {
      delete entry.materialApplicableSpirits;
    }
  }
  if (currentCat === 'personnages'){
    Object.assign(entry, readSpiritData());
    entry.fusion = readFusionData();
    entry.skins = readSkinRows();
  }

  const existingIdx = list.findIndex(p => p.id === editingId);
  if (editingId && existingIdx !== -1){
    list[existingIdx] = entry;
  } else {
    list.push(entry);
  }
  editingId = id;
  document.getElementById('fId').value = id;
  document.getElementById('formTitle').textContent = `Edit: ${title}`;
  renderEntryList();
  renderCode();
  fsEnsureImageFolder(currentCat, id);
  persistCurrentCategory('Entry saved');
}

document.getElementById('saveBtn').addEventListener('click', saveEntry);
document.getElementById('clearBtn').addEventListener('click', clearForm);

// Writes the file directly if a folder is connected; otherwise,
// just reminds you to download it manually.
async function persistCurrentCategory(actionLabel){
  const content = generateFileContent(currentCat);
  const status = await fsGetStatus();
  if (status === 'connected'){
    try {
      await fsWriteContentFile(currentCat, content);
      showToast(`${actionLabel}: content/${currentCat}.js written to disk ✅`);
      return;
    } catch (e) {
      showToast('Write error: download the file as a fallback');
      return;
    }
  }
  showToast(`${actionLabel} (remember to download the file)`);
}

/* ---------- Entry list ---------- */
document.getElementById('addNewEntryBtn').addEventListener('click', () => {
  clearForm();
  showToast('Ready for a new entry');
});

document.getElementById('clearAllEntriesBtn').addEventListener('click', () => {
  const list = getList(currentCat);
  if (!list.length){ showToast('Nothing to clear here'); return; }
  const label = CATEGORIES.find(c => c.id === currentCat).fallbackLabel;
  if (!confirm(`Delete all ${list.length} entries on the ${label} page? This can't be undone.`)) return;
  window.WIKI[currentCat] = [];
  editingId = null;
  clearForm();
  renderEntryList();
  renderCode();
  persistCurrentCategory('All entries cleared');
});

let entryListCategoryFilter = '';

function renderEntryList(){
  const list = getList(currentCat);
  const wrap = document.getElementById('entryList');
  const menuWrap = document.getElementById('entryCategoryMenu');
  const searchInput = document.getElementById('entrySearchInput');
  const searchFilter = (searchInput?.value || '').toLowerCase();

  if (!list.length){
    wrap.innerHTML = `<div class="empty-state" style="padding:20px;">No entries yet.</div>`;
    if (menuWrap) menuWrap.innerHTML = '';
    return;
  }

  // Mini menu: only show if there are 2+ distinct Category values among the entries.
  const categories = [...new Set(list.map(p => p.category).filter(Boolean))];
  if (menuWrap){
    if (categories.length > 1){
      menuWrap.innerHTML = [
        `<span class="tag-toggle${entryListCategoryFilter === '' ? ' active' : ''}" data-cat="">All</span>`,
        ...categories.map(c => `<span class="tag-toggle${entryListCategoryFilter === c ? ' active' : ''}" data-cat="${c}">${c}</span>`),
      ].join('');
      menuWrap.querySelectorAll('.tag-toggle').forEach(el => {
        el.addEventListener('click', () => {
          entryListCategoryFilter = el.dataset.cat;
          renderEntryList();
        });
      });
    } else {
      menuWrap.innerHTML = '';
      entryListCategoryFilter = '';
    }
  }

  let filtered = searchFilter ? list.filter(p => p.title.toLowerCase().includes(searchFilter)) : list;
  if (entryListCategoryFilter) filtered = filtered.filter(p => p.category === entryListCategoryFilter);

  if (!filtered.length){
    wrap.innerHTML = `<div class="empty-state" style="padding:20px;">No entries match${searchFilter ? ` "${searchFilter}"` : ''}${entryListCategoryFilter ? ` in "${entryListCategoryFilter}"` : ''}.</div>`;
    return;
  }
  wrap.innerHTML = filtered.map(p => `
    <div class="entry-row" data-id="${p.id}">
      <div class="row-top">
        <div class="thumb" style="${p.image ? `background-image:url('${p.image}')` : ''}"></div>
        <div class="info">
          <div class="t">${p.title}</div>
        </div>
      </div>
      <div class="actions">
        <div class="icon-btn editBtn" title="Edit">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
        </div>
        <div class="icon-btn duplicateBtn" title="Duplicate">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        </div>
        <div class="icon-btn deleteBtn" title="Delete" style="color:var(--red);">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
        </div>
      </div>
    </div>
  `).join('');
  wrap.querySelectorAll('.duplicateBtn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.closest('.entry-row').dataset.id;
      const page = getList(currentCat).find(p => p.id === id);
      if (!page) return;
      const copy = JSON.parse(JSON.stringify(page));
      copy.title = `${copy.title} (Copy)`;
      copy.id = '';
      editingId = null;
      fillForm(copy);
      document.getElementById('formTitle').textContent = 'New entry (duplicated)';
      showToast('Duplicated — adjust the title, then Save');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  wrap.querySelectorAll('.editBtn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.target.closest('.entry-row').dataset.id;
      const page = list.find(p => p.id === id);
      if (page) fillForm(page);
      window.scrollTo({ top:0, behavior:'smooth' });
    });
  });
  wrap.querySelectorAll('.deleteBtn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.target.closest('.entry-row').dataset.id;
      if (!confirm('Delete this entry?')) return;
      const idx = list.findIndex(p => p.id === id);
      if (idx !== -1) list.splice(idx, 1);
      if (editingId === id) clearForm();
      renderEntryList();
      renderCode();
      persistCurrentCategory('Entry deleted');
    });
  });
}

/* ---------- Code generation ---------- */
function generateFileContent(catId){
  const list = getList(catId);
  const body = JSON.stringify(list, null, 2);
  return `// "${catId}" page: generated from editeur.html on ${new Date().toLocaleDateString('en-US')}\n` +
         `// You can also edit this file by hand: each object is one entry.\n` +
         `window.WIKI = window.WIKI || {};\n` +
         `window.WIKI.${catId} = ${body};\n`;
}

function renderCode(){
  document.getElementById('codeOut').value = generateFileContent(currentCat);
}

document.getElementById('downloadBtn').addEventListener('click', () => {
  const content = generateFileContent(currentCat);
  const blob = new Blob([content], { type:'text/javascript' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${currentCat}.js`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast(`Downloaded: ${currentCat}.js: replace it in /content on your hosting`);
});

document.getElementById('copyBtn').addEventListener('click', () => {
  const out = document.getElementById('codeOut');
  out.select();
  navigator.clipboard?.writeText(out.value).then(() => showToast('Code copied')).catch(() => {
    document.execCommand('copy');
    showToast('Code copied');
  });
});

/* ---------- Local folder connection (File System Access API) ---------- */
function renderFsStatus(status){
  const el = document.getElementById('connectStatus');
  const btn = document.getElementById('connectBtn');
  if (status === 'unsupported'){
    el.innerHTML = '⚠️ Your browser does not support this feature (use Chrome or Edge). Files will need to be downloaded manually.';
    btn.style.display = 'none';
  } else if (status === 'connected'){
    el.innerHTML = `🟢 Connected to <b>${fsFolderName()}</b>: entries are written directly to disk.`;
    btn.textContent = '📁 Change folder';
  } else if (status === 'needs-permission'){
    el.innerHTML = `🟡 Folder <b>${fsFolderName()}</b> remembered: click to reconfirm permission.`;
    btn.textContent = '🔓 Reconnect folder';
  } else {
    el.innerHTML = '⚪ Not connected: files will need to be downloaded manually.';
    btn.textContent = '📁 Connect the site folder';
  }
}

document.getElementById('connectBtn').addEventListener('click', async () => {
  try {
    const status = await fsGetStatus();
    if (status === 'needs-permission'){
      const ok = await fsReconnect();
      renderFsStatus(ok ? 'connected' : 'needs-permission');
      if (ok) showToast('Folder reconnected ✅');
    } else {
      const name = await fsConnect();
      renderFsStatus('connected');
      showToast(`Folder “${name}” connected ✅`);
    }
  } catch (e) {
    // User cancelled the picker, or permission was denied: not a problem.
  }
});

(async () => {
  const status = await fsGetStatus();
  renderFsStatus(status);
})();

/* ---------- Glossary ---------- */
window.GLOSSARY = window.GLOSSARY || {};
let editingTerm = null;

document.getElementById('clearAllGlossaryBtn').addEventListener('click', () => {
  const terms = Object.keys(window.GLOSSARY);
  if (!terms.length){ showToast('Nothing to clear here'); return; }
  if (!confirm(`Delete all ${terms.length} glossary terms? This can't be undone.`)) return;
  window.GLOSSARY = {};
  glossaryPage = 1;
  glossaryLetterFilter = null;
  renderGlossaryList();
  persistGlossary('All terms cleared');
});

let glossaryLetterFilter = null; // null = show all
let glossaryPage = 1;
const GLOSSARY_PAGE_SIZE = 20;

function renderGlossaryAzBar(allTerms){
  const lettersUsed = new Set(allTerms.map(t => (t[0] || '#').toUpperCase()));
  const bar = document.getElementById('glossaryAzBar');
  const letters = ['ALL', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];
  bar.innerHTML = letters.map(l => {
    const active = l === 'ALL' ? glossaryLetterFilter === null : glossaryLetterFilter === l;
    const usable = l === 'ALL' || lettersUsed.has(l);
    return `<span class="tag-toggle${active ? ' active' : ''}" data-letter="${l}" style="${usable ? '' : 'opacity:.35; cursor:default;'}">${l}</span>`;
  }).join('');
  bar.querySelectorAll('.tag-toggle').forEach(el => {
    el.addEventListener('click', () => {
      const letter = el.dataset.letter;
      if (letter !== 'ALL' && !lettersUsed.has(letter)) return;
      glossaryLetterFilter = letter === 'ALL' ? null : letter;
      glossaryPage = 1;
      renderGlossaryList();
    });
  });
}

function renderGlossaryPager(totalPages, containerId){
  const el = document.getElementById(containerId);
  if (totalPages <= 1){ el.innerHTML = ''; return; }
  let html = `<div class="btn" data-page="prev" style="padding:6px 12px; font-size:13px;">‹ Prev</div>`;
  html += `<span style="align-self:center; color:var(--text-dim); font-size:13px; padding:0 6px;">Page ${glossaryPage} / ${totalPages}</span>`;
  html += `<div class="btn" data-page="next" style="padding:6px 12px; font-size:13px;">Next ›</div>`;
  el.innerHTML = html;
  el.querySelectorAll('[data-page]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.page === 'prev' && glossaryPage > 1) glossaryPage--;
      if (btn.dataset.page === 'next' && glossaryPage < totalPages) glossaryPage++;
      renderGlossaryList();
    });
  });
}

function renderGlossaryList(){
  const wrap = document.getElementById('glossaryList');
  const allTerms = Object.keys(window.GLOSSARY).sort();
  renderGlossaryAzBar(allTerms);

  const filtered = glossaryLetterFilter
    ? allTerms.filter(t => (t[0] || '#').toUpperCase() === glossaryLetterFilter)
    : allTerms;

  const totalPages = Math.max(1, Math.ceil(filtered.length / GLOSSARY_PAGE_SIZE));
  if (glossaryPage > totalPages) glossaryPage = totalPages;
  const start = (glossaryPage - 1) * GLOSSARY_PAGE_SIZE;
  const terms = filtered.slice(start, start + GLOSSARY_PAGE_SIZE);

  renderGlossaryPager(totalPages, 'glossaryPagerTop');
  renderGlossaryPager(totalPages, 'glossaryPagerBottom');

  if (!terms.length){
    wrap.innerHTML = `<div class="empty-state" style="padding:20px;">No terms${glossaryLetterFilter ? ` starting with "${glossaryLetterFilter}"` : ''}.</div>`;
  } else {
    wrap.innerHTML = terms.map(term => `
      <div class="entry-row" data-term="${term}">
        <div class="info">
          <div class="t">[${term}]</div>
          <div class="s">${window.GLOSSARY[term]}</div>
        </div>
        <div class="actions">
          <div class="btn editGlossBtn" style="padding:7px 12px; font-size:13px;">Edit</div>
          <div class="btn btn-danger deleteGlossBtn" style="padding:7px 12px; font-size:13px;">Delete</div>
        </div>
      </div>
    `).join('');
    wrap.querySelectorAll('.editGlossBtn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const term = e.target.closest('.entry-row').dataset.term;
        editingTerm = term;
        document.getElementById('gTerm').value = term;
        document.getElementById('gDef').value = window.GLOSSARY[term];
      });
    });
    wrap.querySelectorAll('.deleteGlossBtn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const term = e.target.closest('.entry-row').dataset.term;
        if (!confirm(`Delete the term "${term}"?`)) return;
        delete window.GLOSSARY[term];
        if (editingTerm === term) editingTerm = null;
        renderGlossaryList();
        renderGlossaryCode();
        persistGlossary('Term deleted');
      });
    });
  }
  renderGlossaryCode();
}

function generateGlossaryFileContent(){
  return `// Glossary: generated from editeur.html on ${new Date().toLocaleDateString('en-US')}\n` +
         `window.GLOSSARY = window.GLOSSARY || {};\n` +
         `Object.assign(window.GLOSSARY, ${JSON.stringify(window.GLOSSARY, null, 2)});\n`;
}
function renderGlossaryCode(){
  document.getElementById('gCodeOut').value = generateGlossaryFileContent();
}

async function persistGlossary(actionLabel){
  const content = generateGlossaryFileContent();
  const status = await fsGetStatus();
  if (status === 'connected'){
    try {
      await fsWriteContentFile('glossary', content);
      showToast(`${actionLabel}: content/glossary.js written to disk ✅`);
      return;
    } catch (e) {
      showToast('Write error: download the file as a fallback');
      return;
    }
  }
  showToast(`${actionLabel} (remember to download the file)`);
}

document.getElementById('gSaveBtn').addEventListener('click', () => {
  const term = document.getElementById('gTerm').value.trim();
  const def = document.getElementById('gDef').value.trim();
  if (!term || !def){ showToast('Term and definition are required'); return; }
  if (editingTerm && editingTerm !== term) delete window.GLOSSARY[editingTerm];
  window.GLOSSARY[term] = def;
  editingTerm = null;
  document.getElementById('gTerm').value = '';
  document.getElementById('gDef').value = '';
  renderGlossaryList();
  persistGlossary('Term saved');
});

document.getElementById('gDownloadBtn').addEventListener('click', () => {
  const content = generateGlossaryFileContent();
  const blob = new Blob([content], { type:'text/javascript' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'glossary.js';
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
  showToast('Downloaded: glossary.js: replace it in /content on your hosting');
});
document.getElementById('gCopyBtn').addEventListener('click', () => {
  const out = document.getElementById('gCodeOut');
  out.select();
  navigator.clipboard?.writeText(out.value).then(() => showToast('Code copied')).catch(() => {
    document.execCommand('copy');
    showToast('Code copied');
  });
});

/* ---------- Init ---------- */
buildSpiritFieldsUI();
renderCatTabs();
renderGlossaryList();
clearForm();
renderEntryList();
renderCode();
document.getElementById('entrySearchInput').addEventListener('input', renderEntryList);

function applyEntryCardSize(size){
  document.getElementById('entryList').style.setProperty('--entry-card-size', size + 'px');
}
(function initEntryCardSize(){
  const slider = document.getElementById('entryCardSizeSlider');
  const saved = localStorage.getItem('entryCardSize') || '140';
  slider.value = saved;
  applyEntryCardSize(saved);
  slider.addEventListener('input', (e) => {
    applyEntryCardSize(e.target.value);
    localStorage.setItem('entryCardSize', e.target.value);
  });
})();

attachAllFormatToolbars();
