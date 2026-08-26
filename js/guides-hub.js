// Prevents the dashboard from flashing briefly during registration's transient sign-in
let isRegistering = false;

// Generic helper: disables a button and shows a spinner+text while an async action runs
async function withLoading(btn, loadingText, fn){
  const originalHTML = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = `<span class="btn-spinner"></span> ${loadingText}`;
  try {
    await fn();
  } finally {
    btn.disabled = false;
    btn.innerHTML = originalHTML;
  }
}

function showError(msg){
  const el = document.getElementById('authError');
  el.textContent = msg;
  el.classList.add('show');
  document.getElementById('authSuccess').classList.remove('show');
}
function showSuccess(msg){
  const el = document.getElementById('authSuccess');
  el.textContent = msg;
  el.classList.add('show');
  document.getElementById('authError').classList.remove('show');
}
function clearMessages(){
  document.getElementById('authError').classList.remove('show');
  document.getElementById('authSuccess').classList.remove('show');
}

document.getElementById('tabLogin').addEventListener('click', () => {
  document.getElementById('tabLogin').classList.add('active');
  document.getElementById('tabRegister').classList.remove('active');
  document.getElementById('loginView').classList.add('active');
  document.getElementById('registerView').classList.remove('active');
  clearMessages();
});
document.getElementById('tabRegister').addEventListener('click', () => {
  document.getElementById('tabRegister').classList.add('active');
  document.getElementById('tabLogin').classList.remove('active');
  document.getElementById('registerView').classList.add('active');
  document.getElementById('loginView').classList.remove('active');
  clearMessages();
});
document.getElementById('regServer').addEventListener('change', (e) => {
  document.getElementById('customServerField').style.display = e.target.value === 'Other…' ? 'block' : 'none';
});
document.getElementById('editServer').addEventListener('change', (e) => {
  document.getElementById('editCustomServerField').style.display = e.target.value === 'Other…' ? 'block' : 'none';
});

document.getElementById('loginBtn').addEventListener('click', async () => {
  clearMessages();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  if (!email || !password){ showError('Please fill in both fields.'); return; }
  await withLoading(document.getElementById('loginBtn'), 'Logging in…', async () => {
    try {
      await loginAccount(email, password);
    } catch (e){
      showError(e.message.replace('Firebase: ', '').replace(/\(auth\/.*\)\.?/, '').trim() || 'Login failed.');
    }
  });
});

document.getElementById('registerBtn').addEventListener('click', async () => {
  clearMessages();
  const password = document.getElementById('regPassword').value;
  const confirm = document.getElementById('regPasswordConfirm').value;
  if (password !== confirm){
    showError('Passwords do not match.');
    return;
  }
  await withLoading(document.getElementById('registerBtn'), 'Creating account…', async () => {
    isRegistering = true;
    try {
      await registerAccount({
        username: document.getElementById('regUsername').value,
        password: password,
        email: document.getElementById('regEmail').value,
        server: document.getElementById('regServer').value,
        customServer: document.getElementById('regCustomServer').value,
        language: document.getElementById('regLanguage').value,
      });
      // Switch to the Login tab and show the "check your email" message there
      document.getElementById('tabLogin').click();
      showSuccess('Account created! Check your email (including your spam/junk folder) to verify your account, then log in below.');
    } catch (e){
      showError(e.message.replace('Firebase: ', '').replace(/\(auth\/.*\)\.?/, '').trim() || 'Registration failed.');
    } finally {
      isRegistering = false;
    }
  });
});

document.getElementById('forgotPasswordLink').addEventListener('click', async () => {
  const email = prompt('Enter the email linked to your account:');
  if (!email) return;
  const link = document.getElementById('forgotPasswordLink');
  const original = link.textContent;
  link.textContent = 'Sending…';
  try {
    await sendPasswordReset(email);
    showSuccess('If that email is linked to an account, a reset link has been sent.');
  } catch (e){
    showError(e.message.replace('Firebase: ', '').replace(/\(auth\/.*\)\.?/, '').trim() || 'Could not send reset email.');
  } finally {
    link.textContent = original;
  }
});

document.getElementById('logoutBtn').addEventListener('click', () => logoutAccount());
document.getElementById('resendVerifyLink').addEventListener('click', async () => {
  await resendVerificationEmail();
  customAlert('Verification email sent again.');
});
document.getElementById('refreshVerifyLink').addEventListener('click', async () => {
  const verified = await refreshEmailVerifiedStatus();
  if (verified) renderDashboard();
  else customAlert("Still not verified, check your inbox (and spam folder).");
});

// ---------- Edit Profile modal ----------
document.getElementById('editProfileToggle').addEventListener('click', () => {
  document.getElementById('editProfileModal').classList.add('open');
});
document.getElementById('closeEditModal').addEventListener('click', () => {
  document.getElementById('editProfileModal').classList.remove('open');
});
document.getElementById('editProfileModal').addEventListener('click', (e) => {
  if (e.target.id === 'editProfileModal') document.getElementById('editProfileModal').classList.remove('open');
});

function showProfileError(msg){
  const el = document.getElementById('profileError');
  el.textContent = msg;
  el.classList.add('show');
  document.getElementById('profileSuccess').classList.remove('show');
}
function showProfileSuccess(msg){
  const el = document.getElementById('profileSuccess');
  el.textContent = msg;
  el.classList.add('show');
  document.getElementById('profileError').classList.remove('show');
}

// ---------- Image cropper ----------
let cropScale = 1, cropBaseScale = 1, cropOffsetX = 0, cropOffsetY = 0;
let cropNaturalW = 0, cropNaturalH = 0;
let cropDragging = false, cropDragStartX = 0, cropDragStartY = 0, cropStartOffsetX = 0, cropStartOffsetY = 0;
const CROP_STAGE_SIZE = 280;

document.getElementById('avatarFileInput').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    const img = document.getElementById('cropImage');
    img.onload = () => {
      cropNaturalW = img.naturalWidth;
      cropNaturalH = img.naturalHeight;
      cropBaseScale = Math.max(CROP_STAGE_SIZE / cropNaturalW, CROP_STAGE_SIZE / cropNaturalH);
      cropScale = 1;
      cropOffsetX = 0;
      cropOffsetY = 0;
      document.getElementById('cropZoom').value = 100;
      applyCropTransform();
    };
    img.src = ev.target.result;
    document.getElementById('cropModal').classList.add('open');
  };
  reader.readAsDataURL(file);
  e.target.value = ''; // allow picking the same file again later
});

function applyCropTransform(){
  const img = document.getElementById('cropImage');
  const w = cropNaturalW * cropBaseScale * cropScale;
  const h = cropNaturalH * cropBaseScale * cropScale;
  const maxOffsetX = Math.max(0, (w - CROP_STAGE_SIZE) / 2);
  const maxOffsetY = Math.max(0, (h - CROP_STAGE_SIZE) / 2);
  cropOffsetX = Math.max(-maxOffsetX, Math.min(maxOffsetX, cropOffsetX));
  cropOffsetY = Math.max(-maxOffsetY, Math.min(maxOffsetY, cropOffsetY));
  img.style.width = w + 'px';
  img.style.height = h + 'px';
  img.style.marginLeft = cropOffsetX + 'px';
  img.style.marginTop = cropOffsetY + 'px';
}

document.getElementById('cropZoom').addEventListener('input', (e) => {
  cropScale = e.target.value / 100;
  applyCropTransform();
});

const cropStage = document.getElementById('cropStage');
cropStage.addEventListener('pointerdown', (e) => {
  cropDragging = true;
  cropStage.classList.add('dragging');
  cropDragStartX = e.clientX;
  cropDragStartY = e.clientY;
  cropStartOffsetX = cropOffsetX;
  cropStartOffsetY = cropOffsetY;
});
window.addEventListener('pointermove', (e) => {
  if (!cropDragging) return;
  cropOffsetX = cropStartOffsetX + (e.clientX - cropDragStartX);
  cropOffsetY = cropStartOffsetY + (e.clientY - cropDragStartY);
  applyCropTransform();
});
window.addEventListener('pointerup', () => {
  cropDragging = false;
  cropStage.classList.remove('dragging');
});

document.getElementById('closeCropModal').addEventListener('click', () => {
  document.getElementById('cropModal').classList.remove('open');
});

document.getElementById('confirmCropBtn').addEventListener('click', async () => {
  const btn = document.getElementById('confirmCropBtn');
  await withLoading(btn, 'Uploading…', async () => {
    const status = document.getElementById('avatarUploadStatus');
    try {
      // Render exactly what's visible in the 280x280 stage onto a canvas
      const canvas = document.createElement('canvas');
      canvas.width = CROP_STAGE_SIZE;
      canvas.height = CROP_STAGE_SIZE;
      const ctx = canvas.getContext('2d');
      const img = document.getElementById('cropImage');
      const w = cropNaturalW * cropBaseScale * cropScale;
      const h = cropNaturalH * cropBaseScale * cropScale;
      const drawX = (CROP_STAGE_SIZE - w) / 2 + cropOffsetX;
      const drawY = (CROP_STAGE_SIZE - h) / 2 + cropOffsetY;
      ctx.drawImage(img, drawX, drawY, w, h);

      const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', 0.92));
      const file = new File([blob], 'avatar.jpg', { type: 'image/jpeg' });

      const url = await uploadAvatar(file);
      document.getElementById('editAvatarUrl').value = url;
      status.textContent = `✅ Photo ready, click Save Profile to apply.`;
      document.getElementById('cropModal').classList.remove('open');
    } catch (err){
      status.textContent = err.message || 'Upload failed.';
    }
  });
});


document.getElementById('saveProfileBtn').addEventListener('click', async () => {
  await withLoading(document.getElementById('saveProfileBtn'), 'Saving…', async () => {
    try {
      const serverSelectVal = document.getElementById('editServer').value;
      const finalServer = serverSelectVal === 'Other…'
        ? (document.getElementById('editCustomServer').value.trim() || 'Other')
        : serverSelectVal;
      await updateProfileInfo({
        username: document.getElementById('editUsername').value,
        avatarUrl: document.getElementById('editAvatarUrl').value.trim(),
        server: finalServer,
        language: document.getElementById('editLanguage').value,
      });
      showProfileSuccess('Profile updated.');
      renderDashboard();
    } catch (e){
      showProfileError(e.message || 'Could not update profile.');
    }
  });
});

document.getElementById('editLanguage').addEventListener('change', (e) => {
  applyLanguage(e.target.value); // instant preview, saved permanently on "Save Profile"
});

document.getElementById('saveEmailBtn').addEventListener('click', async () => {
  const currentPassword = document.getElementById('emailChangePassword').value;
  const newEmail = document.getElementById('newEmail').value.trim();
  if (!currentPassword || !newEmail){ showProfileError('Please fill in both fields.'); return; }
  await withLoading(document.getElementById('saveEmailBtn'), 'Updating…', async () => {
    try {
      await changeEmail(currentPassword, newEmail);
      showProfileSuccess('Verification link sent to your new email. Your account keeps using the old email (and stays verified) until you click that link.');
      document.getElementById('emailChangePassword').value = '';
      document.getElementById('newEmail').value = '';
    } catch (e){
      showProfileError(e.message.replace('Firebase: ', '').replace(/\(auth\/.*\)\.?/, '').trim() || 'Could not update email.');
    }
  });
});

document.getElementById('savePasswordBtn').addEventListener('click', async () => {
  const currentPassword = document.getElementById('passwordChangeCurrent').value;
  const newPassword = document.getElementById('newPassword').value;
  if (!currentPassword || !newPassword){ showProfileError('Please fill in both fields.'); return; }
  await withLoading(document.getElementById('savePasswordBtn'), 'Updating…', async () => {
    try {
      await changePassword(currentPassword, newPassword);
      showProfileSuccess('Password updated.');
      document.getElementById('passwordChangeCurrent').value = '';
      document.getElementById('newPassword').value = '';
    } catch (e){
      showProfileError(e.message.replace('Firebase: ', '').replace(/\(auth\/.*\)\.?/, '').trim() || 'Could not update password.');
    }
  });
});

// ---------- My Guides panel ----------
function ensurePublishDialog(){
  if (document.getElementById('publishDialog')) return;
  const div = document.createElement('div');
  div.id = 'publishDialog';
  div.className = 'itemcard-modal';
  div.innerHTML = `
    <div class="custom-dialog-box" style="max-width:380px;">
      <div class="publish-panel-title">Ready to publish</div>
      <p class="publish-panel-text">Choose when this guide should go live.</p>
      <div style="display:flex; gap:10px; justify-content:center;">
        <div class="btn btn-primary" id="publishDialogNow">Publish Now</div>
        <div class="btn" id="publishDialogSchedule">Schedule…</div>
      </div>
      <div id="publishDialogScheduleRow" style="display:none; margin-top:14px; gap:10px; align-items:center; justify-content:center;">
        <input type="datetime-local" id="publishDialogDate">
        <div class="btn btn-primary" id="publishDialogConfirmSchedule">Confirm</div>
      </div>
      <div class="btn" id="publishDialogCancel" style="margin-top:14px; width:100%; justify-content:center;">Cancel</div>
    </div>
  `;
  document.body.appendChild(div);
  div.addEventListener('click', (e) => { if (e.target === div) closePublishDialog(); });
}
function closePublishDialog(){
  document.getElementById('publishDialog').classList.remove('open');
  document.getElementById('publishDialogScheduleRow').style.display = 'none';
}
function openPublishDialog(id){
  ensurePublishDialog();
  document.getElementById('publishDialog').classList.add('open');

  document.getElementById('publishDialogCancel').onclick = closePublishDialog;
  document.getElementById('publishDialogSchedule').onclick = () => {
    document.getElementById('publishDialogScheduleRow').style.display = 'flex';
  };
  document.getElementById('publishDialogNow').onclick = async () => {
    try {
      const profile = await getCurrentUserProfile();
      await db.collection('guides').doc(id).update({
        status: 'published',
        scheduledPublishAt: firebase.firestore.FieldValue.delete(),
        activityLog: firebase.firestore.FieldValue.arrayUnion({
          action: 'Published',
          by: (profile && profile.username) || auth.currentUser.email,
          at: firebase.firestore.Timestamp.now(),
        }),
      });
      closePublishDialog();
      renderMyGuides();
    } catch (e){
      customAlert('Could not publish: ' + (e.message || 'unknown error'));
    }
  };
  document.getElementById('publishDialogConfirmSchedule').onclick = async () => {
    const val = document.getElementById('publishDialogDate').value;
    if (!val){ customAlert('Pick a date and time first.'); return; }
    const scheduledDate = new Date(val);
    if (scheduledDate <= new Date()){ customAlert('Pick a time in the future.'); return; }
    try {
      const profile = await getCurrentUserProfile();
      await db.collection('guides').doc(id).update({
        status: 'published',
        scheduledPublishAt: firebase.firestore.Timestamp.fromDate(scheduledDate),
        activityLog: firebase.firestore.FieldValue.arrayUnion({
          action: `Scheduled for ${scheduledDate.toLocaleString()}`,
          by: (profile && profile.username) || auth.currentUser.email,
          at: firebase.firestore.Timestamp.now(),
        }),
      });
      closePublishDialog();
      renderMyGuides();
    } catch (e){
      customAlert('Could not schedule: ' + (e.message || 'unknown error'));
    }
  };
}

async function deleteMyGuide(id, el){
  if (!await customConfirm('Delete this guide? This cannot be undone.')) return;
  try {
    await db.collection('guides').doc(id).delete();
    el.closest('.myguides-card').remove();
  } catch (e){
    customAlert('Could not delete: ' + (e.message || 'unknown error'));
  }
}

function statusLabel(status){
  return { draft:t('gr_status_draft'), pending:t('gr_status_pending'), approved:t('gr_status_approved'), published:t('gr_status_published'), rejected:t('gr_status_rejected') }[status] || status;
}
async function renderMyGuides(){
  const list = document.getElementById('myGuidesList');
  try {
    const snap = await db.collection('guides')
      .where('authorId', '==', auth.currentUser.uid)
      .orderBy('createdAt', 'desc')
      .get();
    if (snap.empty){
      list.innerHTML = `<div class="myguides-empty">You haven't created any guides yet, click <strong>+ Create a Guide</strong> to get started.</div>`;
      return;
    }
    list.innerHTML = snap.docs.map(doc => {
      const g = doc.data();
      const status = g.status || 'pending';
      const dateStr = g.updatedAt ? g.updatedAt.toDate().toLocaleDateString() : '';
      return `
        <div class="myguides-card${guideHasUnreadNotif(doc.id) ? ' has-update' : ''}">
          <div class="myguides-card-thumb cover-frame${g.coverImageUrl ? '' : ' no-cover'}">
            ${g.coverImageUrl ? `<img class="cover-fg" src="${g.coverImageUrl}">` : ''}
          </div>
          <div class="myguides-card-body">
            <div class="myguides-card-top">
              <div class="myguides-row-title">${(g.title || 'Untitled Guide').replace(/</g,'&lt;')}</div>
              <div class="myguides-status ${status}">${statusLabel(status)}</div>
            </div>
            <div class="myguides-card-meta">${g.language ? g.language + ' · ' : ''}${dateStr ? 'Updated ' + dateStr : ''}</div>
            <div class="myguides-card-actions">
              ${status === 'published' ? `<a href="index#/guides/${doc.id}" class="myguides-action-btn" target="_blank">View</a>` : ''}
              ${status === 'approved' ? `<div class="myguides-action-btn primary" onclick="openPublishDialog('${doc.id}')">Publish</div>` : ''}
              ${status !== 'pending' ? `<a href="guide-create?id=${doc.id}" class="myguides-action-btn">Edit</a>` : ''}
              <div class="myguides-action-btn danger" onclick="deleteMyGuide('${doc.id}', this)">Delete</div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  } catch (e){
    console.error('My Guides query failed (you may need to create a Firestore index):', e);
    list.innerHTML = `<div class="myguides-empty">Could not load your guides right now.</div>`;
  }
}

// ---------- Dashboard render ----------
async function renderDashboard(){
  document.getElementById('loadingView').style.display = 'none';
  document.getElementById('loggedOutView').classList.remove('active');
  document.getElementById('dashboardView').classList.add('active');

  const profile = await getCurrentUserProfile();
  const user = auth.currentUser;
  const displayName = (profile && profile.username) || user.email;

  const avatarEl = document.getElementById('profileAvatar');
  if (profile && profile.avatarUrl){
    avatarEl.style.backgroundImage = `url('${profile.avatarUrl}')`;
    avatarEl.textContent = '';
  } else {
    avatarEl.style.backgroundImage = 'none';
    avatarEl.textContent = displayName.charAt(0).toUpperCase();
  }
  document.getElementById('profileUsername').textContent = displayName;
  document.getElementById('profileMeta').textContent = profile ? `${profile.server} · ${profile.language}` : '';
  document.getElementById('aboutServer').textContent = profile ? profile.server : '...';
  document.getElementById('aboutLanguage').textContent = profile ? profile.language : '...';
  if (profile && profile.createdAt){
    document.getElementById('aboutJoined').textContent = 'Joined ' + profile.createdAt.toDate().toLocaleDateString();
  }

  const verified = user.emailVerified;
  document.getElementById('verifyBanner').style.display = verified ? 'none' : 'block';
  document.getElementById('createGuideBtn').style.pointerEvents = verified ? 'auto' : 'none';
  document.getElementById('createGuideBtn').style.opacity = verified ? '1' : '.5';

  if (profile && profile.isAdmin){
    document.getElementById('adminReviewBtn').style.display = 'inline-flex';
    document.getElementById('adminReviewBtn').onclick = () => { location.href = 'guide-review'; };
  }

  if (profile){
    document.getElementById('editUsername').value = profile.username || '';
    document.getElementById('editAvatarUrl').value = profile.avatarUrl || '';
    const serverSelect = document.getElementById('editServer');
    const knownServer = profile.server && Array.from(serverSelect.options).some(o => o.value === profile.server);
    if (knownServer){
      serverSelect.value = profile.server;
      document.getElementById('editCustomServerField').style.display = 'none';
    } else {
      serverSelect.value = 'Other…';
      document.getElementById('editCustomServer').value = profile.server || '';
      document.getElementById('editCustomServerField').style.display = 'block';
    }
    const lang = profile.language && AVAILABLE_LANGUAGES.includes(profile.language) ? profile.language : 'English';
    document.getElementById('editLanguage').value = lang;
    applyLanguage(lang);
  }

  await initNotificationBell(profile && profile.isAdmin ? 'admin' : 'user', (guideId) => {
    if (profile && profile.isAdmin){
      location.href = `guide-review?openGuide=${guideId}`;
    } else {
      location.href = `guide-create?id=${guideId}`;
    }
  });
  renderMyGuides();
}

auth.onAuthStateChanged((user) => {
  if (isRegistering) return; // ignore the transient sign-in/out that happens during registration
  document.getElementById('loadingView').style.display = 'none';
  if (user){
    renderDashboard();
  } else {
    document.getElementById('dashboardView').classList.remove('active');
    document.getElementById('loggedOutView').classList.add('active');
  }
});

/* ---------- Tabs (My Guides / Glossary) ---------- */
function escapeHtml(s){ return (s || '').toString().replace(/</g, '&lt;'); }
document.querySelectorAll('.tab-item[data-view]').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab-item[data-view]').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const view = tab.dataset.view;
    document.getElementById('guidesView').style.display = view === 'guides' ? 'grid' : 'none';
    document.getElementById('glossaryView').style.display = view === 'glossary' ? 'block' : 'none';
    if (view === 'glossary') renderGlossary();
  });
});

/* ---------- Glossary (stored on the user's own profile: users/{uid}.glossary) ---------- */
async function renderGlossary(){
  const list = document.getElementById('glossaryList');
  list.innerHTML = `<div class="myguides-empty">${t('gr_loading') || 'Loading…'}</div>`;
  try {
    const profile = await getCurrentUserProfile();
    const glossary = (profile && profile.glossary) || {};
    const terms = Object.keys(glossary).sort((a, b) => a.localeCompare(b));
    if (!terms.length){
      list.innerHTML = `<div class="myguides-empty" data-i18n="glossary_empty">No terms yet. Add one above, then use [[Term]] anywhere in your guides.</div>`;
      applyLanguage(currentLang);
      return;
    }
    list.innerHTML = terms.map(term => `
      <div class="glossary-row">
        <div class="glossary-row-term">${escapeHtml(term)}</div>
        <div class="glossary-row-def">${escapeHtml(glossary[term])}</div>
        <div class="glossary-row-delete" onclick="deleteGlossaryTerm('${term.replace(/'/g, "\\'")}')">✕</div>
      </div>
    `).join('');
  } catch (e){
    console.error('Could not load glossary:', e);
    list.innerHTML = `<div class="myguides-empty">Could not load your glossary.</div>`;
  }
}

document.getElementById('glossaryAddBtn').addEventListener('click', async () => {
  const termInput = document.getElementById('glossaryNewTerm');
  const defInput = document.getElementById('glossaryNewDef');
  const term = termInput.value.trim();
  const def = defInput.value.trim();
  if (!term || !def){ customAlert('Fill in both the term and the definition.'); return; }
  try {
    await db.collection('users').doc(auth.currentUser.uid).update({
      [`glossary.${term}`]: def,
    });
    termInput.value = '';
    defInput.value = '';
    renderGlossary();
  } catch (e){
    customAlert('Could not save this term: ' + (e.message || 'unknown error'));
  }
});

async function deleteGlossaryTerm(term){
  if (!await customConfirm(`Delete the term "${term}"?`)) return;
  try {
    await db.collection('users').doc(auth.currentUser.uid).update({
      [`glossary.${term}`]: firebase.firestore.FieldValue.delete(),
    });
    renderGlossary();
  } catch (e){
    customAlert('Could not delete this term: ' + (e.message || 'unknown error'));
  }
}
