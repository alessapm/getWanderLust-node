// const bcrypt = require('bcrypt');
// const LocalStrategy = require('passport-local').Strategy;
// const facebookStrategy = require('passport-facebook').Strategy;


// const User   = require('../models/user');


// module.exports = (passport) => {

//   passport.serializeUser((user, done) => { //required for passport
//     done(null, user);
//   });

//   passport.deserializeUser((userObj, done) => { //required for passport
//     User.findByEmail(userObj)
//     .then((user) => {
//       done(null, user)
//     })
//     .catch((err) => {
//       console.log('error: ', err);
//       done(null, false)
//     })
//   });

//   passport.use(
//     'local-signup', //this gives a unique name to our localStrategy
//     new LocalStrategy({
//       usernameField: 'user[email]', //user[email] will have to match the name of the input feild in your form
//       passwordField: 'user[password]',
//       passReqToCallback: true
//     },
//     (req, email, password, done) => { //-email and password params are required here by passport
//       User.create(req.body.user)
//       .then((user) => {
//         req.session.user = user;
//         req.session.isAuthenticated = true;
//         return done(null, user); //the first done() param will always be null
//       })
//       .catch((err) => {
//         console.log('error: ', err)
//         return done(null, false);
//       });
//     })
//   ) //end local-signup strategy

//   passport.use(
//     'local-login',
//     new LocalStrategy({
//       usernameField: 'user[email]', //user[email] will have to match the name of the input feild in your form
//       passwordField: 'user[password]',
//       passReqToCallback: true
//     },
//     (req, email, password, done) => {
//       User.findByEmail(email)
//       .then((user) => {
//         if (user) {
//           const isAuthed = bcrypt.compareSync(password, user.password_digest);

//           if (isAuthed) {
//             req.session.isAuthenticated = true;
//             req.session.user = user;
//             return done(null, user); // done() is like next()
//           } else {
//             return done(null, false)
//           }

//         } else {
//           return done(null, false)
//         }
//       })
//       .catch((err) => {
//         console.log('error: ', err)
//         return done(null, false);
//       });
//     }))  //end local login strategy



//   passport.use(
//     'facebook-connect',
//     new FacebookStrategy({
//       clientID: process.env.CLIENT_ID,
//       clientSecret: process.env.CLIENT_SECRET,
//       callbackURL: 'http://localhost:3000/users/connect/facebook/callback',
//       profileFields: ['id'],
//       passReqToCallback: true
//     },
//     (req, accessToken, refreshToken, profile, done) => {
//       User.addfacebookId(req.session.user.id, profile.id)
//       .then(() => {
//         return done(null, req.session.user)
//       })
//       .catch((err) => done(err, false));
//     })
//   ); // end of facebook Connect strategy

//   passport.use(
//     'facebook-login',
//     new facebookStrategy({
//       clientID: process.env.CLIENT_ID,
//       clientSecret: process.env.CLIENT_SECRET,
//       callbackURL: 'http://localhost:3000/auth/facebook/callback',
//       profileFields: ['id'],
//       passReqToCallback: true
//     },
//     (req, accessToken, refreshToken, profile, done) => {
//       User.findByfacebookId(profile.id)
//       .then((user) => {
//         if (user) {
//           req.session.user = user;
//           req.session.isAuthenticated = true;
//           return done(null, user);
//         } else {
//           return done(null, false);
//         }
//       })
//       .catch((err) => {
//         console.log('error: ', err);
//         return done(err, false);
//       })
//     })
//   ) //closes facebook Login strategy




// } // end module.exports
