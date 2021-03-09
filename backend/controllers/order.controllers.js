const path = require('path');
const crypto = require('crypto');
const handlebars = require('handlebars');
const asyncHandler = require('express-async-handler');
const Order = require('../models/Order.model');
const razorpay = require('../config/razorpay');
const sendEmail = require('../utils/sendEmail.utils');
const readHTML = require('../utils/readHTML.utils');

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
    billingDetails,
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
      billingDetails,
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
      const populatedOrder = await Order.populate(createdOrder, {
        path: 'user',
        select: 'name email',
      });

      // Send email to user and admin
      const adminTemplate = await readHTML(
        path.join(__dirname, '..', 'config', 'emails', 'new-order.html')
      );
      const adminHandlebarsTemplate = handlebars.compile(adminTemplate);
      const adminReplacements = {
        orderId: createdOrder._id,
        estimatedTotal: createdOrder.totalPrice,
        name: populatedOrder.user.name,
        email: populatedOrder.user.email,
        addressLine1: createdOrder.shippingDetails.addressLine1,
        addressLine2: createdOrder.shippingDetails.addressLine2,
        city: createdOrder.shippingDetails.city,
        state: createdOrder.shippingDetails.state,
        pincode: createdOrder.shippingDetails.pincode,
      };
      const adminHTML = adminHandlebarsTemplate(adminReplacements);

      const htmlTemplate = await readHTML(
        path.join(__dirname, '..', 'config', 'emails', 'under-review.html')
      );
      const handlebarsTemplate = handlebars.compile(htmlTemplate);
      const replacements = {
        orderId: createdOrder._id,
        estimatedPrice: createdOrder.totalPrice,
      };
      const html = handlebarsTemplate(replacements);

      sendEmail({
        toEmail: populatedOrder.user.email,
        subject: `PCB Cupid - Order #${createdOrder._id} under review`,
        html,
      });

      sendEmail({
        toEmail: 'admin@example.com',
        subject: `New Order: Order #${createdOrder._id}`,
        html: adminHTML,
      });
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
  const order = await Order.findById(req.params.id).populate([
    {
      path: 'user',
      select: 'name email',
    },
    {
      path: 'reviewedBy',
      select: 'name',
    },
  ]);

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
  const { isApproved, adjustedPrice, adminId } = req.body;
  order.underReview = false;
  order.reviewPassed = isApproved;
  order.reviewedBy = adminId;

  if (adjustedPrice !== order.orderPrice) {
    order.isAdjusted = true;
    order.adjustedPrice = adjustedPrice;
    order.adjustedTax = Math.round(adjustedPrice * 0.18 * 100) / 100;
    order.adjustedTotal =
      parseInt(adjustedPrice) +
      parseInt(order.adjustedTax) +
      parseInt(order.shippingPrice);

    const razorpayOptions = {
      amount: Math.round(order.adjustedTotal * 100),
      currency: 'INR',
      receipt: `Adjusted Order: ${order._id}`,
      payment_capture: 1,
    };

    try {
      const response = await razorpay.orders.create(razorpayOptions);
      order.razorpayOrderId = response.id;
    } catch (error) {
      console.log(error);
    }
  }

  let updatedOrder = await order.save();
  updatedOrder = await Order.populate(updatedOrder, [
    {
      path: 'user',
      select: 'name email',
    },
    {
      path: 'reviewedBy',
      select: 'name',
    },
  ]);

  // Send email to user
  const successHTML = await readHTML(
    path.join(__dirname, '..', 'config', 'emails', 'review-passed.html')
  );

  const failureHTML = await readHTML(
    path.join(__dirname, '..', 'config', 'emails', 'review-failed.html')
  );

  try {
    sendEmail({
      toEmail: updatedOrder.user.email,
      subject: isApproved
        ? 'PCB Cupid - Order review approved'
        : 'PCB Cupid - Order review failed',
      html: isApproved ? successHTML : failureHTML,
    });
  } catch (error) {
    console.log(error);
  }

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
    const populatedOrder = await Order.populate(updatedOrder, {
      path: 'user',
      select: 'name email',
    });

    //Send emails
    const userTemplate = await readHTML(
      path.join(__dirname, '..', 'config', 'emails', 'payment-success.html')
    );
    const userHandlebarsTemplate = handlebars.compile(userTemplate);
    const userReplacements = {
      orderId: updatedOrder._id,
      price: updatedOrder.adjustedTotal || updatedOrder.totalPrice,
    };
    const userHTML = userHandlebarsTemplate(userReplacements);

    const adminTemplate = await readHTML(
      path.join(__dirname, '..', 'config', 'emails', 'payment-received.html')
    );
    const adminHandlebarsTemplate = handlebars.compile(adminTemplate);
    const adminReplacements = {
      orderId: updatedOrder._id,
      price: updatedOrder.adjustedTotal || updatedOrder.totalPrice,
      email: populatedOrder.user.email,
      name: populatedOrder.user.name,
      addressLine1: updatedOrder.shippingDetails.addressLine1,
      addressLine2: updatedOrder.shippingDetails.addressLine2,
      city: updatedOrder.shippingDetails.city,
      state: updatedOrder.shippingDetails.state,
      pincode: updatedOrder.shippingDetails.pincode,
    };
    const adminHTML = adminHandlebarsTemplate(adminReplacements);

    try {
      sendEmail({
        toEmail: 'admin@example.com',
        subject: `Payment received for order ${updatedOrder._id}`,
        html: adminHTML,
      });

      sendEmail({
        toEmail: populatedOrder.user.email,
        subject: `PCB Cupid - Payment successful for order ${updatedOrder._id}`,
        html: userHTML,
      });
    } catch (error) {
      console.log(error);
    }

    res.json(updatedOrder);
  } else {
    res.status(401);
    throw new Error('Invalid signature.');
  }
});

// @route   POST /api/orders/:id/dispatch
// @desc    Mark order as dispatched
// @access  Admin
const dispatchOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }

  const { logisticsPartner, trackingId } = req.body;

  // Update order status
  order.isDispatched = true;
  order.dispatchedAt = Date.now();
  order.logisticsPartner = logisticsPartner;
  order.trackingId = trackingId;

  const updatedOrder = await order.save();
  const populatedOrder = await Order.populate(updatedOrder, {
    path: 'user',
    select: 'name email',
  });

  // Send email to user
  const htmlTemplate = await readHTML(
    path.join(__dirname, '..', 'config', 'emails', 'order-shipped.html')
  );
  const handlebarsTemplate = handlebars.compile(htmlTemplate);
  const replacements = {
    orderId: updatedOrder._id,
    price: updatedOrder.adjustedTotal || updatedOrder.totalPrice,
    email: populatedOrder.user.email,
    name: populatedOrder.user.name,
    billingAddress1: updatedOrder.billingDetails.addressLine1,
    billingAddress2: updatedOrder.billingDetails.addressLine2,
    billingCity: updatedOrder.billingDetails.city,
    billingState: updatedOrder.billingDetails.state,
    billingPincode: updatedOrder.billingDetails.pincode,
    shippingAddress1: updatedOrder.shippingDetails.addressLine1,
    shippingAddress2: updatedOrder.shippingDetails.addressLine2,
    shippingCity: updatedOrder.shippingDetails.city,
    shippingState: updatedOrder.shippingDetails.state,
    shippingPincode: updatedOrder.shippingDetails.pincode,
    logisticsPartner: updatedOrder.logisticsPartner,
    trackingId: updatedOrder.trackingId,
  };
  const html = handlebarsTemplate(replacements);

  try {
    sendEmail({
      toEmail: populatedOrder.user.email,
      subject: 'PCB Cupid - Your order has been dispatched',
      html,
    });
  } catch (error) {
    console.log(error);
  }

  res.json(updatedOrder);
});

module.exports = {
  placeOrder,
  getOrderById,
  getMyOrders,
  getAllOrders,
  reviewOrder,
  payOrder,
  dispatchOrder,
};
