const crypto = require('crypto');
const asyncHandler = require('express-async-handler');
const generateJWT = require('../utils/generateJWT.utils');
const sendEmail = require('../utils/sendEmail.utils');
const User = require('../models/User.model');

// @route   POST /api/users/
// @desc    Register an user
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user with entered email already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists. Please log in.');
  }

  // Create new user
  const user = await User.create({ name, email, password });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateJWT(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid data entered. Please recheck your inputs.');
  }
});

// @route   POST /api/users/login
// @desc    Logs in an user
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check if user exists and check password
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateJWT(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @route   GET /api/users/profile
// @desc    Get logged in user's profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @route   PUT /api/users/forgot-password
// @desc    Send password reset email with token
// @access  Public
const forgotPassword = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });

  const resetUrl = `${req.protocol}://${req.get(
    'host'
  )}/api/users/reset-password/${resetToken}`;

  const message = `You are receiving this email because you (or someone else) has requested the reset of your password. Please make a PUT request to: \n\n ${resetUrl}`;

  try {
    sendEmail({
      toEmail: user.email,
      subject: 'Password reset',
      message,
    });
  } catch (err) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });
    res.status(500);
    throw new Error('Email could not be sent');
  }

  res.json({ message: 'Email sent' });
});

// @route   PUT /api/users/reset-password/:resetToken
// @desc    Resets password
// @access  Public
const resetPassword = asyncHandler(async (req, res) => {
  // Get hashed token
  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(req.params.resetToken)
    .digest('hex');

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    res.status(400);
    throw new Error('Invalid or expired token.');
  }

  // Set new password
  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();

  res.json({
    id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
});

// @desc    Update Logged In User's Profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  const emailExists =
    (await User.findOne({ email: req.body.email })) &&
    req.body.email !== user.email;
  if (emailExists) {
    throw new Error('This email is already in use by another user.');
  }

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateJWT(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error('User not found.');
  }
});

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  forgotPassword,
  resetPassword,
  updateUserProfile,
};
