const express = require('express');
const router = express.Router();

const { auth } = require('../middlewares/auth.middleware');

const {
  placeOrder,
  getOrderById,
  getMyOrders,
} = require('../controllers/order.controllers');

router.route('/').post(auth, placeOrder);

router.get('/my', auth, getMyOrders);

router.route('/:id').get(auth, getOrderById);

module.exports = router;
