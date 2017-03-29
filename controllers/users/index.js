const express = require('express');
const router = express.Router();

const passport = require('passport');
const AuthService = require('../../services/auth');

const controller = require('./controller');

router.post('/', controller.create);
router.post('/login', controller.process_login);
router.get('/restrict', controller.restricted);




// local-signup strategy:
// router.post('/', passport.authenticate(
//     'local-signup',
//     {
//       failureRedirect: '/users/new',
//       successRedirect: '/users/profile'
//     }
//   )
// )

// // connect user to facebook:
// router.get('/connect/facebook/callback', passport.authenticate(
//     'facebook-connect',
//     {
//       successRedirect: '/users/profile'
//     }
//   )
// )

// router.get('/connect/facebook', AuthService.restrict,
//   passport.authenticate('facebook-connect')
//   );


// router.route('/login')
//   .get(controller.login)
//   .post(
//     passport.authenticate(
//       'local-login',
//       {
//         failureRedirect: '/users/login',
//         successRedirect: '/users/profile'
//       }
//     )
//   );


module.exports = router;
