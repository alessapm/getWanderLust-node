const express = require('express');
const router = express.Router();



router.get('/users', require('./controllers/users'));
router.get('explore', require('./controllers/explore_lists'));

module.exports = router
