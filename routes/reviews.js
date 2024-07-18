const express = require('express');
const router = express.Router();

const {getAllReviews} = require('../controllers/reviews');

router.route('/').post(getAllReviews);

module.exports = router;

