const express = require("express");
const router = express.Router();
const pageController = require("../../controllers/pageController");
// const User = require('../../models/User');
// const Theme = require("../../database/models/Theme");

// SERVE HTML 
// FIND USERS ID AND CORRESPONDING PAGE
router.route('/page/:id')
.get(pageController.findIdPage)

// FIND ALL PAGES OF A USER
router.route('/pages')
.get(pageController.findAllPages)


// CREATE A PAGE
router.route('/create')
.post (pageController.updateOne)


// DOWNLOAD USER PAGE
router.route('/page/:id/download')
.get(pageController.download)



// router.get("/", (req, res) => {
//   console.log("checking get / in Theme");
//   res.send("hello");
// });

// router.post("/", (req, res) => {
//   console.log("checking post / in Theme");

//   const { themeId } = req.body;

//   Theme.findOne({ theme: theme }, (err, template) => {
//     if (err) {
//       console.log("Theme Created Error: ", err);
//       return;
//     }

//     if (template) {
//       res.json({
//         error: `Sorry, already a template with the same themeId: ${themeId}`,
//       });
//       return;
//     }

//     const newTemplate = new Theme({
//       themeId: themeId,
//     });

//     newTemplate.save((err, savedTemplate) => {
//       if (err) return res.json(err);

//       res.json(savedTemplate);
//     });
//   });
// });
// // -------------------------
// // need a delete get and put

module.exports = router;
