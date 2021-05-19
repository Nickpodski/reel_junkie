const router = require('express').Router();
const badgeRoutes = require('./badgeAPI');

router.use('/badge', badgeRoutes);

          
module.exports = router;
