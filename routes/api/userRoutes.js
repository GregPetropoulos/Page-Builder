const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');
const redirectLogin = require('../../middleware/redirectLogin');

// LOGIN PAGE CHECKS EMAIL,PASSWORD AGAINST USERID
router.route('/login').post(userController.loginUser);

// REGISTER A NEW USER
router.route('/register').post(userController.signUpUser);

// ---------------------
// USER LOGOUT AND REDIRECT
router.route('/logout').post(userController.logoutUser);

// DELETE USER ACCOUNT AT PROFILE PAGE
router.route('/delete/:id').delete(userController.deleteUser);

router.route('/profile').post(userController.profileFormInput);

module.exports = router;
