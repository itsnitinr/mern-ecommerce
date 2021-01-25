const asyncHandler = require('express-async-handler');
const Order = require('../models/Order.model');

// @route   POST /api/orders
// @desc    Place an order
// @access  Private
const placeOrder = asyncHandler(async (req, res) => {
  // Destructure required fields from body
  const {
    pcbDetails,
    orderPrice,
    gerberFileUrl,
    taxPrice,
    shippingPrice,
    totalPrice,
    shippingDetails,
  } = req.body;

  if (!pcbDetails) {
    res.status(400);
    throw new Error('Nothing to order');
  } else {
    const order = new Order({
      user: req.user.id,
      gerberFileUrl,
      pcbDetails,
      orderPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      shippingDetails,
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

// @route   GET /api/orders/:id
// @desc    Get order details by ID
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  );

  // Check if order exists
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

module.exports = { placeOrder, getOrderById };
