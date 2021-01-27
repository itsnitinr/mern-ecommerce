const express = require('express');
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUserProfile,
  forgotPassword,
  resetPassword,
  updateUserProfile,
  getAllUsers,
} = require('../controllers/user.controllers');

const { auth, admin } = require('../middlewares/auth.middleware');

router.route('/').post(registerUser).get(auth, admin, getAllUsers);

router.post('/login', loginUser);

router.route('/profile').get(auth, getUserProfile).put(auth, updateUserProfile);

router.put('/forgot-password', forgotPassword);
router.put('/reset-password/:resetToken', resetPassword);

module.exports = router;
