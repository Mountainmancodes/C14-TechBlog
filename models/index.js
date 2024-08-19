const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// User has many Posts
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Post belongs to User
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

// Comment belongs to both User and Post
Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

// User has many Comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Post has many Comments
Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

module.exports = { User, Post, Comment };
