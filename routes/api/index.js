const router = require('express').Router();
const badgeRoutes = require('./badgeAPI');
const userRoutes = require('./user')
const movieRoutes = require('./movies');

router.use('/badge', badgeRoutes);
router.use('/user', userRoutes);
router.use('/movies', movieRoutes)

          
module.exports = router;
