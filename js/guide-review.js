/* ---------- Shared helpers ---------- */
function escHtml(s){ return (s||'').replace(/</g,'&lt;'); }
function starsHTML(stars, plus){
  let out = '';
  for (let i=1; i<=5; i++) out += i <= (stars||0) ? '★' : '☆';
  if (plus) out += '+';
  return out;
}
let reviewedAuthorGlossary = {}; // the glossary of whichever guide's author is currently open in the modal
function parseInlineText(text){
  let out = escHtml(text || '');
  out = out.replace(/\[([^\[\]]+)\]\((personnages|monstres|objets|zones|trials)\/([a-zA-Z0-9\-_]+)\)/g, (m,t,cat,id) => `<a href="index#/${cat}/${id}" style="color:var(--jade);" target="_blank">${t}</a>`);
  out = out.replace(/\[\[([^\[\]]+)\]\]/g, (m, term) => {
    const def = reviewedAuthorGlossary[term] || reviewedAuthorGlossary[Object.keys(reviewedAuthorGlossary).find(k => k.toLowerCase() === term.trim().toLowerCase())];
    return def ? `<span class="glossary-term" title="${escHtml(def)}">${term}</span>` : term;
  });
  out = out.replace(/\*\*([^\n*]+)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/_([^\n_]+)_/g, '<em>$1</em>');
  return out.replace(/\n/g, '<br>');
}
function youtubeEmbedUrl(url){
  const m = (url||'').match(/(?:youtu\.be\/|v=)([a-zA-Z0-9_-]{6,})/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : '';
}
function renderBlockPreview(b){
  if (b.type === 'heading') return b.level===2 ? `<h3>${escHtml(b.text)}</h3>` : `<h4>${escHtml(b.text)}</h4>`;
  if (b.type === 'paragraph') return `<div>${parseInlineText(b.text)}</div>`;
  if (b.type === 'image') return `${b.url ? `<img src="${b.url}" style="max-width:100%; border-radius:8px;">` : ''}${b.caption ? `<div style="color:var(--text-dim); font-size:12px; margin-top:4px;">${escHtml(b.caption)}</div>` : ''}`;
  if (b.type === 'callout') return `<div style="padding:10px 14px; border-radius:8px; background:${b.kind==='tip'?'rgba(93,179,255,0.1)':'rgba(239,106,106,0.1)'}; border:1px solid ${b.kind==='tip'?'var(--jade)':'var(--red)'};">${parseInlineText(b.text)}</div>`;
  if (b.type === 'video'){ const embed = youtubeEmbedUrl(b.url); return embed ? `<div style="position:relative; padding-top:56.25%; border-radius:8px; overflow:hidden;"><iframe src="${embed}" style="position:absolute; inset:0; width:100%; height:100%; border:0;"></iframe></div>` : ''; }
  if (b.type === 'table') return `<table style="width:100%; border-collapse:collapse;"><thead><tr>${b.rows[0].cells.map(c=>`<th style="border:1px solid var(--line); padding:6px 10px; background:var(--panel-2);">${escHtml(c)}</th>`).join('')}</tr></thead><tbody>${b.rows.slice(1).map(r=>`<tr>${r.cells.map(c=>`<td style="border:1px solid var(--line); padding:6px 10px;">${escHtml(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  if (b.type === 'itemcard') return `<div style="background:var(--panel-2); border-radius:8px; padding:12px 14px;"><b>${escHtml(b.title)}</b><div style="font-size:12.5px; color:var(--text-dim);">${parseInlineText(b.description||'')}</div><div style="margin-top:8px; display:flex; gap:8px; flex-wrap:wrap;">${(b.items||[]).map(it=>`<span style="font-size:12px; background:var(--panel-3); padding:4px 10px; border-radius:12px;">${it.title}</span>`).join('')}</div></div>`;
  if (b.type === 'ratingcard') return `<div class="preview-ratingcard">
    <div class="preview-ratingcard-head">
      ${b.titleLink && b.titleLink.image ? `<div class="preview-ratingcard-avatar" style="background-image:url('${b.titleLink.image}')"></div>` : ''}
      <div class="preview-ratingcard-headtext">
        <div class="preview-ratingcard-title">${b.titleLink ? `<a href="index#/${b.titleLink.__cat}/${b.titleLink.id}" target="_blank" class="ratingcard-title-link">${escHtml(b.title) || 'Untitled'}</a>` : (escHtml(b.title) || 'Untitled')}</div>
        ${b.role ? `<span class="preview-ratingcard-role">${escHtml(b.role)}</span>` : ''}
      </div>
    </div>
    ${b.description ? `<div class="preview-ratingcard-desc">${parseInlineText(b.description)}</div>` : ''}
    ${(b.stats||[]).length ? `<div class="preview-ratingcard-stats">${b.stats.map(s => `<div class="preview-ratingcard-stat"><span class="stat-label">${escHtml(s.label)}</span><span class="stat-value">${escHtml(s.value)}</span></div>`).join('')}</div>` : ''}
    ${(b.ratings||[]).length ? `<div class="preview-ratingcard-ratings">${b.ratings.map(r => `<div class="preview-ratingcard-rating"><span class="rating-label">${escHtml(r.label)}</span><span class="rating-stars">${starsHTML(r.stars, r.plus)}</span></div>`).join('')}</div>` : ''}
  </div>`;
  if (b.type === 'collapsible') return `<details><summary style="cursor:pointer; color:var(--jade);">${escHtml(b.trigger)}</summary><div style="margin-top:8px;">${parseInlineText(b.text)}</div></details>`;
  if (b.type === 'divider') return `<hr style="border:none; border-top:1px solid var(--line);">`;
  return '';
}
function statusLabel(status){
  return { draft:t('gr_status_draft'), pending:t('gr_status_pending'), approved:t('gr_status_approved'), published:t('gr_status_published'), rejected:t('gr_status_rejected') }[status] || status;
}
function statusBadgeHTML(status){
  return `<span class="myguides-status ${status}">${statusLabel(status)}</span>`;
}
function timeAgo(date){
  if (!date) return '';
  const diffMs = Date.now() - date.getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  return date.toLocaleDateString();
}

/* ---------- Navigation ---------- */
function showView(view){
  document.querySelectorAll('.dash-view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.dash-sidebar-item').forEach(i => i.classList.remove('active'));
  if (view === 'queue'){ document.getElementById('viewQueue').classList.add('active'); document.querySelector('[data-view="queue"]').classList.add('active'); loadQueue(); }
  if (view === 'all'){ document.getElementById('viewAll').classList.add('active'); document.querySelector('[data-view="all"]').classList.add('active'); loadAllGuides(); }
  if (view === 'contributors'){ document.getElementById('viewContributors').classList.add('active'); document.querySelector('[data-view="contributors"]').classList.add('active'); loadContributors(); }
  if (view === 'contribProfile'){ document.getElementById('viewContribProfile').classList.add('active'); }
}
document.querySelectorAll('.dash-sidebar-item').forEach(item => {
  item.addEventListener('click', () => showView(item.dataset.view));
});

/* ---------- Stats ---------- */
async function loadStats(){
  try {
    const [pendingSnap, allSnap, usersSnap] = await Promise.all([
      db.collection('guides').where('status', '==', 'pending').get(),
      db.collection('guides').get(),
      db.collection('users').get(),
    ]);
    let approvedCount = 0, rejectedCount = 0;
    allSnap.docs.forEach(d => {
      const s = d.data().status;
      if (s === 'approved') approvedCount++;
      if (s === 'rejected') rejectedCount++;
    });
    document.getElementById('dashStatsRow').innerHTML = `
      <div class="dash-stat-card"><div class="dash-stat-number">${pendingSnap.size}</div><div class="dash-stat-label">${t('gr_stat_pending')}</div></div>
      <div class="dash-stat-card"><div class="dash-stat-number">${approvedCount}</div><div class="dash-stat-label">${t('gr_stat_approved')}</div></div>
      <div class="dash-stat-card"><div class="dash-stat-number">${rejectedCount}</div><div class="dash-stat-label">${t('gr_stat_rejected')}</div></div>
      <div class="dash-stat-card"><div class="dash-stat-number">${allSnap.size}</div><div class="dash-stat-label">${t('gr_stat_total')}</div></div>
      <div class="dash-stat-card"><div class="dash-stat-number">${usersSnap.size}</div><div class="dash-stat-label">${t('gr_stat_contributors')}</div></div>
    `;
  } catch (e){ console.error('Stats failed:', e); }
}

/* ---------- Shared card renderer ---------- */
function guideCardHTML(id, g){
  return `
    <div class="dash-guide-card${guideHasUnreadNotif(id) ? ' has-update' : ''}" onclick="openGuideModal('${id}')">
      <div class="dash-guide-thumb cover-frame${g.coverImageUrl ? '' : ' no-cover'}">
        ${g.coverImageUrl ? `<img class="cover-fg" src="${g.coverImageUrl}">` : ''}
      </div>
      <div class="dash-guide-body">
        <div class="dash-guide-top">
          <div class="dash-guide-title">${escHtml(g.title || 'Untitled Guide')}</div>
          ${statusBadgeHTML(g.status || 'draft')}
        </div>
      </div>
    </div>
  `;
}

/* ---------- Review Queue ---------- */
async function loadQueue(){
  const grid = document.getElementById('queueGrid');
  grid.innerHTML = `<div class="dash-empty">${t('gr_loading')}</div>`;
  try {
    const snap = await db.collection('guides').where('status', '==', 'pending').orderBy('createdAt', 'asc').get();
    let docs = snap.docs;
    const search = document.getElementById('queueSearch').value.toLowerCase();
    const lang = document.getElementById('queueLangFilter').value;
    docs = docs.filter(d => {
      const g = d.data();
      if (lang && g.language !== lang) return false;
      return !search || (g.title||'').toLowerCase().includes(search);
    });
    if (!docs.length){
      grid.innerHTML = `<div class="dash-empty">${t('gr_nothing_review')}</div>`;
      return;
    }
    grid.innerHTML = docs.map(d => guideCardHTML(d.id, d.data())).join('');
  } catch (e){
    console.error('Queue load failed:', e);
    grid.innerHTML = `<div class="dash-empty">${t('gr_could_not_load_queue')}<br><span style="color:var(--red); font-size:12px; font-family:monospace;">${(e.message||e).toString().replace(/</g,'&lt;')}</span></div>`;
  }
}
document.getElementById('queueSearch').addEventListener('input', loadQueue);
document.getElementById('queueLangFilter').addEventListener('change', loadQueue);

/* ---------- All Guides ---------- */
async function loadAllGuides(){
  const grid = document.getElementById('allGrid');
  grid.innerHTML = `<div class="dash-empty">${t('gr_loading')}</div>`;
  try {
    const snap = await db.collection('guides').orderBy('createdAt', 'desc').get();
    let docs = snap.docs;
    const search = document.getElementById('allSearch').value.toLowerCase();
    const status = document.getElementById('allStatusFilter').value;
    const lang = document.getElementById('allLangFilter').value;
    docs = docs.filter(d => {
      const g = d.data();
      if (status && g.status !== status) return false;
      if (lang && g.language !== lang) return false;
      return !search || (g.title||'').toLowerCase().includes(search);
    });
    if (!docs.length){
      grid.innerHTML = `<div class="dash-empty">${t('gr_no_guides_match')}</div>`;
      return;
    }
    grid.innerHTML = docs.map(d => guideCardHTML(d.id, d.data())).join('');
  } catch (e){
    console.error('All Guides load failed:', e);
    grid.innerHTML = `<div class="dash-empty">${t('gr_could_not_load_guides')}<br><span style="color:var(--red); font-size:12px; font-family:monospace;">${(e.message||e).toString().replace(/</g,'&lt;')}</span></div>`;
  }
}
document.getElementById('allSearch').addEventListener('input', loadAllGuides);
document.getElementById('allStatusFilter').addEventListener('change', loadAllGuides);
document.getElementById('allLangFilter').addEventListener('change', loadAllGuides);

/* ---------- Contributors ---------- */
async function loadContributors(){
  const grid = document.getElementById('contribGrid');
  grid.innerHTML = `<div class="dash-empty">${t('gr_loading')}</div>`;
  try {
    const snap = await db.collection('users').get();
    let docs = snap.docs;
    const search = document.getElementById('contribSearch').value.toLowerCase();
    docs = docs.filter(d => !search || (d.data().username||'').toLowerCase().includes(search));
    if (!docs.length){
      grid.innerHTML = `<div class="dash-empty">${t('gr_no_contributors_match')}</div>`;
      return;
    }
    grid.innerHTML = docs.map(d => {
      const u = d.data();
      return `
        <div class="dash-contrib-card" onclick="showContributorProfile('${d.id}')">
          <div class="dash-contrib-avatar" style="${u.avatarUrl ? `background-image:url('${u.avatarUrl}')` : ''}">${u.avatarUrl ? '' : escHtml((u.username||'?').charAt(0).toUpperCase())}</div>
          <div class="dash-contrib-name">${escHtml(u.username || 'Unknown')}</div>
          <div class="dash-contrib-meta">${escHtml(u.server || '')}</div>
        </div>
      `;
    }).join('');
  } catch (e){
    console.error('Contributors load failed:', e);
    grid.innerHTML = `<div class="dash-empty">${t('gr_could_not_load_contrib')}</div>`;
  }
}
document.getElementById('contribSearch').addEventListener('input', loadContributors);

/* ---------- Shared: count a contributor's guides by status ---------- */
async function getAuthorGuideStats(uid){
  const snap = await db.collection('guides').where('authorId', '==', uid).get();
  const stats = { total: snap.size, approved: 0, rejected: 0, published: 0, pending: 0, draft: 0 };
  snap.docs.forEach(d => {
    const s = d.data().status || 'draft';
    if (stats[s] !== undefined) stats[s]++;
  });
  return stats;
}

async function showContributorProfile(uid){
  showView('contribProfile');
  const card = document.getElementById('contribProfileCard');
  const guidesGrid = document.getElementById('contribGuidesGrid');
  card.innerHTML = `<div class="dash-empty">${t('gr_loading')}</div>`;
  guidesGrid.innerHTML = '';
  try {
    const userDoc = await db.collection('users').doc(uid).get();
    if (!userDoc.exists){ card.innerHTML = `<div class="dash-empty">User not found.</div>`; return; }
    const u = userDoc.data();
    const stats = await getAuthorGuideStats(uid);
    card.innerHTML = `
      <div class="dash-contrib-avatar large" style="${u.avatarUrl ? `background-image:url('${u.avatarUrl}')` : ''}">${u.avatarUrl ? '' : escHtml((u.username||'?').charAt(0).toUpperCase())}</div>
      <div>
        <div class="dash-profile-name">${escHtml(u.username || 'Unknown')}</div>
        <div class="dash-profile-meta">${escHtml(u.server || '')} · ${escHtml(u.language || '')}${u.createdAt ? ' · Joined ' + u.createdAt.toDate().toLocaleDateString() : ''}</div>
        ${u.isAdmin ? '<span class="dash-admin-badge">Admin</span>' : ''}
      </div>
      <div class="author-mini-stats" style="margin-left:auto;">
        <div class="author-mini-stat"><div class="author-mini-stat-num">${stats.published}</div><div class="author-mini-stat-label">${t('gr_status_published')}</div></div>
        <div class="author-mini-stat"><div class="author-mini-stat-num">${stats.approved}</div><div class="author-mini-stat-label">${t('gr_status_approved')}</div></div>
        <div class="author-mini-stat"><div class="author-mini-stat-num">${stats.rejected}</div><div class="author-mini-stat-label">${t('gr_status_rejected')}</div></div>
      </div>
    `;
    const guidesSnap = await db.collection('guides').where('authorId', '==', uid).orderBy('createdAt', 'desc').get();
    guidesGrid.innerHTML = guidesSnap.empty
      ? `<div class="dash-empty">${t('gr_no_guides_yet')}</div>`
      : guidesSnap.docs.map(d => guideCardHTML(d.id, d.data())).join('');

    // Build a combined, chronological activity feed from every guide's activityLog
    let feed = [];
    guidesSnap.docs.forEach(d => {
      const g = d.data();
      (g.activityLog || []).forEach(entry => {
        feed.push({ ...entry, guideTitle: g.title || 'Untitled Guide' });
      });
    });
    feed.sort((a, b) => (b.at ? b.at.toMillis() : 0) - (a.at ? a.at.toMillis() : 0));
    feed = feed.slice(0, 30);
    const feedEl = document.getElementById('contribActivityFeed');
    if (feedEl){
      feedEl.innerHTML = feed.length
        ? feed.map(e => `
            <div class="activity-feed-row">
              <span class="activity-feed-action">${escHtml(e.action)}</span>
              <span class="activity-feed-guide">"${escHtml(e.guideTitle)}"</span>
              <span class="activity-feed-time">${e.at ? timeAgo(e.at.toDate()) : ''}</span>
            </div>
          `).join('')
        : `<div class="dash-empty">${t('gr_no_activity')}</div>`;
    }
  } catch (e){
    console.error('Profile load failed:', e);
    card.innerHTML = `<div class="dash-empty">${t('gr_could_not_load_profile')}</div>`;
  }
}

/* ---------- Guide detail modal ---------- */
let modalGuideId = null;
async function openGuideModal(id){
  modalGuideId = id;
  document.getElementById('guideModal').classList.add('open');
  document.getElementById('modalGuideTitle').textContent = t('gr_loading');
  document.getElementById('modalGuideMeta').textContent = '';
  document.getElementById('modalGuideBody').innerHTML = '';
  document.getElementById('modalGuideActions').innerHTML = '';
  document.getElementById('modalGuideLog').innerHTML = '';
  try {
    const doc = await db.collection('guides').doc(id).get();
    if (!doc.exists){ document.getElementById('modalGuideTitle').textContent = 'Not found'; return; }
    const g = doc.data();
    const authorDoc = await db.collection('users').doc(g.authorId).get();
    reviewedAuthorGlossary = (authorDoc.exists && authorDoc.data().glossary) || {};
    document.getElementById('modalGuideTitle').textContent = g.title || 'Untitled Guide';
    document.getElementById('modalGuideMeta').innerHTML = `by <span class="author-link" onclick="closeGuideModal(); showContributorProfile('${g.authorId}');">${escHtml(g.authorUsername||'Unknown')}</span> · ${escHtml(g.language||'')} ${statusBadgeHTML(g.status||'draft')}`;
    const blocksHTML = (g.blocks || []).map(b => `<div style="margin-bottom:14px;">${renderBlockPreview(b)}</div>`).join('');
    document.getElementById('modalGuideBody').innerHTML = `
      ${g.coverImageUrl ? `<div class="cover-frame preview-cover"><img class="cover-fg" src="${g.coverImageUrl}"></div>` : ''}
      ${(g.tags||[]).length ? `<div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:14px;">${g.tags.map(t=>`<span class="guide-tag-badge">${escHtml(t)}</span>`).join('')}</div>` : ''}
      ${blocksHTML}
    `;

    const actions = document.getElementById('modalGuideActions');
    if (g.status === 'pending'){
      actions.innerHTML = `
        <div class="btn btn-approve" onclick="approveGuide('${id}')">${t('gr_approve')}</div>
        <div class="btn btn-reject" onclick="rejectGuide('${id}')">${t('gr_reject')}</div>
      `;
    } else {
      actions.innerHTML = `<div class="btn" style="color:var(--text-dim);" disabled>${t('gr_no_action')} ("${statusLabel(g.status)}")</div>`;
    }

    const log = g.activityLog || [];
    if (log.length){
      document.getElementById('modalGuideLog').innerHTML = `
        <div style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:.04em; color:var(--gold-bright); margin-bottom:10px;">Activity</div>
        ${log.slice().reverse().map(entry => `
          <div style="font-size:12.5px; color:var(--text-dim); margin-bottom:6px;">
            <b style="color:var(--text);">${escHtml(entry.action)}</b> by ${escHtml(entry.by)} ${entry.at ? '· ' + timeAgo(entry.at.toDate()) : ''}
          </div>
        `).join('')}
      `;
    }
  } catch (e){
    console.error('Modal load failed:', e);
    document.getElementById('modalGuideTitle').textContent = 'Could not load this guide';
  }
}
function closeGuideModal(){
  document.getElementById('guideModal').classList.remove('open');
  modalGuideId = null;
}
document.getElementById('guideModal').addEventListener('click', (e) => {
  if (e.target.id === 'guideModal') closeGuideModal();
});

async function approveGuide(id){
  if (!await customConfirm('Approve this guide? The author will be able to publish it themselves.')) return;
  try {
    const guideDoc = await db.collection('guides').doc(id).get();
    const guideData = guideDoc.data();
    const profile = await getCurrentUserProfile();
    await db.collection('guides').doc(id).update({
      status: 'approved',
      activityLog: firebase.firestore.FieldValue.arrayUnion({
        action: 'Approved',
        by: (profile && profile.username) || 'Admin',
        at: firebase.firestore.Timestamp.now(),
      }),
    });
    try {
      await db.collection('notifUser').add({
        toUserId: guideData.authorId,
        type: 'guide_approved',
        guideId: id,
        guideTitle: guideData.title || 'Untitled Guide',
        read: false,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    } catch (e){ console.error('Could not create author notification (non-blocking):', e); }
    closeGuideModal();
    loadQueue();
    loadStats();
  } catch (e){
    customAlert('Could not approve: ' + (e.message || 'unknown error'));
  }
}
async function rejectGuide(id){
  if (!await customConfirm('Reject this guide? The author will be able to edit and resubmit it.')) return;
  try {
    const guideDoc = await db.collection('guides').doc(id).get();
    const guideData = guideDoc.data();
    const profile = await getCurrentUserProfile();
    await db.collection('guides').doc(id).update({
      status: 'rejected',
      activityLog: firebase.firestore.FieldValue.arrayUnion({
        action: 'Rejected',
        by: (profile && profile.username) || 'Admin',
        at: firebase.firestore.Timestamp.now(),
      }),
    });
    try {
      await db.collection('notifUser').add({
        toUserId: guideData.authorId,
        type: 'guide_rejected',
        guideId: id,
        guideTitle: guideData.title || 'Untitled Guide',
        read: false,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    } catch (e){ console.error('Could not create author notification (non-blocking):', e); }
    closeGuideModal();
    loadQueue();
    loadStats();
  } catch (e){
    customAlert('Could not reject: ' + (e.message || 'unknown error'));
  }
}

/* ---------- Init after admin check passes ---------- */
function renderDashNotifPanel(){ /* no longer used on this page, kept as a harmless no-op in case anything still calls it */ }

auth.onAuthStateChanged(async (user) => {
  if (!user) return;
  const profile = await getCurrentUserProfile();
  if (!profile || !profile.isAdmin) return;
  applyLanguage(profile.language);
  loadStats();
  loadQueue();

  const openGuideId = new URLSearchParams(location.search).get('openGuide');
  if (openGuideId) openGuideModal(openGuideId);
});
