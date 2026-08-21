/* ==========================================================
   Direct disk writes (File System Access API)
   Works only on Chrome / Edge / Chromium-based browsers.
   The chosen folder is remembered (IndexedDB) so you don't
   have to re-select it every time: just reconfirm
   permission with one click.
   ========================================================== */

const FS_SUPPORTED = 'showDirectoryPicker' in window;
const DB_NAME = 'soulland-editor';
const STORE_NAME = 'handles';

function idbOpen(){
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE_NAME);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function idbGet(key){
  const db = await idbOpen();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const req = tx.objectStore(STORE_NAME).get(key);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
}
async function idbSet(key, val){
  const db = await idbOpen();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).put(val, key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

let projectDirHandle = null;
let contentDirHandle = null;

// 'unsupported' | 'none' | 'needs-permission' | 'connected'
async function fsGetStatus(){
  if (!FS_SUPPORTED) return 'unsupported';
  if (contentDirHandle) return 'connected';
  const handle = await idbGet('projectDir').catch(() => null);
  if (!handle) return 'none';
  const perm = await handle.queryPermission({ mode:'readwrite' }).catch(() => 'denied');
  if (perm === 'granted'){
    projectDirHandle = handle;
    contentDirHandle = await handle.getDirectoryHandle('content', { create:true });
    return 'connected';
  }
  projectDirHandle = handle;
  return 'needs-permission';
}

// Opens the folder picker (the user must choose the project's root
// folder, e.g. "soulland-wiki", the one containing /content).
async function fsConnect(){
  const handle = await window.showDirectoryPicker();
  contentDirHandle = await handle.getDirectoryHandle('content', { create:true });
  projectDirHandle = handle;
  await idbSet('projectDir', handle);
  return handle.name;
}

// Just re-asks for permission on an already-remembered folder
// (no need to re-browse the file tree).
async function fsReconnect(){
  if (!projectDirHandle) return false;
  const perm = await projectDirHandle.requestPermission({ mode:'readwrite' });
  if (perm === 'granted'){
    contentDirHandle = await projectDirHandle.getDirectoryHandle('content', { create:true });
    return true;
  }
  return false;
}

function fsFolderName(){
  return projectDirHandle ? projectDirHandle.name : '';
}

async function fsWriteContentFile(catId, content){
  if (!contentDirHandle) throw new Error('Folder not connected');
  const fileHandle = await contentDirHandle.getFileHandle(`${catId}.js`, { create:true });
  const writable = await fileHandle.createWritable();
  await writable.write(content);
  await writable.close();
}

// Opens a native file picker for an image, then copies the chosen file
// straight into the connected project folder at destPathParts (an array
// of folder names relative to the project root, e.g. ['images','personnages','tang-san']
// or ['images','maps']). Returns the relative path to use in a content file, or
// throws if the browser doesn't support this or no folder is connected.
async function fsPickAndCopyImage(destPathParts, customName){
  if (!FS_SUPPORTED) throw new Error('unsupported');
  if (!projectDirHandle) throw new Error('not-connected');
  const [fileHandle] = await window.showOpenFilePicker({
    types: [{ description: 'Images', accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.avif'] } }],
    multiple: false,
  });
  const file = await fileHandle.getFile();
  let dir = projectDirHandle;
  for (const part of destPathParts){ dir = await dir.getDirectoryHandle(part, { create:true }); }
  const ext = file.name.includes('.') ? file.name.slice(file.name.lastIndexOf('.')) : '';
  const finalName = customName ? `${customName}${ext}` : file.name;
  const destHandle = await dir.getFileHandle(finalName, { create:true });
  const writable = await destHandle.createWritable();
  await writable.write(file);
  await writable.close();
  return destPathParts.join('/') + '/' + finalName;
}

// Creates (if needed) images/<catId>/<entryId>/ in the connected folder,
// so all that's left to do is drop your images in there.
async function fsEnsureImageFolder(catId, entryId){
  if (!projectDirHandle || !entryId) return false;
  try {
    const imagesDir = await projectDirHandle.getDirectoryHandle('images', { create:true });
    const catDir = await imagesDir.getDirectoryHandle(catId, { create:true });
    await catDir.getDirectoryHandle(entryId, { create:true });
    return true;
  } catch (e) {
    return false;
  }
}
