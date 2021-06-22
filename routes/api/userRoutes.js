const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");
const bcrypt = require('bcrypt');
const privateRoute = require('../middleware/privateRoute');
const User = require('../models/User');

// Login page route
router.route('/login')
.post(userController.findOne)

router.route('/register')
.post(userController)






module.exports = router;