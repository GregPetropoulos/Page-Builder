const express = require("express");
const router = express.Router();
const pageController = require("../../controllers/pageController");

// SERVE HTML 
// FIND USERS CORRESPONDING PAGE ID
router.route('/:id')
.get(pageController.findIdPage)

// FIND ALL PAGES OF A USER
router.route('/pages')
.get(pageController.findAllPages)

//test pages 
router.route('/test')
.get(pageController.testPages)

// CREATE A PAGE
router.route('/create')
.post(pageController.updateOne)

// DOWNLOAD USER PAGE
router.route('/:id/download')
.get(pageController.download)

module.exports = router;
