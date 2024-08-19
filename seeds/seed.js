const sequelize = require('../config/connection');
const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
    {
        username: 'user1',
        password: bcrypt.hashSync('password123', 10)
    },
    {
        username: 'user2',
        password: bcrypt.hashSync('password123', 10)
    },
    // Add more users as needed
];

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();
