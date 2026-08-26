/* ---------- Custom confirm/alert dialogs (replaces native browser confirm/alert everywhere) ---------- */

function ensureDialogRoot(){
  if (document.getElementById('customDialogRoot')) return;
  const root = document.createElement('div');
  root.id = 'customDialogRoot';
  root.className = 'itemcard-modal';
  root.innerHTML = `
    <div class="custom-dialog-box">
      <div class="custom-dialog-message" id="customDialogMessage"></div>
      <div class="custom-dialog-actions" id="customDialogActions"></div>
    </div>
  `;
  document.body.appendChild(root);
}

/**
 * Replaces window.alert(). Shows a single OK button. Resolves once dismissed.
 */
function customAlert(message){
  ensureDialogRoot();
  return new Promise((resolve) => {
    const root = document.getElementById('customDialogRoot');
    document.getElementById('customDialogMessage').textContent = message;
    const actions = document.getElementById('customDialogActions');
    actions.innerHTML = `<div class="btn btn-primary" id="customDialogOk">OK</div>`;
    root.classList.add('open');
    document.getElementById('customDialogOk').addEventListener('click', () => {
      root.classList.remove('open');
      resolve();
    }, { once: true });
  });
}

/**
 * Replaces window.confirm(). Shows Cancel/Confirm. Resolves true/false.
 */
function customConfirm(message){
  ensureDialogRoot();
  return new Promise((resolve) => {
    const root = document.getElementById('customDialogRoot');
    document.getElementById('customDialogMessage').textContent = message;
    const actions = document.getElementById('customDialogActions');
    actions.innerHTML = `
      <div class="btn" id="customDialogCancel">Cancel</div>
      <div class="btn btn-primary" id="customDialogConfirm">Confirm</div>
    `;
    root.classList.add('open');
    const cleanup = (result) => {
      root.classList.remove('open');
      resolve(result);
    };
    document.getElementById('customDialogCancel').addEventListener('click', () => cleanup(false), { once: true });
    document.getElementById('customDialogConfirm').addEventListener('click', () => cleanup(true), { once: true });
  });
}

/**
 * Shows a dialog with a required text area (e.g. "reason for this action").
 * Resolves the entered text, or null if cancelled / left empty.
 */
function customPrompt(message, placeholder){
  ensureDialogRoot();
  return new Promise((resolve) => {
    const root = document.getElementById('customDialogRoot');
    document.getElementById('customDialogMessage').innerHTML = `
      <div style="margin-bottom:10px;">${message}</div>
      <textarea id="customPromptInput" placeholder="${placeholder || 'Reason…'}" style="width:100%; min-height:80px; margin-bottom:0;"></textarea>
    `;
    const actions = document.getElementById('customDialogActions');
    actions.innerHTML = `
      <div class="btn" id="customDialogCancel">Cancel</div>
      <div class="btn btn-primary" id="customDialogConfirm">Confirm</div>
    `;
    root.classList.add('open');
    document.getElementById('customPromptInput').focus();
    const cleanup = (result) => {
      root.classList.remove('open');
      resolve(result);
    };
    document.getElementById('customDialogCancel').addEventListener('click', () => cleanup(null), { once: true });
    document.getElementById('customDialogConfirm').addEventListener('click', () => {
      const val = document.getElementById('customPromptInput').value.trim();
      cleanup(val || null);
    }, { once: true });
  });
}
