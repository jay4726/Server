const Review = require('../models/Review'); 

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();

    res.status(200).json({ reviews });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
};

module.exports = {
  getAllReviews,
};
