const Review = require('../models/reviews');

const getAllReviews = async (req, res) => {
    const { title, index } = req.query;
    const queryObject = {};

    if (title) {
        queryObject.title = title;
    }

    if (index) {
        queryObject.index = index;
    }

    try {
        const myReviews = await Review.find(queryObject);

        res.status(200).json({ myReviews });
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({ message: 'Failed to fetch reviews' });
    }
};

module.exports = { getAllReviews };
