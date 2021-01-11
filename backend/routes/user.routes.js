const express = require('express');
const router = express.Router();

const { registerUser, loginUser } = require('../controllers/user.controllers');

router.route('/').post(registerUser);

router.post('/login', loginUser);

module.exports = router;
