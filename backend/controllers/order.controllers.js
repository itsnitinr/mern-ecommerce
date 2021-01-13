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
      gerberFileUrl: req.file.path,
      pcbDetails: JSON.parse(pcbDetails),
      orderPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      shippingDetails: JSON.parse(shippingDetails),
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

module.exports = { placeOrder };
