const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');
const withAuth = require('../../utils/auth');

// Signup route (no withAuth needed)
router.post('/signup', async (req, res) => {
    try {
        console.log('Signup data:', req.body);
        const userData = await User.create({
            username: req.body.username,
            password: await bcrypt.hash(req.body.password, 10),
        });

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        console.error('Signup error:', err);
        res.status(500).json(err);
    }
});

// Login route (no withAuth needed)
router.post('/login', async (req, res) => {
  try {
      console.log('Login request received:', req.body);
      const userData = await User.findOne({ where: { username: req.body.username } });

      if (!userData) {
          console.log('No user found with that username.');
          res.status(400).json({ message: 'Incorrect username or password, please try again' });
          return;
      }

      const validPassword = await bcrypt.compare(req.body.password, userData.password);
      console.log('Valid password:', validPassword);

      if (!validPassword) {
          console.log('Invalid password provided.');
          res.status(400).json({ message: 'Incorrect username or password, please try again' });
          return;
      }

      req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.loggedIn = true;

          console.log('User logged in:', userData.username);
          res.json({ user: userData, message: 'You are now logged in!' });
      });

  } catch (err) {
      console.error('Login error:', err);
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
