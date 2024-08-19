router.post('/signup', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10); // Hash the password
    const userData = await User.create({
      username: req.body.username,
      password: hashedPassword,
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;

      res.status(200).json(userData); // Send back the user data
    });
  } catch (err) {
    console.error(err); // Log the error
    res.status(400).json({ message: 'Failed to sign up', error: err });
  }
});
