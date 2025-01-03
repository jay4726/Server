const express = require('express');
const router = express.Router();

const { getAllReviews, addReview, deleteReview, updateReview } = require('../controllers/reviews');

router.route('/')
    .get(getAllReviews) 
    .post(addReview);  

router.route('/:id')
    .delete(deleteReview)  
    .put(updateReview);   

module.exports = router;
