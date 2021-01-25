const express = require('express');
const router = express.Router();

const { auth } = require('../middlewares/auth.middleware');

const {
  placeOrder,
  getOrderById,
} = require('../controllers/order.controllers');

router.route('/').post(auth, placeOrder);

router.route('/:id').get(auth, getOrderById);

module.exports = router;
