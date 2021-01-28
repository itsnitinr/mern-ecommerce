const crypto = require('crypto');
const asyncHandler = require('express-async-handler');
const Order = require('../models/Order.model');
const razorpay = require('../config/razorpay');

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
    let createdOrder = await order.save();

    // Razorpay stuff
    const razorpayOptions = {
      amount: Math.round(totalPrice * 100),
      currency: 'INR',
      receipt: `Order: ${createdOrder._id}`,
      payment_capture: 1,
    };

    try {
      const response = await razorpay.orders.create(razorpayOptions);
      createdOrder.razorpayOrderId = response.id;
      createdOrder = await createdOrder.save();
    } catch (err) {
      console.log(err);
    }

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

// @route   GET /api/orders/my
// @desc    Get logged in user's orders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).sort('-createdAt');
  res.json(orders);
});

// @route   GET /api/orders/
// @desc    Get all orders
// @access  Admin
const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find()
    .populate('user', 'name email')
    .sort('-createdAt');
  res.json(orders);
});

// @route   POST /api/orders/:id/review
// @desc    Approve or reject order review
// @access  Admin
const reviewOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }
  const { isApproved } = req.body;
  order.underReview = false;
  order.reviewPassed = isApproved;
  let updatedOrder = await order.save();
  updatedOrder = await Order.populate(updatedOrder, {
    path: 'user',
    select: 'name email',
  });
  res.json(updatedOrder);
});

// @route   POST /api/orders/:id/pay
// @desc    Set order to paid
// @access  Private
const payOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }
  const { razorpay_payment_id, razorpay_signature } = req.body;

  // Validate payment
  const razorpayOrderId = order.razorpayOrderId;
  const paymentId = razorpay_payment_id;
  const shasum = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
  shasum.update(`${razorpayOrderId}|${paymentId}`);
  const digest = shasum.digest('hex');

  if (digest === razorpay_signature) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.razorpayPaymentId = paymentId;
    order.razorpaySignature = razorpay_signature;
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(401);
    throw new Error('Invalid signature.');
  }
});

module.exports = {
  placeOrder,
  getOrderById,
  getMyOrders,
  getAllOrders,
  reviewOrder,
  payOrder,
};
