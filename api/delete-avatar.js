// Vercel serverless function (runs on Vercel's servers, never in the browser).
// Deletes a Cloudinary asset by public_id, using a signed request.
// The API secret lives only in Vercel's environment variables, never in client code.

const crypto = require('crypto');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { publicId } = req.body || {};
  if (!publicId || typeof publicId !== 'string') {
    res.status(400).json({ error: 'Missing publicId' });
    return;
  }

  // Safety net: this endpoint may only ever delete avatar images, never
  // guide covers, admin content, or anything else, even if someone finds
  // and calls this endpoint directly with an arbitrary public_id.
  if (!publicId.startsWith('avatars/')) {
    res.status(403).json({ error: 'This endpoint can only delete avatar images.' });
    return;
  }

  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  const cloudName = 'ng7bwm4t';

  if (!apiKey || !apiSecret) {
    res.status(500).json({ error: 'Server is not configured (missing Cloudinary keys).' });
    return;
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const stringToSign = `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
  const signature = crypto.createHash('sha1').update(stringToSign).digest('hex');

  try {
    const cloudinaryRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        public_id: publicId,
        timestamp: String(timestamp),
        api_key: apiKey,
        signature: signature,
      }),
    });
    const data = await cloudinaryRes.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message || 'Delete request failed.' });
  }
};
