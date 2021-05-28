const router = require('express').Router();
const User = require('../../models/User');

router.post('/register' , async (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password
  })
  try{
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message});
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ email: req.body.email });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.validatePassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // req.session.save(() => {
    //   req.session.user_id = userData.id;
    //   req.session.logged_in = true;
      
    //   res.json({ user: userData, message: 'You are now logged in!' });
    // });
    res.status(201).json({ user: userData, message: 'You are now logged in!' })
  } catch (err) {
    res.status(400).json({message: err.message});
  }
});

router.put('/addmoviewatched', async (req, res) =>  {
  try {
      await User.updateMany({
        email: req.body.email
      }, {
        $set: {
          movies_watched: req.body.moviesWatched
        }  
      },);
      res.status(200).json({message: 'Successfully added your movie!'})
  } catch (err) {
    res.status(400).json({message: err.message});
  }
})

module.exports = router;