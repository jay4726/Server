const express = require('express');
const router = express.Router();
const { getAllReviews } = require('../controllers/reviews');

router.get('/', getAllReviews);

module.exports = router;
