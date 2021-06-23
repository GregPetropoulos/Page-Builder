const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");

// LOGIN PAGE CHECKS EMAIL,PASSWORD AGAINST USERID
router.route("/login").post(userController.login);

// REGISTER A NEW USER
router.route("/register").post(userController.signUp);

module.exports = router;
