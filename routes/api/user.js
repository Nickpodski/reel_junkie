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
        .json({ message: 'Incorrect email or password, please try again!' });
      return;
    }

    const validPassword = await userData.validatePassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again!' });
      return;
    }
    
    res.status(201).json({ user: userData, message: 'You are now logged in!' })
  } catch (err) {
    res.status(400).json({message: err.message});
  }
});

router.put('/addmoviewatched', async (req, res) =>  {
  try {
      await User.updateOne({
        email: req.body.email
      }, {
        $set: {
          movies_watched: req.body.moviesWatched
        }  
      },);
      res.status(200).json({message: 'Successfully updated your have seen list!'})
  } catch (err) {
    res.status(400).json({message: err.message});
  }
})

router.put('/addmoviewatchlist', async (req, res) =>  {
  try {
      await User.updateOne({
        email: req.body.email
      }, {
        $set: {
          watchlist: req.body.movieWatchList
        }  
      },);
      res.status(200).json({message: 'Successfully updated your watchlist!'})
  } catch (err) {
    res.status(400).json({message: err.message});
  }
})

module.exports = router;