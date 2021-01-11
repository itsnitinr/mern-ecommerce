const express = require('express');
const router = express.Router();

const { registerUser } = require('../controllers/user.controllers');

router.route('/').post(registerUser);

module.exports = router;
