const { Post } = require('../models');

const postData = [
  {
    title: 'The Future of JavaScript',
    content: 'JavaScript is evolving rapidly with new frameworks and features...',
    user_id: 1, // Assuming user with ID 1 exists
  },
  {
    title: 'Understanding Asynchronous Programming',
    content: 'Asynchronous programming is a crucial part of modern web development...',
    user_id: 2,
  },
  {
    title: 'Top 10 JavaScript Libraries',
    content: 'In this post, we explore the top 10 JavaScript libraries...',
    user_id: 3,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
