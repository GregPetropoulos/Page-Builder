const router = require('express').Router();
const userRoutes = require('./userRoutes');
const pageRoutes = require ('./pageRoutes');
// const projectRoutes = require ('./projectRoutes');
// const templateRoutes = require ('./templateRoutes');


// API Routes
router.use('/users', userRoutes);
router.use('/page', pageRoutes);
// router.use('/projects', projectRoutes);
// router.use('/templates', templateRoutes);


module.exports = router;
