const express = require('express');
const router = express.Router();

const {getAllReviews, addReview, deleteReview} = require('../controllers/reviews');

router.route('/').get(getAllReviews);
router.route('/').post(addReview);
router.delete('/:id', deleteReview);


module.exports = router;
