const express = require('express');
const router = express.Router();
const pageController = require('../../controllers/pageController');

// FIND ALL PAGES OF A USER
router.route('/pages').get(pageController.findAllPages);

// CREATE A PAGE
router.route('/create').post(pageController.updateOne);

// SERVE HTML
// FIND USERS CORRESPONDING PAGE ID
router.route('/:id').get(pageController.findIdPage);

// DOWNLOAD USER PAGE
router.route('/:id/download').get(pageController.download);

module.exports = router;
