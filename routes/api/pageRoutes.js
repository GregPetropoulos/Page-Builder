const express = require("express");
const router = express.Router();
const pageController = require("../../controllers/pageController");

// SERVE HTML 
// FIND ALL PAGES OF A USER
router.get("/pages", pageController.findAllPages)

// FIND USERS CORRESPONDING PAGE ID
//: The route was too similar to the above get request changed to "/one/:id/""
router.route('/one/:id')
.get(pageController.findIdPage)


// CREATE A PAGE
router.route('/create/:id')
.post(pageController.updateOne)

// DOWNLOAD USER PAGE
router.route('/:id/download')
.get(pageController.download)

// DELETE PAGE
router.route('/delete/:id')
.delete(pageController.deletePage)

module.exports = router;
