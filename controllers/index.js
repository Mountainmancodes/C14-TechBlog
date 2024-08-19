const router = require('express').Router();

const apiRoutes = require('./api'); // Importing the index.js from the api folder
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes); // This will delegate /api requests to the api/index.js

module.exports = router;
