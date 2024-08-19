const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');
const withAuth = require('../../utils/auth'); // Ensure withAuth is imported

// Signup route (no withAuth needed)
router.post('/signup', async (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            password: req.body.password
        });

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Login route (no withAuth needed)
router.post('/login', async (req, res) => {
    try {
        console.log("Login request received with:", req.body);

        const userData = await User.findOne({ where: { username: req.body.username } });

        if (!userData) {
            console.log("No user found with that username");
            res.status(400).json({ message: 'Incorrect username or password, please try again' });
            return;
        }

        const validPassword = await bcrypt.compare(req.body.password, userData.password);

        if (!validPassword) {
            console.log("Password does not match");
            res.status(400).json({ message: 'Incorrect username or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        console.log("Error during login:", err);
        res.status(500).json(err);
    }
});

// Logout route (protected with withAuth)
router.post('/logout', withAuth, (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
