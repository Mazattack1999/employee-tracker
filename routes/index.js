const router = require('express').Router();

const apiRoutes = require('./apiRoutes');

// api routes middleware
router.use('/api', apiRoutes);

module.exports = router;