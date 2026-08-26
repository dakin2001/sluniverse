// Vercel serverless function. Runs on Vercel's servers only, never in the browser.
// Given a uid and a reason, looks up that account's real email via the Firebase
// Admin SDK (the only way to read someone else's email address), then sends
// them a notice through Resend. Both credentials stay in Vercel's environment
// variables and are never exposed to the site's client-side code.

const admin = require('firebase-admin');
const { Resend } = require('resend');

if (!admin.apps.length){
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}

module.exports = async (req, res) => {
  if (req.method !== 'POST'){
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { uid, username, reason } = req.body || {};
  if (!uid || !reason){
    res.status(400).json({ error: 'Missing uid or reason' });
    return;
  }

  try {
    const userRecord = await admin.auth().getUser(uid);
    const email = userRecord.email;
    if (!email){
      res.status(200).json({ sent: false, note: 'This account has no email on file.' });
      return;
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'Soul Land Universe <onboarding@resend.dev>',
      to: email,
      subject: 'Your Soul Land Universe account has been removed',
      text: `Hi ${username || 'there'},\n\nYour account on Soul Land Universe has been removed by an administrator.\n\nReason: ${reason}\n\nThis wiki is fan-made and not affiliated with the official game team.`,
    });

    res.status(200).json({ sent: true });
  } catch (e){
    res.status(500).json({ error: e.message || 'Could not send the email.' });
  }
};
