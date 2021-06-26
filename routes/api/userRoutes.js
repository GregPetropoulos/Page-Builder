const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");

// LOGIN PAGE CHECKS EMAIL,PASSWORD AGAINST USERID
router.route("/login")
.post(userController.loginUser);


// REGISTER A NEW USER
router.route("/register")
.post(userController.signUpUser);

// ---------------------
// USER LOGOUT AND REDIRECT
router.route("/logout")
.post(userController.logoutUser)

// // will need a delete a user button and route
// router.route("/login")
// .delete(userController.deleteUser)
// ---------------------


module.exports = router;
