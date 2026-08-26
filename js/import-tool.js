/* ---------- Bulk Import Tool ---------- */

// The fields this tool knows how to import for Bag entries.
// 'title' is always required and can't be turned off.
const IMPORTABLE_FIELDS = [
  { key: 'title', label: 'Title', required: true },
  { key: 'subtitle', label: 'Subtitle', required: false },
  { key: 'description', label: 'Description', required: false },
  { key: 'bagType', label: 'Bag Type (item / material / halo / spiribone / soulcore)', required: false },
  { key: 'category', label: 'Category', required: false },
  { key: 'textSources', label: 'Other Sources (comma-separated)', required: false },
  { key: 'stats', label: 'Stats (format: Label:Value; Label:Value)', required: false },
  { key: 'materialApplicableSpirits', label: 'Applicable Spirit (comma-separated: Bruiser, Control, Defense, Agility, Support)', required: false },
];

let referenceItem = null;
let fieldToggleState = {}; // key -> true/false
let parsedEntries = []; // successfully parsed, ready to commit

function truncateTitle(str, max){
  max = max || 10;
  str = str || '';
  return str.length > max ? str.slice(0, max) + '…' : str;
}

function slugify(str){
  return (str || '')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '') || 'entry';
}
function uniqueId(base, list){
  let id = base, n = 2;
  while (list.some(p => p.id === id)){ id = `${base}-${n}`; n++; }
  return id;
}

// ---------- fsAccess status ----------
async function refreshFsStatus(){
  const status = await fsGetStatus();
  const text = document.getElementById('fsStatusText');
  const btn = document.getElementById('connectFolderBtn');
  if (status === 'connected'){
    text.textContent = `✅ Connected: ${fsFolderName()}`;
    btn.style.display = 'none';
  } else if (status === 'needs-permission'){
    text.textContent = 'Permission needed, click to reconnect.';
    btn.textContent = '📁 Reconnect project folder';
  } else if (status === 'unsupported'){
    text.textContent = 'Your browser doesn\'t support direct disk writes (use Chrome or Edge).';
  } else {
    text.textContent = 'Not connected yet.';
  }
}
document.getElementById('connectFolderBtn').addEventListener('click', async () => {
  const status = await fsGetStatus();
  if (status === 'needs-permission') await fsReconnect();
  else await fsConnect();
  refreshFsStatus();
});

// ---------- Step 2: reference item picker ----------
function renderReferenceList(){
  const search = document.getElementById('referenceSearch').value.toLowerCase();
  const catId = document.getElementById('importCategorySelect').value;
  const items = ((window.WIKI && window.WIKI[catId]) || []).filter(o =>
    !search || o.title.toLowerCase().includes(search)
  );
  const list = document.getElementById('referenceList');
  if (!items.length){
    list.innerHTML = `<div class="import-empty">No items match.</div>`;
    return;
  }
  list.innerHTML = items.map(o => `
    <div class="import-reference-row ${referenceItem && referenceItem.id === o.id ? 'active' : ''}" data-id="${o.id}">
      <div class="import-reference-thumb" style="${o.image ? `background-image:url('${o.image}')` : ''}"></div>
      <div>
        <div class="import-reference-title" title="${o.title}">${truncateTitle(o.title)}</div>
        <div class="import-reference-meta">${o.bagType || 'no type'}${o.category ? ' · ' + o.category : ''}</div>
      </div>
    </div>
  `).join('');
  list.querySelectorAll('.import-reference-row').forEach(row => {
    row.addEventListener('click', () => selectReferenceItem(row.dataset.id));
  });
}
document.getElementById('referenceSearch').addEventListener('input', renderReferenceList);
document.getElementById('importCategorySelect').addEventListener('change', () => {
  referenceItem = null;
  document.getElementById('fieldToggleStep').style.display = 'none';
  document.getElementById('pasteStep').style.display = 'none';
  renderReferenceList();
});

function selectReferenceItem(id){
  const catId = document.getElementById('importCategorySelect').value;
  referenceItem = ((window.WIKI && window.WIKI[catId]) || []).find(o => o.id === id);
  renderReferenceList();
  if (!referenceItem) return;
  document.getElementById('refItemNameLabel').textContent = referenceItem.title;
  renderFieldToggles();
  document.getElementById('fieldToggleStep').style.display = 'flex';
  document.getElementById('pasteStep').style.display = 'flex';
}

// ---------- Step 3: field toggles ----------
function isFieldFilledOnReference(key){
  if (!referenceItem) return false;
  const val = referenceItem[key];
  if (Array.isArray(val)) return val.length > 0;
  if (typeof val === 'string') return val.trim().length > 0;
  return !!val;
}
function renderFieldToggles(){
  fieldToggleState = {};
  IMPORTABLE_FIELDS.forEach(f => {
    fieldToggleState[f.key] = f.required || isFieldFilledOnReference(f.key);
  });
  const wrap = document.getElementById('fieldToggleList');
  wrap.innerHTML = IMPORTABLE_FIELDS.map(f => `
    <label class="import-toggle-row ${f.required ? 'locked' : ''}">
      <input type="checkbox" data-field="${f.key}" ${fieldToggleState[f.key] ? 'checked' : ''} ${f.required ? 'disabled' : ''}>
      <span>${f.label}</span>
      ${f.required ? '<span class="import-toggle-badge">always on</span>' : (isFieldFilledOnReference(f.key) ? '<span class="import-toggle-badge">filled on reference</span>' : '')}
    </label>
  `).join('');
  wrap.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', () => {
      fieldToggleState[cb.dataset.field] = cb.checked;
      renderFormatExample();
    });
  });
  renderFormatExample();
}
function renderFormatExample(){
  const activeFields = IMPORTABLE_FIELDS.filter(f => fieldToggleState[f.key]);
  document.getElementById('formatExample').innerHTML =
    `<b>Expected format for each item:</b><br>` +
    activeFields.map(f => `${f.key}[...]`).join('<br>');
}

// ---------- Step 4: parse ----------
function parseImportText(text){
  const blocks = text.split(/\n\s*\n/).map(b => b.trim()).filter(Boolean);
  const catId = document.getElementById('importCategorySelect').value;
  const existingList = (window.WIKI && window.WIKI[catId]) || [];
  const usedIdsThisBatch = [];
  const results = []; // { ok: bool, entry, warnings: [], errors: [], raw }

  blocks.forEach(block => {
    const fieldRegex = /([a-zA-Z]+)\[([\s\S]*?)\]/g;
    const found = {};
    let m;
    while ((m = fieldRegex.exec(block)) !== null){
      found[m[1]] = m[2].trim();
    }

    const warnings = [];
    const errors = [];

    if (fieldToggleState.title && !found.title){
      errors.push('missing required field "title", skipped');
      results.push({ ok:false, errors, warnings, raw:block });
      return;
    }

    const entry = { ...referenceItem }; // start from the reference item's full structure
    delete entry.id;

    IMPORTABLE_FIELDS.forEach(f => {
      if (!fieldToggleState[f.key]) return; // OFF: keep reference item's value (already copied above)
      if (found[f.key] !== undefined){
        if (f.key === 'textSources' || f.key === 'materialApplicableSpirits'){
          entry[f.key] = found[f.key].split(',').map(s => s.trim()).filter(Boolean);
        } else if (f.key === 'stats'){
          entry.stats = found[f.key].split(';').map(pair => {
            const [label, value] = pair.split(':').map(s => (s || '').trim());
            return { label, value };
          }).filter(s => s.label);
        } else {
          entry[f.key] = found[f.key];
        }
      } else {
        warnings.push(`field "${f.key}" is enabled but missing in this block, kept the reference item's value`);
      }
    });

    const baseId = slugify(entry.title);
    const id = uniqueId(baseId, [...existingList, ...usedIdsThisBatch.map(i => ({ id:i }))]);
    usedIdsThisBatch.push(id);
    entry.id = id;

    results.push({ ok:true, entry, warnings, errors, raw:block });
  });

  return results;
}

function logLine(text, type){
  const el = document.createElement('div');
  el.className = 'import-console-line ' + (type || '');
  el.textContent = text;
  document.getElementById('importConsole').appendChild(el);
  el.scrollIntoView({ block:'end' });
}

document.getElementById('parseBtn').addEventListener('click', () => {
  if (!referenceItem){ alert('Choose a reference item first.'); return; }
  const text = document.getElementById('importTextArea').value;
  if (!text.trim()){ alert('Paste some text first.'); return; }

  document.getElementById('importConsole').innerHTML = '';
  document.getElementById('logStep').style.display = 'flex';

  const results = parseImportText(text);
  logLine(`Parsing ${results.length} block(s)...`, 'info');

  parsedEntries = [];
  results.forEach((r, i) => {
    if (!r.ok){
      logLine(`✗ Block ${i+1}: ${r.errors.join('; ')}`, 'error');
      return;
    }
    r.warnings.forEach(w => logLine(`⚠ "${r.entry.title}": ${w}`, 'warning'));
    logLine(`✓ "${r.entry.title}" ready (id: ${r.entry.id})`, 'success');
    parsedEntries.push(r.entry);
  });

  logLine(`Done. ${parsedEntries.length} item(s) ready to write, ${results.length - parsedEntries.length} skipped.`, 'info');
  document.getElementById('commitBtn').style.display = parsedEntries.length ? 'inline-flex' : 'none';
});

// ---------- Step 5: commit to disk ----------
function generateFileContent(catId, list){
  const body = JSON.stringify(list, null, 2);
  return `// "${catId}" page: generated from editeur-import.html on ${new Date().toLocaleDateString('en-US')}\n` +
         `// You can also edit this file by hand: each object is one entry.\n` +
         `window.WIKI = window.WIKI || {};\n` +
         `window.WIKI.${catId} = ${body};\n`;
}

document.getElementById('commitBtn').addEventListener('click', async () => {
  const catId = document.getElementById('importCategorySelect').value;
  window.WIKI[catId] = [...(window.WIKI[catId] || []), ...parsedEntries];

  const status = await fsGetStatus();
  if (status !== 'connected'){
    logLine('Folder not connected. Connect it above, then click this button again.', 'error');
    return;
  }
  try {
    const content = generateFileContent(catId, window.WIKI[catId]);
    await fsWriteContentFile(catId, content);
    logLine(`✅ Written to disk: content/${catId}.js (${parsedEntries.length} new entries added)`, 'success');
    document.getElementById('commitBtn').style.display = 'none';
    document.getElementById('importTextArea').value = '';
    parsedEntries = [];
  } catch (e){
    logLine('✗ Write failed: ' + (e.message || 'unknown error'), 'error');
  }
});

// ---------- init ----------
refreshFsStatus();
renderReferenceList();
