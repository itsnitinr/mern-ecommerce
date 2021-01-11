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

module.exports = { registerUser };
