const express = require('express');
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUserProfile,
  forgotPassword,
  resetPassword,
  updateUserProfile,
} = require('../controllers/user.controllers');

const { auth } = require('../middlewares/auth.middleware');

router.route('/').post(registerUser);

router.post('/login', loginUser);

router.route('/profile').get(auth, getUserProfile).put(auth, updateUserProfile);

router.put('/forgot-password', forgotPassword);
router.put('/reset-password/:resetToken', resetPassword);

module.exports = router;
