// Firebase configuration, loaded via the "compat" SDK (script tags, no build step needed)
const firebaseConfig = {
  apiKey: "AIzaSyA2eze_4kpgJ7DR791OiN8jlNfnfouSSt8",
  authDomain: "sluniverse-72eb0.firebaseapp.com",
  projectId: "sluniverse-72eb0",
  storageBucket: "sluniverse-72eb0.firebasestorage.app",
  messagingSenderId: "596539154591",
  appId: "1:596539154591:web:e76159881e1e36be2d82aa",
  measurementId: "G-998GTKNYNT"
};

firebase.initializeApp(firebaseConfig);

// App Check temporarily disabled while we debug why it broke live data access.
// (See the commented block below for the code once we re-enable it.)
/*
if (location.hostname === 'localhost' || location.hostname === '127.0.0.1'){
  self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}
try {
  firebase.appCheck().activate(
    '6LeWFpctAAAAALBVmXbTWXJOrDVc-U1uzsaD1g9c',
    true
  );
} catch (e){
  console.error('App Check failed to activate (site still works, just less protected):', e);
}
*/

const db = firebase.firestore();
const auth = firebase.auth();

// Cloudinary (used for image uploads, Firebase Storage now requires the paid Blaze plan)
const CLOUDINARY_CLOUD_NAME = 'ng7bwm4t';
const CLOUDINARY_UPLOAD_PRESET = 'slunivercloud';
