/* ---------- Shared notification bell (author + admin) ---------- */

function ensureNotifDropdown(){
  if (document.getElementById('notifDropdown')) return;
  const wrap = document.createElement('div');
  wrap.id = 'notifDropdown';
  wrap.className = 'notif-dropdown';
  wrap.innerHTML = `<div id="notifDropdownList" class="notif-empty">No notifications yet.</div>`;
  document.body.appendChild(wrap);
}

function notifTimeAgo(date){
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

function notifIcon(type){
  if (type === 'new_guide') return '📝';
  if (type === 'guide_approved') return '✅';
  if (type === 'guide_rejected') return '❌';
  return '🔔';
}
function notifText(n){
  if (n.type === 'new_guide') return `New guide submitted: "${n.guideTitle}"`;
  if (n.type === 'guide_approved') return `Your guide "${n.guideTitle}" was approved`;
  if (n.type === 'guide_rejected') return `Your guide "${n.guideTitle}" was rejected`;
  return n.guideTitle || '';
}

let notifCache = [];
let notifOnClickGuide = null; // set by the host page: function(guideId, notif)
let notifCollectionName = 'notifUser';
let notifUnsubscribe = null;

function renderNotifBell(){
  const unreadCount = notifCache.filter(n => !n.read).length;
  const badge = document.getElementById('notifBadge');
  if (badge){
    badge.textContent = unreadCount > 9 ? '9+' : unreadCount;
    badge.style.display = unreadCount ? 'flex' : 'none';
  }
  renderNotifDropdownList();
}

function renderNotifDropdownList(){
  ensureNotifDropdown();
  const list = document.getElementById('notifDropdownList');
  if (!notifCache.length){
    list.className = 'notif-empty';
    list.textContent = 'No notifications yet.';
    return;
  }
  list.className = '';
  list.innerHTML = notifCache.map(n => `
    <div class="notif-row ${n.read ? '' : 'unread'}" onclick="handleNotifClick('${n.id}', '${n.guideId}')">
      <span class="notif-icon">${notifIcon(n.type)}</span>
      <div class="notif-body">
        <div class="notif-text">${(notifText(n)).replace(/</g,'&lt;')}</div>
        <div class="notif-time">${n.createdAt ? notifTimeAgo(n.createdAt.toDate()) : ''}</div>
      </div>
    </div>
  `).join('');
}

async function handleNotifClick(notifId, guideId){
  try {
    await db.collection(notifCollectionName).doc(notifId).update({ read: true });
    // no need to update notifCache/re-render manually: the live listener will do it
  } catch (e){ console.error('Could not mark notification as read:', e); }
  toggleNotifDropdown(false);
  if (notifOnClickGuide) notifOnClickGuide(guideId, notifId);
}

function toggleNotifDropdown(force){
  ensureNotifDropdown();
  const dropdown = document.getElementById('notifDropdown');
  const bellBtn = document.getElementById('notifBellBtn');
  const open = force !== undefined ? force : !dropdown.classList.contains('open');
  dropdown.classList.toggle('open', open);
  if (open && bellBtn){
    const rect = bellBtn.getBoundingClientRect();
    dropdown.style.top = (rect.bottom + 8) + 'px';
    dropdown.style.right = (window.innerWidth - rect.right) + 'px';
  }
}

document.addEventListener('click', (e) => {
  const dropdown = document.getElementById('notifDropdown');
  const bellBtn = document.getElementById('notifBellBtn');
  if (!dropdown || !dropdown.classList.contains('open')) return;
  if (dropdown.contains(e.target) || (bellBtn && bellBtn.contains(e.target))) return;
  toggleNotifDropdown(false);
});

/**
 * Call this once, after the bell icon exists in the DOM and the user is authenticated.
 * mode: 'admin' or 'user'. onClickGuide(guideId, notifId): called when a notification is clicked.
 * Returns a promise that resolves once the FIRST batch of notifications has loaded,
 * then keeps listening live afterward (no page refresh ever needed again).
 */
function initNotificationBell(mode, onClickGuide){
  return new Promise((resolve) => {
    notifOnClickGuide = onClickGuide || null;
    notifCollectionName = mode === 'admin' ? 'notifAdmin' : 'notifUser';

    const bellBtn = document.getElementById('notifBellBtn');
    if (bellBtn && !bellBtn.dataset.notifBound){
      bellBtn.dataset.notifBound = '1';
      bellBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleNotifDropdown();
      });
    }

    if (notifUnsubscribe) notifUnsubscribe();

    let query = mode === 'admin'
      ? db.collection('notifAdmin')
      : db.collection('notifUser').where('toUserId', '==', auth.currentUser.uid);
    query = query.orderBy('createdAt', 'desc').limit(30);

    let firstLoad = true;
    notifUnsubscribe = query.onSnapshot((snap) => {
      notifCache = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      renderNotifBell();
      if (firstLoad){ firstLoad = false; resolve(); }
    }, (e) => {
      console.error('Could not load notifications:', e);
      if (firstLoad){ firstLoad = false; resolve(); }
    });
  });
}

/**
 * Returns true if there's an unread notification about this specific guide,
 * used to highlight its card. Call after loadNotifications() has run once.
 */
function guideHasUnreadNotif(guideId){
  return notifCache.some(n => n.guideId === guideId && !n.read);
}
