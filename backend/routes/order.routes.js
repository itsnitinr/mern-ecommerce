const express = require('express');
const router = express.Router();

const { auth, admin } = require('../middlewares/auth.middleware');

const {
  placeOrder,
  getOrderById,
  getMyOrders,
  getAllOrders,
  reviewOrder,
} = require('../controllers/order.controllers');

router.route('/').post(auth, placeOrder).get(auth, admin, getAllOrders);

router.get('/my', auth, getMyOrders);

router.post('/:id/review', auth, admin, reviewOrder);

router.route('/:id').get(auth, getOrderById);

module.exports = router;
