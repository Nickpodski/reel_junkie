const router = require('express').Router();
const badgeRoutes = require('./badgeAPI');
const userRoutes = require('./user')

router.use('/badge', badgeRoutes);
router.use('/user', userRoutes);

          
module.exports = router;
