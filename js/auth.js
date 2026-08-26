/* ---------- Auth system: register with username (display only) + email + password; log in with email + password ---------- */

// Known disposable/temporary email domains, registration is blocked for these
const DISPOSABLE_EMAIL_DOMAINS = [
  '10minutemail.com', '10minutemail.net', 'guerrillamail.com', 'guerrillamail.net',
  'guerrillamail.org', 'mailinator.com', 'mailinator.net', 'tempmail.com', 'temp-mail.org',
  'yopmail.com', 'yopmail.fr', 'throwawaymail.com', 'trashmail.com', 'fakeinbox.com',
  'getnada.com', 'maildrop.cc', 'sharklasers.com', 'dispostable.com', 'mintemail.com',
  'mytemp.email', 'moakt.com', 'emailondeck.com', '33mail.com', 'spamgourmet.com',
];

function isDisposableEmail(email){
  const domain = (email.split('@')[1] || '').toLowerCase().trim();
  return DISPOSABLE_EMAIL_DOMAINS.includes(domain);
}

/**
 * Shared password strength check, used at registration, password change, and password reset.
 * Requires: 8+ characters, at least one uppercase, one lowercase, one number.
 */
function checkPasswordStrength(password){
  if (!password || password.length < 8){
    throw new Error('Password must be at least 8 characters.');
  }
  if (!/[a-z]/.test(password)){
    throw new Error('Password must include at least one lowercase letter.');
  }
  if (!/[A-Z]/.test(password)){
    throw new Error('Password must include at least one uppercase letter.');
  }
  if (!/[0-9]/.test(password)){
    throw new Error('Password must include at least one number.');
  }
}

function usernameToDocId(username){
  return username.trim().toLowerCase();
}

/**
 * Register a new contributor account.
 * Login always happens via email + password, the username is only ever used for display.
 * @param {Object} data - { username, password, email, server, customServer, language }
 * @returns {Promise<firebase.User>}
 */
async function registerAccount(data){
  const { username, password, email, server, customServer, language } = data;

  if (!username || username.trim().length < 3){
    throw new Error('Username must be at least 3 characters.');
  }
  if (!/^[a-zA-Z0-9_\-]+$/.test(username.trim())){
    throw new Error('Username can only contain letters, numbers, underscores and dashes.');
  }
  if (!password){
    throw new Error('Password is required.');
  }
  checkPasswordStrength(password);
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    throw new Error('Please enter a valid email address.');
  }
  if (isDisposableEmail(email)){
    throw new Error('Disposable/temporary email addresses are not allowed. Please use a real email.');
  }

  const usernameId = usernameToDocId(username);
  const usernameDoc = await db.collection('usernames').doc(usernameId).get();
  if (usernameDoc.exists){
    throw new Error('This username is already taken.');
  }

  // Create the Firebase Auth account (email + password, this IS the login method)
  const cred = await auth.createUserWithEmailAndPassword(email, password);
  const user = cred.user;

  // Send the verification email
  await user.sendEmailVerification();

  const finalServer = server === 'Other…' ? (customServer || 'Other') : server;

  // Reserve the username (uniqueness check only, no email stored here, nothing sensitive)
  await db.collection('usernames').doc(usernameId).set({ uid: user.uid });

  // Store the public profile, never contains the email
  await db.collection('users').doc(user.uid).set({
    username: username.trim(),
    usernameLower: usernameId,
    server: finalServer,
    language: language,
    isAdmin: false,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });

  // Sign back out, the person must log in manually with their new credentials
  await auth.signOut();

  return user;
}

/**
 * Log in with email + password (native Firebase Auth, no Firestore lookup involved).
 * @param {string} email
 * @param {string} password
 * @returns {Promise<firebase.User>}
 */
async function loginAccount(email, password){
  const cred = await auth.signInWithEmailAndPassword(email, password);
  return cred.user;
}

function logoutAccount(){
  return auth.signOut();
}

async function resendVerificationEmail(){
  if (auth.currentUser){
    await auth.currentUser.sendEmailVerification();
  }
}

/**
 * Fetch the current user's Firestore profile (username, server, language, isAdmin).
 */
async function getCurrentUserProfile(){
  if (!auth.currentUser) return null;
  const doc = await db.collection('users').doc(auth.currentUser.uid).get();
  return doc.exists ? doc.data() : null;
}

/**
 * Refresh the current user's emailVerified status from Firebase (in case they just clicked the link).
 */
async function refreshEmailVerifiedStatus(){
  if (!auth.currentUser) return false;
  await auth.currentUser.reload();
  return auth.currentUser.emailVerified;
}

/**
 * Update the display username and/or profile picture URL. No re-authentication needed,
 * these are not security-sensitive fields.
 */
async function updateProfileInfo({ username, avatarUrl, server, language }){
  const user = auth.currentUser;
  if (!user) throw new Error('Not logged in.');

  const updates = {};
  if (avatarUrl !== undefined) updates.avatarUrl = avatarUrl;
  if (server !== undefined) updates.server = server;
  if (language !== undefined) updates.language = language;

  if (username !== undefined){
    const currentProfile = await getCurrentUserProfile();
    const newUsernameId = usernameToDocId(username);
    if (newUsernameId !== currentProfile.usernameLower){
      if (!username || username.trim().length < 3){
        throw new Error('Username must be at least 3 characters.');
      }
      if (!/^[a-zA-Z0-9_\-]+$/.test(username.trim())){
        throw new Error('Username can only contain letters, numbers, underscores and dashes.');
      }
      const existing = await db.collection('usernames').doc(newUsernameId).get();
      if (existing.exists && existing.data().uid !== user.uid){
        throw new Error('This username is already taken.');
      }
      // Reserve the new username (harmless if it's already reserved by ourselves), release the old one
      await db.collection('usernames').doc(newUsernameId).set({ uid: user.uid });
      if (currentProfile.usernameLower !== newUsernameId){
        await db.collection('usernames').doc(currentProfile.usernameLower).delete();
      }
      updates.username = username.trim();
      updates.usernameLower = newUsernameId;
    }
  }

  if (Object.keys(updates).length){
    await db.collection('users').doc(user.uid).update(updates);
  }
}

/**
 * Re-authenticate with the current password. Required by Firebase before
 * sensitive changes (email, password) if the session isn't very recent.
 */
async function reauthenticate(currentPassword){
  const user = auth.currentUser;
  const cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
  await user.reauthenticateWithCredential(cred);
}

/**
 * Change email: sends a verification link to the NEW address first.
 * The email only actually changes once that new address is verified,
 * and Firebase automatically marks it as unverified in the meantime,
 * so "Create Guide" stays locked until they confirm the new address.
 */
async function changeEmail(currentPassword, newEmail){
  if (!newEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)){
    throw new Error('Please enter a valid email address.');
  }
  if (isDisposableEmail(newEmail)){
    throw new Error('Disposable/temporary email addresses are not allowed.');
  }
  await reauthenticate(currentPassword);
  await auth.currentUser.verifyBeforeUpdateEmail(newEmail);
}

/**
 * Change password: requires the current password first.
 */
async function changePassword(currentPassword, newPassword){
  checkPasswordStrength(newPassword);
  await reauthenticate(currentPassword);
  await auth.currentUser.updatePassword(newPassword);
}

/**
 * Sends a "forgot password" reset email. The link opens reset-password.html
 * (a custom page, so we control the "type it twice" experience).
 */
async function sendPasswordReset(email){
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    throw new Error('Please enter a valid email address.');
  }
  await auth.sendPasswordResetEmail(email, {
    url: window.location.origin + window.location.pathname.replace(/guides-hub(\.html)?$/, 'reset-password$1'),
  });
}

/**
 * Verifies a password-reset code (from the emailed link) and returns the associated email,
 * so the reset page can display "Resetting password for: x@y.com".
 */
async function verifyResetCode(oobCode){
  return await auth.verifyPasswordResetCode(oobCode);
}

/**
 * Completes the password reset using the code from the emailed link.
 */
async function confirmReset(oobCode, newPassword){
  checkPasswordStrength(newPassword);
  await auth.confirmPasswordReset(oobCode, newPassword);
}

/**
 * Uploads a profile picture to Firebase Storage, under a folder named after
 * the user's UID, an id they cannot pick or edit, so the link between
 * user and folder can never be lost or spoofed.
 * @param {File} file
 * @returns {Promise<string>} the public download URL
 */
/**
 * Uploads any image file to Cloudinary via an unsigned upload preset (no backend needed).
 * @param {File} file
 * @param {string} publicId - the desired filename (without extension)
 * @param {string} folder - the folder path, e.g. "avatars/{uid}" or "guides/{guideId}/{blockId}"
 * @returns {Promise<string>} the public HTTPS URL of the uploaded image
 */
async function uploadToCloudinary(file, publicId, folder){
  if (!file) throw new Error('No file selected.');
  if (!file.type.startsWith('image/')){
    throw new Error('Please choose an image file.');
  }
  if (file.size > 5 * 1024 * 1024){
    throw new Error('Image must be smaller than 5MB.');
  }
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  if (publicId) formData.append('public_id', publicId);
  if (folder) formData.append('folder', folder);

  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
    method: 'POST',
    body: formData,
  });
  const data = await res.json();
  if (!res.ok){
    throw new Error((data.error && data.error.message) || 'Upload failed.');
  }
  return data.secure_url;
}

/**
 * Uploads a profile picture to Cloudinary, under a folder named after
 * the user's UID, an id they cannot pick or edit, so the link between
 * user and folder can never be lost or spoofed.
 * @param {File} file
 * @returns {Promise<string>} the public download URL
 */
async function uploadAvatar(file){
  const uid = auth.currentUser.uid;
  return await uploadToCloudinary(file, `profile-${Date.now()}`, `avatars/${uid}`);
}

/**
 * Best-effort cleanup: deletes a previous avatar from Cloudinary via our
 * Vercel serverless function, once the new one has been saved successfully.
 * Never throws, since a failed cleanup should never block the actual save.
 */
async function deleteOldAvatar(oldAvatarUrl){
  if (!oldAvatarUrl) return;
  const match = oldAvatarUrl.match(/\/upload\/(?:v\d+\/)?(avatars\/[^.]+)/);
  if (!match) return;
  try {
    await fetch('/api/delete-avatar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ publicId: match[1] }),
    });
  } catch (e){
    console.error('Could not clean up the old avatar (non-blocking):', e);
  }
}
