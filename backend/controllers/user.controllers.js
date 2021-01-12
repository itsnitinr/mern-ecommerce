const asyncHandler = require('express-async-handler');
const generateJWT = require('../utils/generateJWT.utils');
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

module.exports = { registerUser, loginUser, getUserProfile };
