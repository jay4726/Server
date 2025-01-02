const express = require('express');
const router = express.Router();

const {getAllReviews, addReview} = require('../controllers/reviews');

router.route('/').get(getAllReviews);
router.route('/').post(addReview);

module.exports = router;

