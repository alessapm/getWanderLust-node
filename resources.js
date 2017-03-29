const express = require('express');
const router = express.Router();



router.use('/users', require('./controllers/users'));
router.use('/explore', require('./controllers/explore_lists'));

module.exports = router
