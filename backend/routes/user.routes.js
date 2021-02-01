const express = require('express');
const router = express.Router();

const {
  registerUser,
  verifyEmail,
  loginUser,
  getUserProfile,
  forgotPassword,
  resetPassword,
  updateUserProfile,
  getAllUsers,
  getUserById,
  updateUser,
  googleOAuth,
} = require('../controllers/user.controllers');

const { auth, admin } = require('../middlewares/auth.middleware');

router.route('/').post(registerUser).get(auth, admin, getAllUsers);

router.post('/login', loginUser);
router.post('/google', googleOAuth);

router.route('/profile').get(auth, getUserProfile).put(auth, updateUserProfile);

router.route('/:id').get(getUserById).put(auth, admin, updateUser);

router.put('/forgot-password', forgotPassword);
router.put('/reset-password/:resetToken', resetPassword);
router.put('/verify/:verificationToken', verifyEmail);

module.exports = router;
