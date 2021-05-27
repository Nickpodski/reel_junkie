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

router.get('/logIn' , async (req, res) => {
  const data = User.where({email: req.body.email});
  data.findOne((err, user))
})