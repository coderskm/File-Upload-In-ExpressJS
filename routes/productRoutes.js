const express = require('express');
const router = express.Router();

const { createProduct, getAllProducts } = require('../controllers/productController');
const { uploadProductImage } = require('../controllers/Uploading Image Basics');

router.route('/').post(createProduct).get(getAllProducts);
router.route('/uploads').post(uploadProductImage);

module.exports = router;