const express = require('express');
const router = express.Router();

const uploadImage = require('../utils/uploadImage.utils');
const { auth } = require('../middlewares/auth.middleware');

const { placeOrder } = require('../controllers/order.controllers');

router.route('/').post(auth, uploadImage.single('gerberFile'), placeOrder);

module.exports = router;
