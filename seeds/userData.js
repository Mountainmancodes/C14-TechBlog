const { User } = require('../models');

const userData = [
  {
    username: 'johndoe',
    password: 'password123'
  },
  {
    username: 'janedoe',
    password: 'password123'
  },
  {
    username: 'admin',
    password: 'adminpassword'
  }
];

const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true, // Ensures the password is hashed
  returning: true,
});

module.exports = seedUsers;
