const Review = require('../models/reviews');  // Import the Review model

// Function to get all reviews (with optional filters)
const getAllReviews = async (req, res) => {
    const { title, index } = req.query;
    const queryObject = {};

    if (title) {
        queryObject.title = title;
        console.log('Title filter:', queryObject.title);
    }
    if (index) {
        queryObject.index = index;
        console.log('Index filter:', queryObject.index);
    }

    try {
        const myReviews = await Review.find(queryObject);  // Fetch the reviews from the database
        res.status(200).json({ myReviews });
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({ message: 'Error fetching reviews', error: error.message });
    }
};

// Function to add a new review
const addReview = async (req, res) => {
    try {
        const { name, reviews: desc, country, rate } = req.body;

        // Basic validation for required fields
        if (!name || !desc || !country || !rate) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Create a new review
        const newReview = new Review({
            name,
            desc,
            country,
            rate,
            id: Date.now(),  // You can use a MongoDB ObjectId instead of Date.now() for a unique identifier
        });

        // Save the new review to the database
        await newReview.save();

        res.status(201).json(newReview);  // Respond with the newly added review
    } catch (error) {
        console.error('Error adding review:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Function to delete a review by ID
const deleteReview = async (req, res) => {
    try {
        const reviewId = req.params.id;  // Get the ID from the URL params

        // Delete the review by its ID
        const deletedReview = await Review.findByIdAndDelete(reviewId);

        if (!deletedReview) {
            return res.status(404).json({ message: 'Review not found' });
        }

        res.status(200).json({ message: 'Review deleted successfully', data: deletedReview });
    } catch (error) {
        console.error('Error deleting review:', error);
        res.status(500).json({ message: 'Error deleting review', error: error.message });
    }
};

// Export the functions to be used in routes
module.exports = {
    getAllReviews,
    addReview,
    deleteReview,
};
