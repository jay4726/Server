const express = require('express');
const Review = require('../models/reviews');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, reviews, country, rate } = req.body;

    const newReview = new Review({
      name: name,
      reviews: reviews,
      country: country,
      rate: rate,
    });

    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    console.error('Error saving review:', error);
    res.status(500).json({ error: 'Failed to save review' });
  }
});

module.exports = router;
