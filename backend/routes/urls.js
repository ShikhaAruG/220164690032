const express = require('express');
const Url = require('../models/Url');
const router = express.Router();

// Shortening the URL creation
router.post('/shorten', async (req, res) => {
  try {
    const { originalUrl } = req.body;
    const shortCode = Math.random().toString(36).substring(2, 8);
    const newUrl = new Url({ originalUrl, shortCode });
    await newUrl.save();
    res.json({ shortUrl: `${process.env.BASE_URL}/${shortCode}`, shortCode });
  } catch (error) {
    res.status(500).json({ message: 'Error creating short URL' });
  }
});

// Redirect
router.get('/:code', async (req, res) => {
  try {
    const url = await Url.findOne({ shortCode: req.params.code });
    if (!url) return res.status(404).json({ message: 'URL not found' });

    url.clicks++;
    await url.save();
    res.redirect(url.originalUrl);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
