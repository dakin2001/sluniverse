function showView(id){
  document.querySelectorAll('.reset-view').forEach(v => v.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
function showResetError(msg){
  const el = document.getElementById('resetError');
  el.textContent = msg;
  el.classList.add('show');
}

const params = new URLSearchParams(window.location.search);
const mode = params.get('mode');
const oobCode = params.get('oobCode');

(async () => {
  if (mode !== 'resetPassword' || !oobCode){
    showView('invalidView');
    return;
  }
  try {
    const email = await verifyResetCode(oobCode);
    document.getElementById('resetForEmail').textContent = `Resetting password for ${email}`;
    showView('formView');
  } catch (e){
    showView('invalidView');
  }
})();

document.getElementById('submitResetBtn').addEventListener('click', async () => {
  document.getElementById('resetError').classList.remove('show');
  const pass = document.getElementById('newPass').value;
  const confirm = document.getElementById('newPassConfirm').value;
  if (pass !== confirm){
    showResetError('Passwords do not match.');
    return;
  }
  try {
    await confirmReset(oobCode, pass);
    showView('doneView');
  } catch (e){
    showResetError(e.message.replace('Firebase: ', '').replace(/\(auth\/.*\)\.?/, '').trim() || 'Could not reset password.');
  }
});
