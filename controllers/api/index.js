const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

// The /api/users path will use the routes defined in userRoutes.js
router.use('/users', userRoutes);

// The /api/posts path will use the routes defined in postRoutes.js
router.use('/posts', postRoutes);

// The /api/comments path will use the routes defined in commentRoutes.js
router.use('/comments', commentRoutes);

module.exports = router;
