const SEARCHABLE_CATEGORIES = [
  { id:'personnages', label:'Spirits' },
  { id:'monstres', label:'Beast' },
  { id:'objets', label:'Bag' },
  { id:'zones', label:'Zones' },
  { id:'trials', label:'Trial' },
];
function searchSiteItems(query, categoryFilter){
  const q = (query || '').toLowerCase();
  let results = [];
  SEARCHABLE_CATEGORIES.forEach(cat => {
    if (categoryFilter && categoryFilter !== cat.id) return;
    const items = (window.WIKI && window.WIKI[cat.id]) || [];
    items.forEach(item => {
      if (!q || (item.title || '').toLowerCase().includes(q)){
        results.push({ ...item, __cat: cat.id, __catLabel: cat.label });
      }
    });
  });
  return results.slice(0, 60);
}
function siteItemImage(item){
  if (item.useLocalImage === false && item.imageUrl) return item.imageUrl;
  return item.coverImage || item.image || item.imageUrl || item.mapFile || '';
}

// ---------- Auth gate ----------
let currentUser = null;
let authorGlossary = {}; // the author's own glossary terms, loaded once when the editor opens
let guideId = null; // stable Firestore doc id, generated once, used for image folder naming
let currentStatus = 'draft';
let guideTags = [];
let isDirty = false;
let isExistingGuide = false;

auth.onAuthStateChanged(async (user) => {
  document.getElementById('loadingGate').style.display = 'none';
  if (!user){
    document.getElementById('notLoggedInGate').style.display = 'block';
    return;
  }
  if (!user.emailVerified){
    document.getElementById('notVerifiedGate').style.display = 'block';
    return;
  }
  currentUser = user;
  await user.getIdToken(true); // refresh the token so email_verified is current for the whole session
  const profile = await getCurrentUserProfile();
  applyLanguage(profile && profile.language);
  authorGlossary = (profile && profile.glossary) || {};
  guideId = db.collection('guides').doc().id;
  document.getElementById('editorWrap').style.display = 'block';
  initEditor();
});

// ---------- Block editor state ----------
let blocks = [];
let blockIdCounter = 0;
let pendingImageFiles = {}; // blockId -> File (image blocks not yet uploaded)
let coverFile = null;
let coverImageUrl = '';

function uid(){ return 'b' + (blockIdCounter++); }

// ---------- Tags ----------
async function loadExistingTagSuggestions(){
  try {
    const snap = await db.collection('guideTags').get();
    const wrap = document.getElementById('existingTagsWrap');
    const row = document.getElementById('existingTagsRow');
    if (!snap.size){ wrap.style.display = 'none'; return; }
    wrap.style.display = 'block';
    row.innerHTML = snap.docs.map(d => `
      <div class="tag-filter-chip" onclick="pickExistingTag('${d.id.replace(/'/g,"\\'")}')">${escHtml(d.id)}</div>
    `).join('');
  } catch (e){ /* suggestions are a nice-to-have, fail silently */ }
}
function pickExistingTag(tag){
  if (guideTags.includes(tag)) return;
  isDirty = true;
  guideTags.push(tag);
  renderTagChips();
}
function renderTagChips(){
  document.getElementById('tagChips').innerHTML = guideTags.map(t => `
    <span class="tag-chip">${escHtml(t)} <span class="remove" onclick="removeTag('${t.replace(/'/g,"\\'")}')">✕</span></span>
  `).join('');
}
function addTag(){
  isDirty = true;
  const input = document.getElementById('tagInput');
  const val = input.value.trim();
  if (!val || guideTags.includes(val)) { input.value = ''; return; }
  guideTags.push(val);
  input.value = '';
  renderTagChips();
}
async function addGlossaryTermFromEditor(){
  const termInput = document.getElementById('gcGlossaryTerm');
  const defInput = document.getElementById('gcGlossaryDef');
  const term = termInput.value.trim();
  const def = defInput.value.trim();
  if (!term || !def){ customAlert('Fill in both the term and the definition.'); return; }
  try {
    await db.collection('users').doc(currentUser.uid).update({
      [`glossary.${term}`]: def,
    });
    termInput.value = '';
    defInput.value = '';
    const status = document.getElementById('gcGlossaryStatus');
    status.textContent = t('gc_glossary_added').replace('%TERM%', term);
    status.style.display = 'block';
    setTimeout(() => { status.style.display = 'none'; }, 4000);
  } catch (e){
    customAlert('Could not save this term: ' + (e.message || 'unknown error'));
  }
}
function removeTag(tag){
  isDirty = true;
  guideTags = guideTags.filter(t => t !== tag);
  renderTagChips();
}
async function persistNewTags(){
  const batch = db.batch();
  guideTags.forEach(t => {
    batch.set(db.collection('guideTags').doc(t), { createdAt: firebase.firestore.FieldValue.serverTimestamp() }, { merge: true });
  });
  if (guideTags.length) await batch.commit();
}

function initEditor(){
  document.getElementById('guideTitle').addEventListener('input', () => { isDirty = true; renderPreview(); });
  document.getElementById('guideLang').addEventListener('change', () => { isDirty = true; renderPreview(); });
  window.addEventListener('beforeunload', (e) => {
    if (isDirty){ e.preventDefault(); e.returnValue = ''; }
  });
  document.getElementById('addBlockBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    document.getElementById('addBlockMenu').classList.toggle('open');
  });
  document.querySelectorAll('.add-block-option').forEach(el => {
    el.addEventListener('click', () => addBlock(el.dataset.type));
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.add-block-wrap')) document.getElementById('addBlockMenu').classList.remove('open');
  });
  document.getElementById('coverFileInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    handleCoverImageCrop(file);
    e.target.value = '';
  });
  document.getElementById('saveDraftBtn').addEventListener('click', saveDraft);
  document.getElementById('submitBtn').addEventListener('click', submitForReview);
  document.getElementById('addTagBtn').addEventListener('click', addTag);
  document.getElementById('tagInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter'){ e.preventDefault(); addTag(); }
  });
  document.getElementById('gcGlossaryAddBtn').addEventListener('click', addGlossaryTermFromEditor);
  loadExistingTagSuggestions();

  const editId = new URLSearchParams(window.location.search).get('id');
  if (editId){
    loadExistingGuide(editId);
  } else {
    renderBlocks();
  }
}

async function loadExistingGuide(id){
  try {
    const doc = await db.collection('guides').doc(id).get();
    if (!doc.exists || doc.data().authorId !== currentUser.uid){
      await customAlert('This guide could not be loaded.');
      renderBlocks();
      return;
    }
    const g = doc.data();
    guideId = id; // reuse the existing doc id instead of generating a new one
    isExistingGuide = true;
    currentStatus = g.status || 'draft';
    document.getElementById('deleteBtn').style.display = 'flex';
    document.getElementById('guideTitle').value = g.title || '';
    document.getElementById('guideLang').value = g.language || 'English';
    if (g.coverImageUrl){
      coverImageUrl = g.coverImageUrl;
      document.getElementById('coverPreviewImg').src = g.coverImageUrl;
      document.getElementById('coverPreviewFrame').style.display = 'block';
    }
    blocks = g.blocks || [];
    guideTags = g.tags || [];
    renderTagChips();
    const maxNum = blocks.reduce((max, b) => {
      const m = /^b(\d+)$/.exec(b.id || '');
      return m ? Math.max(max, parseInt(m[1], 10)) : max;
    }, 0);
    blockIdCounter = maxNum + 1;
    document.querySelector('.subhead').textContent = t('gc_editing_existing');
    document.getElementById('submitBtn').textContent = 'Resubmit for Review';
    applyGuideStatusUI();
    renderBlocks();
    isDirty = false; // loading isn't an edit
  } catch (e){
    await customAlert('Could not load this guide: ' + (e.message || 'unknown error'));
    renderBlocks();
  }
}

function statusLabel(status){
  return { draft:t('gr_status_draft'), pending:t('gr_status_pending'), approved:t('gr_status_approved'), published:t('gr_status_published'), rejected:t('gr_status_rejected') }[status] || status;
}

function applyGuideStatusUI(){
  const badge = document.getElementById('statusBadge');
  badge.textContent = statusLabel(currentStatus);
  badge.className = 'status-badge ' + currentStatus;
  badge.style.display = 'inline-block';

  const locked = currentStatus === 'pending';
  document.getElementById('pendingLockBanner').style.display = locked ? 'block' : 'none';
  document.getElementById('publishPanel').style.display = currentStatus === 'approved' ? 'block' : 'none';

  document.querySelectorAll('.form-col input, .form-col select, .form-col textarea, .form-col .btn').forEach(el => {
    if (el.id === 'cancelBtn' || el.id === 'deleteBtn') return; // always allowed to leave or delete
    el.disabled = locked;
    el.style.pointerEvents = locked ? 'none' : '';
    el.style.opacity = locked ? '.5' : '';
  });
}

document.getElementById('cancelBtn').addEventListener('click', async () => {
  if (isDirty && !await customConfirm('Discard unsaved changes?')) return;
  isDirty = false;
  location.href = 'guides-hub';
});

document.getElementById('deleteBtn').addEventListener('click', async () => {
  if (!await customConfirm('Delete this guide? This cannot be undone.')) return;
  try {
    await db.collection('guides').doc(guideId).delete();
    isDirty = false;
    location.href = 'guides-hub';
  } catch (e){
    customAlert('Could not delete: ' + (e.message || 'unknown error'));
  }
});

document.getElementById('publishNowBtn').addEventListener('click', async () => {
  try {
    await db.collection('guides').doc(guideId).update({
      status: 'published',
      scheduledPublishAt: firebase.firestore.FieldValue.delete(),
      activityLog: firebase.firestore.FieldValue.arrayUnion({
        action: 'Published',
        by: currentUser.displayName || currentUser.email,
        at: firebase.firestore.Timestamp.now(),
      }),
    });
    await customAlert('Published! Your guide is now live.');
    isDirty = false;
    location.href = 'guides-hub';
  } catch (e){
    customAlert('Could not publish: ' + (e.message || 'unknown error'));
  }
});
document.getElementById('showScheduleBtn').addEventListener('click', () => {
  document.getElementById('scheduleRow').style.display = 'flex';
});
document.getElementById('confirmScheduleBtn').addEventListener('click', async () => {
  const val = document.getElementById('scheduleDateInput').value;
  if (!val){ customAlert('Pick a date and time first.'); return; }
  const scheduledDate = new Date(val);
  if (scheduledDate <= new Date()){ customAlert('Pick a time in the future.'); return; }
  try {
    await db.collection('guides').doc(guideId).update({
      status: 'published',
      scheduledPublishAt: firebase.firestore.Timestamp.fromDate(scheduledDate),
      activityLog: firebase.firestore.FieldValue.arrayUnion({
        action: `Scheduled for ${scheduledDate.toLocaleString()}`,
        by: currentUser.displayName || currentUser.email,
        at: firebase.firestore.Timestamp.now(),
      }),
    });
    await customAlert(`Scheduled! Your guide will go live on ${scheduledDate.toLocaleString()}.`);
    isDirty = false;
    location.href = 'guides-hub';
  } catch (e){
    customAlert('Could not schedule: ' + (e.message || 'unknown error'));
  }
});

function addBlock(type){
  isDirty = true;
  const block = { id: uid(), type };
  if (type === 'heading'){ block.level = 2; block.text = ''; }
  if (type === 'paragraph'){ block.text = ''; }
  if (type === 'image'){ block.url = ''; block.caption = ''; }
  if (type === 'callout'){ block.kind = 'tip'; block.text = ''; }
  if (type === 'video'){ block.url = ''; }
  if (type === 'table'){ block.rows = [{cells:['Header 1', 'Header 2']}, {cells:['', '']}]; }
  if (type === 'itemcard'){ block.title = ''; block.description = ''; block.items = []; }
  if (type === 'ratingcard'){ block.title = ''; block.titleLink = null; block.role = ''; block.description = ''; block.stats = []; block.ratings = []; }
  if (type === 'collapsible'){ block.trigger = 'Click to reveal'; block.text = ''; }
  blocks.push(block);
  renderBlocks();
  document.getElementById('addBlockMenu').classList.remove('open');
}
function removeBlock(id){
  isDirty = true;
  blocks = blocks.filter(b => b.id !== id);
  delete pendingImageFiles[id];
  renderBlocks();
}
function duplicateBlock(id){
  isDirty = true;
  const idx = blocks.findIndex(b => b.id === id);
  if (idx === -1) return;
  const copy = JSON.parse(JSON.stringify(blocks[idx]));
  copy.id = uid();
  blocks.splice(idx + 1, 0, copy);
  renderBlocks();
}
function moveBlock(id, dir){
  isDirty = true;
  const idx = blocks.findIndex(b => b.id === id);
  const swapIdx = idx + dir;
  if (swapIdx < 0 || swapIdx >= blocks.length) return;
  [blocks[idx], blocks[swapIdx]] = [blocks[swapIdx], blocks[idx]];
  renderBlocks();
}
function blockLabel(type){
  return { heading:t('block_heading'), paragraph:t('block_paragraph'), image:t('block_image'), callout:t('block_callout'), video:t('block_video'), table:t('block_table'), itemcard:t('block_itemcard'), ratingcard:t('block_ratingcard'), collapsible:t('block_collapsible'), divider:t('block_divider') }[type];
}
function blockHeaderControls(b){
  return `
    <div class="block-head">
      <div class="block-type">${blockLabel(b.type)}</div>
      <div class="block-actions">
        <div class="btn-ghost" onclick="moveBlock('${b.id}', -1)" title="Move up"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="18 15 12 9 6 15"/></svg></div>
        <div class="btn-ghost" onclick="moveBlock('${b.id}', 1)" title="Move down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="6 9 12 15 18 9"/></svg></div>
        <div class="btn-ghost" onclick="duplicateBlock('${b.id}')" title="Duplicate"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></div>
        <div class="btn-ghost btn-danger" onclick="removeBlock('${b.id}')" title="Remove"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div>
      </div>
    </div>
  `;
}
function escHtml(s){ return (s||'').replace(/</g,'&lt;'); }
function truncateTitle(str, max){
  max = max || 10;
  str = str || '';
  return str.length > max ? str.slice(0, max) + '…' : str;
}
function escAttr(s){ return (s||'').replace(/"/g,'&quot;'); }
function starsHTML(stars, plus){
  let out = '';
  for (let i=1; i<=5; i++) out += i <= (stars||0) ? '★' : '☆';
  if (plus) out += '+';
  return out;
}

function renderBlocks(){
  const wrap = document.getElementById('blocksWrap');
  document.getElementById('emptyHint').style.display = blocks.length ? 'none' : 'block';
  wrap.innerHTML = blocks.map(b => {
    if (b.type === 'heading'){
      return `<div class="block">${blockHeaderControls(b)}
        <div class="format-toolbar">
          <button onclick="setHeadingLevel('${b.id}',2)" style="${b.level===2?'border-color:var(--gold); color:var(--gold-bright);':''}">H2 Large</button>
          <button onclick="setHeadingLevel('${b.id}',3)" style="${b.level===3?'border-color:var(--gold); color:var(--gold-bright);':''}">H3 Small</button>
        </div>
        <input type="text" class="heading-input" data-level="${b.level}" placeholder="Section title…" value="${escAttr(b.text)}" oninput="updateField('${b.id}','text', this.value)">
      </div>`;
    }
    if (b.type === 'paragraph'){
      return `<div class="block">${blockHeaderControls(b)}
        <div class="format-toolbar">
          <button onclick="wrapSelection('${b.id}','**','**')" title="Bold"><b>B</b></button>
          <button onclick="wrapSelection('${b.id}','_','_')" title="Italic"><i>I</i></button>
          <button onclick="prefixLines('${b.id}','* ')" title="Bullet list">• List</button>
          <button onclick="prefixLines('${b.id}','1. ')" title="Numbered list">1. List</button>
          <button onclick="openLinkPicker('${b.id}')" title="Link">🔗 Link</button>
        </div>
        <textarea id="ta-${b.id}" placeholder="Write here… supports **bold**, _italic_, * bullet lists" oninput="updateField('${b.id}','text', this.value)">${escHtml(b.text)}</textarea>
      </div>`;
    }
    if (b.type === 'image'){
      return `<div class="block">${blockHeaderControls(b)}
        <label class="btn" style="cursor:pointer;">📁 Choose file<input type="file" accept="image/*" style="display:none;" onchange="handleBlockImage('${b.id}', this)"></label>
        <input type="text" placeholder="Caption (optional)" value="${escAttr(b.caption)}" oninput="updateField('${b.id}','caption', this.value)" style="margin-top:8px;">
        <img id="img-${b.id}" class="image-preview" src="${escAttr(b.url)}" style="${b.url ? 'display:block;' : ''}">
      </div>`;
    }
    if (b.type === 'callout'){
      return `<div class="block">${blockHeaderControls(b)}
        <div class="callout-type-row">
          <div class="callout-toggle" data-kind="tip" data-active="${b.kind==='tip'}" onclick="updateField('${b.id}','kind','tip')">💡 Tip</div>
          <div class="callout-toggle" data-kind="warning" data-active="${b.kind==='warning'}" onclick="updateField('${b.id}','kind','warning')">⚠️ Warning</div>
        </div>
        <textarea placeholder="Write your tip or warning…" oninput="updateField('${b.id}','text', this.value)">${escHtml(b.text)}</textarea>
      </div>`;
    }
    if (b.type === 'video'){
      return `<div class="block">${blockHeaderControls(b)}
        <input type="text" placeholder="Paste a YouTube link" value="${escAttr(b.url)}" oninput="updateField('${b.id}','url', this.value)">
      </div>`;
    }
    if (b.type === 'table'){
      return `<div class="block">${blockHeaderControls(b)}
        <div class="table-editor">
          ${b.rows.map((row, rIdx) => `
            <div class="table-editor-row">
              ${row.cells.map((cell, cIdx) => `<input type="text" class="${rIdx===0?'table-header-input':''}" value="${escAttr(cell)}" placeholder="${rIdx===0?'Header':'Cell'}" oninput="updateTableCell('${b.id}',${rIdx},${cIdx},this.value)">`).join('')}
              <div class="btn-ghost btn-danger" onclick="removeTableRow('${b.id}',${rIdx})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div>
            </div>
          `).join('')}
        </div>
        <div style="display:flex; gap:8px; margin-top:10px;">
          <div class="btn" onclick="addTableRow('${b.id}')">+ Row</div>
          <div class="btn" onclick="removeLastTableRow('${b.id}')">− Row</div>
          <div class="btn" onclick="addTableColumn('${b.id}')">+ Column</div>
          <div class="btn" onclick="removeTableColumn('${b.id}')">− Column</div>
        </div>
      </div>`;
    }
    if (b.type === 'itemcard'){
      return `<div class="block">${blockHeaderControls(b)}
        <input type="text" placeholder="Title (e.g. Recommended Materials)" value="${escAttr(b.title)}" oninput="updateField('${b.id}','title', this.value)" style="margin-bottom:8px;">
        <div class="format-toolbar">
          <button onclick="wrapSelection('${b.id}','**','**','description')" title="Bold"><b>B</b></button>
          <button onclick="wrapSelection('${b.id}','_','_','description')" title="Italic"><i>I</i></button>
          <button onclick="prefixLines('${b.id}','* ','description')" title="Bullet list">• List</button>
          <button onclick="prefixLines('${b.id}','1. ','description')" title="Numbered list">1. List</button>
          <button onclick="openLinkPicker('${b.id}','description')" title="Link">🔗 Link</button>
        </div>
        <textarea id="ta-${b.id}-description" placeholder="Short description (optional)" style="min-height:50px; margin-bottom:12px;" oninput="updateField('${b.id}','description', this.value)">${escHtml(b.description)}</textarea>
        <div class="itemcard-picked">
          ${b.items.map(it => `<span class="itemcard-chip" onclick="toggleItemCardPick('${b.id}','${it.__cat}','${it.id}')">${it.title} <span style="color:var(--red);">✕</span></span>`).join('') || '<span style="color:var(--text-dim); font-size:12.5px;">No items added yet.</span>'}
        </div>
        <div class="btn" onclick="openItemCardPicker('${b.id}')" style="margin-top:8px;">+ Add elements from the site</div>
      </div>`;
    }
    if (b.type === 'ratingcard'){
      return `<div class="block">${blockHeaderControls(b)}
        <div style="display:flex; gap:8px; margin-bottom:8px;">
          <input type="text" placeholder="Name (e.g. Ah Yin)" value="${escAttr(b.title)}" oninput="updateField('${b.id}','title', this.value)" style="flex:2; margin-bottom:0;">
          <input type="text" placeholder="Role tag (e.g. Spirit / Attack)" value="${escAttr(b.role)}" oninput="updateField('${b.id}','role', this.value)" style="flex:1; margin-bottom:0;">
        </div>
        <div style="margin-bottom:12px;">
          ${b.titleLink
            ? `<div class="ratingcard-linked-chip">
                 <div class="ratingcard-linked-avatar" style="${b.titleLink.image ? `background-image:url('${b.titleLink.image}')` : ''}"></div>
                 <span class="ratingcard-linked-name">${escHtml(b.titleLink.title || '')}</span>
                 <span class="ratingcard-linked-remove" onclick="clearTitleLink('${b.id}')" title="Remove link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>
               </div>`
            : `<div class="btn" onclick="openTitleLinkPicker('${b.id}')">🔗 Link name to a site page (optional)</div>`}
        </div>
        <div class="format-toolbar">
          <button onclick="wrapSelection('${b.id}','**','**','description')" title="Bold"><b>B</b></button>
          <button onclick="wrapSelection('${b.id}','_','_','description')" title="Italic"><i>I</i></button>
        </div>
        <textarea id="ta-${b.id}-description" placeholder="Short blurb (optional)" style="min-height:44px; margin-bottom:12px;" oninput="updateField('${b.id}','description', this.value)">${escHtml(b.description)}</textarea>

        <div style="font-size:12px; font-weight:700; color:var(--text-dim); margin-bottom:6px;">STATS</div>
        <div class="ratingcard-row-list">
          ${b.stats.map((s, idx) => `
            <div class="ratingcard-row">
              <input type="text" placeholder="Label (e.g. PvE)" value="${escAttr(s.label)}" oninput="updateRatingCardStat('${b.id}',${idx},'label',this.value)">
              <input type="text" placeholder="Value (e.g. 125 / 165)" value="${escAttr(s.value)}" oninput="updateRatingCardStat('${b.id}',${idx},'value',this.value)">
              <div class="btn-ghost btn-danger" onclick="removeRatingCardStat('${b.id}',${idx})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div>
            </div>
          `).join('') || '<div style="color:var(--text-dim); font-size:12.5px; margin-bottom:8px;">No stats yet.</div>'}
        </div>
        <div class="btn" onclick="addRatingCardStat('${b.id}')" style="margin-bottom:16px;">+ Add stat</div>

        <div style="font-size:12px; font-weight:700; color:var(--text-dim); margin-bottom:6px;">STAR RATINGS</div>
        <div class="ratingcard-row-list">
          ${b.ratings.map((r, idx) => `
            <div class="ratingcard-row">
              <input type="text" placeholder="Label (e.g. PvP)" value="${escAttr(r.label)}" oninput="updateRatingCardRating('${b.id}',${idx},'label',this.value)" style="flex:1;">
              <div class="star-picker">
                ${[1,2,3,4,5].map(n => `<span class="star-pick${(r.stars||0)>=n?' filled':''}" onclick="setRatingCardStars('${b.id}',${idx},${n})">★</span>`).join('')}
              </div>
              <label class="star-plus-toggle"><input type="checkbox" ${r.plus?'checked':''} onchange="updateRatingCardRating('${b.id}',${idx},'plus',this.checked)"> +</label>
              <div class="btn-ghost btn-danger" onclick="removeRatingCardRating('${b.id}',${idx})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div>
            </div>
          `).join('') || '<div style="color:var(--text-dim); font-size:12.5px; margin-bottom:8px;">No ratings yet.</div>'}
        </div>
        <div class="btn" onclick="addRatingCardRating('${b.id}')">+ Add rating</div>
      </div>`;
    }
    if (b.type === 'collapsible'){
      return `<div class="block">${blockHeaderControls(b)}
        <input type="text" placeholder="Trigger text (e.g. Click to reveal)" value="${escAttr(b.trigger)}" oninput="updateField('${b.id}','trigger', this.value)" style="margin-bottom:8px;">
        <textarea placeholder="Hidden content…" oninput="updateField('${b.id}','text', this.value)">${escHtml(b.text)}</textarea>
      </div>`;
    }
    if (b.type === 'divider'){
      return `<div class="block">${blockHeaderControls(b)}<div style="color:var(--text-dim); font-size:13px;">A plain horizontal line, no settings needed.</div></div>`;
    }
    return '';
  }).join('');
  renderPreview();
}

function updateField(id, key, val){
  isDirty = true;
  const b = blocks.find(b => b.id === id);
  if (!b) return;
  b[key] = val;
  if (key === 'kind') renderBlocks(); else renderPreview();
}
function setHeadingLevel(id, level){ blocks.find(b=>b.id===id).level = level; renderBlocks(); }

// ---------- Rating Card: dynamic stats + star ratings ----------
function addRatingCardStat(id){
  isDirty = true;
  blocks.find(b => b.id === id).stats.push({ label:'', value:'' });
  renderBlocks();
}
function updateRatingCardStat(id, idx, key, val){
  isDirty = true;
  blocks.find(b => b.id === id).stats[idx][key] = val;
  renderPreview();
}
function removeRatingCardStat(id, idx){
  isDirty = true;
  blocks.find(b => b.id === id).stats.splice(idx, 1);
  renderBlocks();
}
function addRatingCardRating(id){
  isDirty = true;
  blocks.find(b => b.id === id).ratings.push({ label:'', stars:5, plus:false });
  renderBlocks();
}
function updateRatingCardRating(id, idx, key, val){
  isDirty = true;
  blocks.find(b => b.id === id).ratings[idx][key] = val;
  if (key === 'label') renderPreview(); else renderBlocks();
}
function setRatingCardStars(id, idx, stars){
  isDirty = true;
  blocks.find(b => b.id === id).ratings[idx].stars = stars;
  renderBlocks();
}
function removeRatingCardRating(id, idx){
  isDirty = true;
  blocks.find(b => b.id === id).ratings.splice(idx, 1);
  renderBlocks();
}

// ---------- Block image cropper ----------
let blockCropTargetId = null;
let blockCropScale = 1, blockCropBaseScale = 1, blockCropOffsetX = 0, blockCropOffsetY = 0;
let blockCropNaturalW = 0, blockCropNaturalH = 0;
let blockCropDragging = false, blockCropDragStartX = 0, blockCropDragStartY = 0, blockCropStartOffsetX = 0, blockCropStartOffsetY = 0;
let blockCropRatio = 'free'; // 'free' | number (width/height)
const BLOCK_CROP_STAGE_W = 460, BLOCK_CROP_STAGE_H_DEFAULT = 280;

function handleCoverImageCrop(file){
  blockCropTargetId = '__cover__';
  const reader = new FileReader();
  reader.onload = (ev) => {
    const img = document.getElementById('blockCropImage');
    img.onload = () => {
      blockCropNaturalW = img.naturalWidth;
      blockCropNaturalH = img.naturalHeight;
      blockCropRatio = 1.7778; // covers look best as a wide banner
      document.querySelectorAll('.crop-ratio-btn').forEach(b => b.classList.toggle('active', b.dataset.ratio === '1.7778'));
      applyBlockCropStageSize();
      blockCropScale = 1;
      blockCropOffsetX = 0;
      blockCropOffsetY = 0;
      document.getElementById('blockCropZoom').value = 100;
      applyBlockCropTransform();
    };
    img.src = ev.target.result;
    document.getElementById('blockCropModal').classList.add('open');
  };
  reader.readAsDataURL(file);
}

function handleBlockImage(id, input){
  const file = input.files[0];
  if (!file) return;
  blockCropTargetId = id;
  const reader = new FileReader();
  reader.onload = (ev) => {
    const img = document.getElementById('blockCropImage');
    img.onload = () => {
      blockCropNaturalW = img.naturalWidth;
      blockCropNaturalH = img.naturalHeight;
      blockCropRatio = 'free';
      document.querySelectorAll('.crop-ratio-btn').forEach(b => b.classList.toggle('active', b.dataset.ratio === 'free'));
      applyBlockCropStageSize();
      blockCropScale = 1;
      blockCropOffsetX = 0;
      blockCropOffsetY = 0;
      document.getElementById('blockCropZoom').value = 100;
      applyBlockCropTransform();
    };
    img.src = ev.target.result;
    document.getElementById('blockCropModal').classList.add('open');
  };
  reader.readAsDataURL(file);
  input.value = '';
}

function applyBlockCropStageSize(){
  const stage = document.getElementById('blockCropStage');
  if (blockCropRatio === 'free'){
    stage.style.height = BLOCK_CROP_STAGE_H_DEFAULT + 'px';
  } else {
    stage.style.height = Math.round(BLOCK_CROP_STAGE_W / blockCropRatio) + 'px';
  }
  const stageH = stage.clientHeight;
  blockCropBaseScale = Math.min(BLOCK_CROP_STAGE_W / blockCropNaturalW, stageH / blockCropNaturalH);
}

document.querySelectorAll('.crop-ratio-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    blockCropRatio = btn.dataset.ratio === 'free' ? 'free' : parseFloat(btn.dataset.ratio);
    document.querySelectorAll('.crop-ratio-btn').forEach(b => b.classList.toggle('active', b === btn));
    applyBlockCropStageSize();
    blockCropOffsetX = 0;
    blockCropOffsetY = 0;
    applyBlockCropTransform();
  });
});

function applyBlockCropTransform(){
  const img = document.getElementById('blockCropImage');
  const stage = document.getElementById('blockCropStage');
  const stageW = stage.clientWidth, stageH = stage.clientHeight;
  const w = blockCropNaturalW * blockCropBaseScale * blockCropScale;
  const h = blockCropNaturalH * blockCropBaseScale * blockCropScale;
  const maxOffsetX = Math.max(0, (w - stageW) / 2);
  const maxOffsetY = Math.max(0, (h - stageH) / 2);
  blockCropOffsetX = Math.max(-maxOffsetX, Math.min(maxOffsetX, blockCropOffsetX));
  blockCropOffsetY = Math.max(-maxOffsetY, Math.min(maxOffsetY, blockCropOffsetY));
  img.style.width = w + 'px';
  img.style.height = h + 'px';
  img.style.marginLeft = blockCropOffsetX + 'px';
  img.style.marginTop = blockCropOffsetY + 'px';
}

document.getElementById('blockCropZoom').addEventListener('input', (e) => {
  blockCropScale = e.target.value / 100;
  applyBlockCropTransform();
});

const blockCropStageEl = document.getElementById('blockCropStage');
blockCropStageEl.addEventListener('pointerdown', (e) => {
  blockCropDragging = true;
  blockCropStageEl.classList.add('dragging');
  blockCropDragStartX = e.clientX;
  blockCropDragStartY = e.clientY;
  blockCropStartOffsetX = blockCropOffsetX;
  blockCropStartOffsetY = blockCropOffsetY;
});
window.addEventListener('pointermove', (e) => {
  if (!blockCropDragging) return;
  blockCropOffsetX = blockCropStartOffsetX + (e.clientX - blockCropDragStartX);
  blockCropOffsetY = blockCropStartOffsetY + (e.clientY - blockCropDragStartY);
  applyBlockCropTransform();
});
window.addEventListener('pointerup', () => {
  blockCropDragging = false;
  blockCropStageEl.classList.remove('dragging');
});

function closeBlockCropModal(){
  document.getElementById('blockCropModal').classList.remove('open');
}

document.getElementById('confirmBlockCropBtn').addEventListener('click', async () => {
  isDirty = true;
  const stage = document.getElementById('blockCropStage');
  const stageW = stage.clientWidth, stageH = stage.clientHeight;
  const EXPORT_SCALE = 3; // export at 3x the on-screen preview size, so covers stay sharp at any display size
  const canvas = document.createElement('canvas');
  canvas.width = stageW * EXPORT_SCALE;
  canvas.height = stageH * EXPORT_SCALE;
  const ctx = canvas.getContext('2d');
  const img = document.getElementById('blockCropImage');
  const w = blockCropNaturalW * blockCropBaseScale * blockCropScale * EXPORT_SCALE;
  const h = blockCropNaturalH * blockCropBaseScale * blockCropScale * EXPORT_SCALE;
  const drawX = (canvas.width - w) / 2 + blockCropOffsetX * EXPORT_SCALE;
  const drawY = (canvas.height - h) / 2 + blockCropOffsetY * EXPORT_SCALE;
  ctx.drawImage(img, drawX, drawY, w, h);

  const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', 0.92));
  const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });
  const url = canvas.toDataURL('image/jpeg', 0.92);

  if (blockCropTargetId === '__cover__'){
    coverFile = file;
    document.getElementById('coverPreviewImg').src = url;
    document.getElementById('coverPreviewFrame').style.display = 'block';
    renderPreview();
    closeBlockCropModal();
    return;
  }

  pendingImageFiles[blockCropTargetId] = file;
  const b = blocks.find(b => b.id === blockCropTargetId);
  b.url = url;
  const previewImg = document.getElementById('img-' + blockCropTargetId);
  if (previewImg){
    previewImg.src = url;
    previewImg.style.display = 'block';
  }
  renderPreview();
  closeBlockCropModal();
});

function wrapSelection(id, before, after, field){
  field = field || 'text';
  const ta = document.getElementById(field === 'text' ? 'ta-' + id : 'ta-' + id + '-' + field);
  const start = ta.selectionStart, end = ta.selectionEnd;
  const val = ta.value;
  const selected = val.slice(start, end) || 'text';
  ta.value = val.slice(0, start) + before + selected + after + val.slice(end);
  updateField(id, field, ta.value);
  ta.focus();
}
function prefixLines(id, prefix, field){
  field = field || 'text';
  const ta = document.getElementById(field === 'text' ? 'ta-' + id : 'ta-' + id + '-' + field);
  const start = ta.selectionStart, end = ta.selectionEnd;
  const val = ta.value;
  const selected = val.slice(start, end) || 'item';
  const lines = selected.split('\n').map(l => l.startsWith(prefix) ? l : prefix + l).join('\n');
  ta.value = val.slice(0, start) + lines + val.slice(end);
  updateField(id, field, ta.value);
  ta.focus();
}

function updateTableCell(id, rIdx, cIdx, val){ isDirty = true; blocks.find(b=>b.id===id).rows[rIdx].cells[cIdx] = val; renderPreview(); }
function addTableRow(id){ isDirty = true; const b=blocks.find(b=>b.id===id); b.rows.push({cells: b.rows[0].cells.map(()=>'')}); renderBlocks(); }
function removeTableRow(id, rIdx){ isDirty = true; const b=blocks.find(b=>b.id===id); if (b.rows.length<=1) return; b.rows.splice(rIdx,1); renderBlocks(); }
function removeLastTableRow(id){ isDirty = true; const b=blocks.find(b=>b.id===id); if (b.rows.length<=1) return; b.rows.pop(); renderBlocks(); }
function addTableColumn(id){ isDirty = true; const b=blocks.find(b=>b.id===id); b.rows.forEach(r=>r.cells.push('')); renderBlocks(); }
function removeTableColumn(id){ isDirty = true; const b=blocks.find(b=>b.id===id); if (b.rows[0].cells.length<=1) return; b.rows.forEach(r=>r.cells.pop()); renderBlocks(); }

// ---------- Item Cards picker (real site search) ----------
let itemCardTargetBlockId = null;
let itemCardMode = 'multi'; // 'multi' (Item Cards block) or 'titlelink' (Rating Card title)
function openItemCardPicker(blockId){
  itemCardMode = 'multi';
  itemCardTargetBlockId = blockId;
  document.getElementById('itemCardModal').classList.add('open');
  document.getElementById('itemCardSearch').value = '';
  document.getElementById('itemCardCategoryFilter').value = '';
  renderItemCardPickerList();
}
function openTitleLinkPicker(blockId){
  itemCardMode = 'titlelink';
  itemCardTargetBlockId = blockId;
  document.getElementById('itemCardModal').classList.add('open');
  document.getElementById('itemCardSearch').value = '';
  document.getElementById('itemCardCategoryFilter').value = '';
  renderItemCardPickerList();
}
function closeItemCardPicker(){ document.getElementById('itemCardModal').classList.remove('open'); }
function renderItemCardPickerList(){
  const b = blocks.find(b => b.id === itemCardTargetBlockId);
  const results = searchSiteItems(document.getElementById('itemCardSearch').value, document.getElementById('itemCardCategoryFilter').value);
  const isActive = (item) => itemCardMode === 'titlelink'
    ? (b.titleLink && b.titleLink.id === item.id && b.titleLink.__cat === item.__cat)
    : b.items.some(x=>x.id===item.id && x.__cat===item.__cat);
  const handler = itemCardMode === 'titlelink' ? 'pickTitleLink' : 'toggleItemCardPick';
  document.getElementById('itemCardPickerList').innerHTML = results.map(item => `
    <div class="itemcard-pick-row ${isActive(item) ? 'active' : ''}" onclick="${handler}('${itemCardTargetBlockId}','${item.__cat}','${item.id}')">
      <div class="itemcard-pick-thumb" style="${siteItemImage(item) ? `background-image:url('${siteItemImage(item)}')` : ''}"></div>
      <div><div style="font-weight:600;" title="${item.title}">${truncateTitle(item.title)}</div><div style="font-size:11px; color:var(--text-dim);">${item.__catLabel}</div></div>
    </div>
  `).join('') || '<div style="grid-column:1/-1; text-align:center; color:var(--text-dim); padding:20px;">No results.</div>';
}
function pickTitleLink(blockId, cat, itemId){
  isDirty = true;
  const b = blocks.find(b => b.id === blockId);
  const item = ((window.WIKI && window.WIKI[cat]) || []).find(x => x.id === itemId);
  if (item) b.titleLink = { id: item.id, __cat: cat, title: item.title, image: siteItemImage(item) };
  closeItemCardPicker();
  renderBlocks();
}
function clearTitleLink(blockId){
  isDirty = true;
  blocks.find(b => b.id === blockId).titleLink = null;
  renderBlocks();
}
function toggleItemCardPick(blockId, cat, itemId){
  isDirty = true;
  const b = blocks.find(b => b.id === blockId);
  const idx = b.items.findIndex(x => x.id === itemId && x.__cat === cat);
  if (idx > -1){
    b.items.splice(idx, 1);
  } else {
    const item = ((window.WIKI && window.WIKI[cat]) || []).find(x => x.id === itemId);
    if (item) b.items.push({ id: item.id, title: item.title, image: siteItemImage(item), __cat: cat });
  }
  renderBlocks();
  if (document.getElementById('itemCardModal').classList.contains('open')) renderItemCardPickerList();
}

// ---------- Link picker (real site search, inserts markdown link into a paragraph) ----------
let linkPickerTargetBlockId = null;
let linkPickerTargetField = 'text';
let linkPickerSelStart = 0, linkPickerSelEnd = 0;
function openLinkPicker(blockId, field){
  field = field || 'text';
  const ta = document.getElementById(field === 'text' ? 'ta-' + blockId : 'ta-' + blockId + '-' + field);
  if (ta.selectionStart === ta.selectionEnd){ customAlert('Select some text first, then click Link'); return; }
  linkPickerTargetBlockId = blockId;
  linkPickerTargetField = field;
  linkPickerSelStart = ta.selectionStart;
  linkPickerSelEnd = ta.selectionEnd;
  document.getElementById('linkPickerModal').classList.add('open');
  document.getElementById('linkPickerSearch').value = '';
  document.getElementById('linkPickerCategoryFilter').value = '';
  renderLinkPickerList();
}
function closeLinkPicker(){ document.getElementById('linkPickerModal').classList.remove('open'); }
function renderLinkPickerList(){
  const results = searchSiteItems(document.getElementById('linkPickerSearch').value, document.getElementById('linkPickerCategoryFilter').value);
  document.getElementById('linkPickerList').innerHTML = results.map(item => `
    <div class="itemcard-pick-row" onclick="insertLink('${item.__cat}','${item.id}')">
      <div class="itemcard-pick-thumb" style="${siteItemImage(item) ? `background-image:url('${siteItemImage(item)}')` : ''}"></div>
      <div><div style="font-weight:600;" title="${item.title}">${truncateTitle(item.title)}</div><div style="font-size:11px; color:var(--text-dim);">${item.__catLabel}</div></div>
    </div>
  `).join('') || '<div style="grid-column:1/-1; text-align:center; color:var(--text-dim); padding:20px;">No results.</div>';
}
function insertLink(cat, itemId){
  const ta = document.getElementById(linkPickerTargetField === 'text' ? 'ta-' + linkPickerTargetBlockId : 'ta-' + linkPickerTargetBlockId + '-' + linkPickerTargetField);
  const val = ta.value;
  const selectedText = val.slice(linkPickerSelStart, linkPickerSelEnd);
  const markup = `[${selectedText}](${cat}/${itemId})`;
  ta.value = val.slice(0, linkPickerSelStart) + markup + val.slice(linkPickerSelEnd);
  updateField(linkPickerTargetBlockId, linkPickerTargetField, ta.value);
  closeLinkPicker();
}

// ---------- Text parsing (same rules as the main site) ----------
function parseInlineText(text){
  let out = escHtml(text || '');
  out = out.replace(/\[([^\[\]]+)\]\((personnages|monstres|objets|zones|trials)\/([a-zA-Z0-9\-_]+)\)/g, (m, t, cat, id) => `<a href="index#/${cat}/${id}" class="desc-link" target="_blank">${t}</a>`);
  out = out.replace(/\[\[([^\[\]]+)\]\]/g, (m, term) => {
    const def = authorGlossary[term] || authorGlossary[Object.keys(authorGlossary).find(k => k.toLowerCase() === term.trim().toLowerCase())];
    return def ? `<span class="glossary-term" title="${escAttr(def)}">${term}</span>` : term;
  });
  out = out.replace(/\*\*([^\n*]+)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/_([^\n_]+)_/g, '<em>$1</em>');
  const lines = out.split('\n');
  let html = ''; let inList = false; let listTag = 'ul';
  lines.forEach(line => {
    const bulletMatch = line.match(/^\s*\*\s+(.*)$/);
    const numMatch = line.match(/^\s*\d+\.\s+(.*)$/);
    if (bulletMatch || numMatch){
      const tag = bulletMatch ? 'ul' : 'ol';
      if (!inList){ html += `<${tag}>`; inList = true; listTag = tag; }
      html += `<li>${bulletMatch ? bulletMatch[1] : numMatch[1]}</li>`;
    } else {
      if (inList){ html += `</${listTag}>`; inList = false; }
      html += line + '<br>';
    }
  });
  if (inList) html += `</${listTag}>`;
  return html;
}
function youtubeEmbedUrl(url){
  const m = (url||'').match(/(?:youtu\.be\/|v=)([a-zA-Z0-9_-]{6,})/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : '';
}

function renderPreview(){
  const title = document.getElementById('guideTitle').value || 'Untitled Guide';
  const lang = document.getElementById('guideLang').value;

  const body = blocks.map(b => {
    if (b.type === 'heading') return `<div class="preview-block" id="toc-${b.id}">${b.level===2 ? `<h3>${escHtml(b.text)||'Heading'}</h3>` : `<h4>${escHtml(b.text)||'Heading'}</h4>`}</div>`;
    if (b.type === 'paragraph') return `<div class="preview-block">${parseInlineText(b.text)}</div>`;
    if (b.type === 'image') return `<div class="preview-block">${b.url ? `<img src="${b.url}">` : ''}${b.caption ? `<div style="color:var(--text-dim); font-size:12.5px; margin-top:6px;">${escHtml(b.caption)}</div>` : ''}</div>`;
    if (b.type === 'callout'){
      const icon = b.kind==='tip' ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg>' : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';
      return `<div class="preview-block"><div class="preview-callout ${b.kind}">${icon}<div>${parseInlineText(b.text)}</div></div></div>`;
    }
    if (b.type === 'video'){ const embed = youtubeEmbedUrl(b.url); return `<div class="preview-block">${embed ? `<div class="preview-video"><iframe src="${embed}"></iframe></div>` : '<div style="color:var(--text-dim); font-size:13px;">Paste a valid YouTube link.</div>'}</div>`; }
    if (b.type === 'table') return `<div class="preview-block"><table class="preview-table"><thead><tr>${b.rows[0].cells.map(c=>`<th>${escHtml(c)}</th>`).join('')}</tr></thead><tbody>${b.rows.slice(1).map(r=>`<tr>${r.cells.map(c=>`<td>${escHtml(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    if (b.type === 'itemcard'){
      if (!b.title && !b.description && !b.items.length) return '';
      return `<div class="preview-block"><div class="preview-itemcard-panel">
        ${b.title ? `<div class="preview-itemcard-title">${escHtml(b.title)}</div>` : ''}
        ${b.description ? `<div class="preview-itemcard-desc">${parseInlineText(b.description)}</div>` : ''}
        <div class="preview-itemcard-grid">${b.items.map(it => `<a href="index#/${it.__cat}/${it.id}" target="_blank" class="preview-itemcard-card"><div class="preview-itemcard-thumb" style="${it.image?`background-image:url('${it.image}')`:''}"></div><div class="preview-itemcard-name">${it.title}</div></a>`).join('')}</div>
      </div></div>`;
    }
    if (b.type === 'ratingcard'){
      if (!b.title && !b.stats.length && !b.ratings.length) return '';
      return `<div class="preview-block"><div class="preview-ratingcard">
        <div class="preview-ratingcard-head">
          ${b.titleLink && b.titleLink.image ? `<div class="preview-ratingcard-avatar" style="background-image:url('${b.titleLink.image}')"></div>` : ''}
          <div class="preview-ratingcard-headtext">
            <div class="preview-ratingcard-title">${b.titleLink ? `<a href="index#/${b.titleLink.__cat}/${b.titleLink.id}" target="_blank" class="ratingcard-title-link">${escHtml(b.title) || 'Untitled'}</a>` : (escHtml(b.title) || 'Untitled')}</div>
            ${b.role ? `<span class="preview-ratingcard-role">${escHtml(b.role)}</span>` : ''}
          </div>
        </div>
        ${b.description ? `<div class="preview-ratingcard-desc">${parseInlineText(b.description)}</div>` : ''}
        ${b.stats.length ? `<div class="preview-ratingcard-stats">${b.stats.map(s => `<div class="preview-ratingcard-stat"><span class="stat-label">${escHtml(s.label)}</span><span class="stat-value">${escHtml(s.value)}</span></div>`).join('')}</div>` : ''}
        ${b.ratings.length ? `<div class="preview-ratingcard-ratings">${b.ratings.map(r => `<div class="preview-ratingcard-rating"><span class="rating-label">${escHtml(r.label)}</span><span class="rating-stars">${starsHTML(r.stars, r.plus)}</span></div>`).join('')}</div>` : ''}
      </div></div>`;
    }
    if (b.type === 'collapsible'){
      const cid = 'collapse-' + b.id;
      return `<div class="preview-block">
        <div class="preview-collapsible-trigger" onclick="document.getElementById('${cid}').classList.toggle('open'); this.classList.toggle('open')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 6 15 12 9 18"/></svg>${escHtml(b.trigger)||'Click to reveal'}
        </div>
        <div id="${cid}" class="preview-collapsible-content">${parseInlineText(b.text)}</div>
      </div>`;
    }
    if (b.type === 'divider') return `<div class="preview-block"><hr class="preview-divider"></div>`;
    return '';
  }).join('');

  const headingBlocks = blocks.filter(b => b.type === 'heading' && b.text);
  const tocHTML = headingBlocks.length >= 2 ? `<div class="preview-toc"><div class="preview-toc-title">On this page</div>${headingBlocks.map(hb => `<a href="#toc-${hb.id}" class="preview-toc-link ${hb.level===3?'sub':''}">${escHtml(hb.text)}</a>`).join('')}</div>` : '';

  const coverFrame = document.getElementById('coverPreviewFrame');
  const coverVisible = coverFrame.style.display === 'block';
  const coverImg = document.getElementById('coverPreviewImg');

  document.getElementById('previewArea').innerHTML = `
    ${coverVisible ? `<div class="cover-frame preview-cover"><img class="cover-fg" src="${coverImg.src}"></div>` : ''}
    <h2>${escHtml(title)}</h2>
    <div class="preview-sub">Language: ${escHtml(lang)}</div>
    ${tocHTML}
    ${body || '<div style="color:var(--text-dim); font-size:13.5px;">Add sections above to see them appear here.</div>'}
  `;
}

// ---------- Persistence: Save as Draft (text only, no image uploads) ----------
// Uploads the cover image and any pending block images to Cloudinary.
// Shared by both Save Draft and Submit for Review, so images never get lost.
async function uploadPendingImages(statusEl){
  if (coverFile){
    statusEl.textContent = 'Uploading cover image…';
    coverImageUrl = await uploadToCloudinary(coverFile, 'cover', `guides/${guideId}`);
    coverFile = null;
  }
  const blockIds = Object.keys(pendingImageFiles);
  for (let i = 0; i < blockIds.length; i++){
    const blockId = blockIds[i];
    statusEl.textContent = `Uploading image ${i+1}/${blockIds.length}…`;
    const url = await uploadToCloudinary(pendingImageFiles[blockId], blockId, `guides/${guideId}/${blockId}`);
    const b = blocks.find(b => b.id === blockId);
    if (b) b.url = url;
  }
  pendingImageFiles = {};
}

async function saveDraft(){
  const status = document.getElementById('saveStatus');
  status.textContent = 'Saving…';
  try {
    await uploadPendingImages(status);
    await persistNewTags();
    status.textContent = 'Saving…';
    const profile = await getCurrentUserProfile();
    await db.collection('guides').doc(guideId).set({
      title: document.getElementById('guideTitle').value.trim(),
      language: document.getElementById('guideLang').value,
      tags: guideTags,
      blocks: blocks,
      coverImageUrl: coverImageUrl,
      authorId: currentUser.uid,
      authorUsername: (profile && profile.username) || currentUser.email,
      status: 'draft',
      ...(isExistingGuide ? {} : { createdAt: firebase.firestore.FieldValue.serverTimestamp() }),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });
    currentStatus = 'draft';
    applyGuideStatusUI();
    isDirty = false;
    status.textContent = `Draft saved at ${new Date().toLocaleTimeString()}.`;
  } catch (e){
    status.textContent = 'Could not save draft: ' + (e.message || 'unknown error');
  }
}

// ---------- Persistence: Submit for Review (uploads all pending images, then publishes as pending) ----------
async function submitForReview(){
  const title = document.getElementById('guideTitle').value.trim();
  if (!title){ customAlert('Please add a title first.'); return; }
  if (!blocks.length){ customAlert('Add at least one section first.'); return; }

  const btn = document.getElementById('submitBtn');
  const status = document.getElementById('saveStatus');
  btn.disabled = true;
  try {
    await currentUser.getIdToken(true); // refresh the token so email_verified is current, not stale
    await uploadPendingImages(status);
    await persistNewTags();

    // Save the final guide document
    status.textContent = 'Publishing…';
    const profile = await getCurrentUserProfile();
    await db.collection('guides').doc(guideId).set({
      title,
      language: document.getElementById('guideLang').value,
      tags: guideTags,
      blocks: blocks,
      coverImageUrl: coverImageUrl,
      authorId: currentUser.uid,
      authorUsername: (profile && profile.username) || currentUser.email,
      status: 'pending',
      ...(isExistingGuide ? {} : { createdAt: firebase.firestore.FieldValue.serverTimestamp() }),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      activityLog: firebase.firestore.FieldValue.arrayUnion({
        action: isExistingGuide ? 'Resubmitted for review' : 'Submitted for review',
        by: (profile && profile.username) || currentUser.email,
        at: firebase.firestore.Timestamp.now(),
      }),
    }, { merge: true });

    // Notify admins on-site that a guide is waiting for review
    try {
      await db.collection('notifAdmin').add({
        type: 'new_guide',
        guideId: guideId,
        guideTitle: title,
        read: false,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    } catch (e){ console.error('Could not create admin notification (non-blocking):', e); }

    isDirty = false;
    status.textContent = 'Submitted! Redirecting…';
    setTimeout(() => { location.href = 'guides-hub'; }, 1200);
  } catch (e){
    status.textContent = 'Could not submit: ' + (e.message || 'unknown error');
    btn.disabled = false;
  }
}
