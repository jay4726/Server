const express = require('express');
const router = express.Router();

const { getAllTrailers, getAllTrailersTesting } = require('../controllers/product');

router.route('/').get(getAllTrailers);
router.route('/testing').get(getAllTrailersTesting);

module.exports = router;
