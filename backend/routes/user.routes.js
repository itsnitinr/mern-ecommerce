const express = require('express');
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUserProfile,
} = require('../controllers/user.controllers');

const { auth } = require('../middlewares/auth.middleware');

router.route('/').post(registerUser);

router.post('/login', loginUser);

router.get('/profile', auth, getUserProfile);

module.exports = router;
