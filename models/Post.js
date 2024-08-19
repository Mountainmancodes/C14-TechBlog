const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false, d
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false, 
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user', // References the 'user' model
        key: 'id', // References the 'id' field in the 'user' model
      },
    },
  },
  {
    sequelize, 
    timestamps: true, 
    freezeTableName: true, 
    underscored: true, 
    modelName: 'post',
  }
);

module.exports = Post;
