/* ---------- Admin login gate logic (shared across admin pages) ---------- */

document.getElementById('adminGateLoginBtn')?.addEventListener('click', async () => {
  const errEl = document.getElementById('adminGateError');
  errEl.style.display = 'none';
  const email = document.getElementById('adminGateEmail').value.trim();
  const password = document.getElementById('adminGatePassword').value;
  if (!email || !password){
    errEl.textContent = 'Please fill in both fields.';
    errEl.style.display = 'block';
    return;
  }
  try {
    await loginAccount(email, password);
  } catch (e){
    errEl.textContent = e.message.replace('Firebase: ', '').replace(/\(auth\/.*\)\.?/, '').trim() || 'Login failed.';
    errEl.style.display = 'block';
  }
});

document.getElementById('adminGateLogoutBtn')?.addEventListener('click', () => logoutAccount());

document.getElementById('editorGearBtn')?.addEventListener('click', () => {
  document.getElementById('editorSettingsModal').classList.add('open');
});
document.getElementById('closeEditorSettingsModal')?.addEventListener('click', () => {
  document.getElementById('editorSettingsModal').classList.remove('open');
});
document.getElementById('editorSettingsModal')?.addEventListener('click', (e) => {
  if (e.target.id === 'editorSettingsModal') document.getElementById('editorSettingsModal').classList.remove('open');
});
document.getElementById('editorLogoutBtn')?.addEventListener('click', () => logoutAccount());

function showEditorSettingsError(msg){
  const el = document.getElementById('editorSettingsError');
  el.textContent = msg;
  el.style.display = 'block';
  document.getElementById('editorSettingsSuccess').style.display = 'none';
}
function showEditorSettingsSuccess(msg){
  const el = document.getElementById('editorSettingsSuccess');
  el.textContent = msg;
  el.style.display = 'block';
  document.getElementById('editorSettingsError').style.display = 'none';
}

document.getElementById('editorSaveEmailBtn')?.addEventListener('click', async () => {
  const currentPassword = document.getElementById('editorEmailChangePassword').value;
  const newEmail = document.getElementById('editorNewEmail').value.trim();
  if (!currentPassword || !newEmail){ showEditorSettingsError('Please fill in both fields.'); return; }
  try {
    await changeEmail(currentPassword, newEmail);
    showEditorSettingsSuccess('Verification link sent to your new email. Your account keeps using the old email until you click that link.');
    document.getElementById('editorEmailChangePassword').value = '';
    document.getElementById('editorNewEmail').value = '';
  } catch (e){
    showEditorSettingsError(e.message.replace('Firebase: ', '').replace(/\(auth\/.*\)\.?/, '').trim() || 'Could not update email.');
  }
});

document.getElementById('editorSavePasswordBtn')?.addEventListener('click', async () => {
  const currentPassword = document.getElementById('editorPasswordChangeCurrent').value;
  const newPassword = document.getElementById('editorNewPassword').value;
  if (!currentPassword || !newPassword){ showEditorSettingsError('Please fill in both fields.'); return; }
  try {
    await changePassword(currentPassword, newPassword);
    showEditorSettingsSuccess('Password updated.');
    document.getElementById('editorPasswordChangeCurrent').value = '';
    document.getElementById('editorNewPassword').value = '';
  } catch (e){
    showEditorSettingsError(e.message.replace('Firebase: ', '').replace(/\(auth\/.*\)\.?/, '').trim() || 'Could not update password.');
  }
});

auth.onAuthStateChanged(async (user) => {
  document.getElementById('adminGateLoading').style.display = 'none';
  document.getElementById('adminGateForm').style.display = 'none';
  document.getElementById('adminGateDenied').style.display = 'none';

  if (!user){
    document.getElementById('adminGateForm').style.display = 'block';
    return;
  }
  const profile = await getCurrentUserProfile();
  if (!profile || !profile.isAdmin){
    document.getElementById('adminGateDenied').style.display = 'block';
    return;
  }
  document.getElementById('adminGate').style.display = 'none';
});
