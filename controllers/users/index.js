const express = require('express');
const router = express.Router();

const AuthService = require('../../services/auth');

const controller = require('./controller');

router.post('/', controller.create);
router.post('/login', controller.process_login);
router.get('/restrict', controller.restricted);




module.exports = router;
