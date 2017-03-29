const User = require('../../models/user.js');
const bcrypt = require('bcrypt');


const controller = {};

controller.create = (req, res) => {
  User.create(req.body.user)
  .then(() => {
    console.log('controller.create is running');
  })
  .catch((err) => console.log('error: ', err));
}; //closes create

 controller.process_login = (req, res) => {
  User.findByEmail(req.body.user.email)
  .then((user) => {
    if (user) {
      const isAuthed = brcypt.compareSync(req.body.user.password, user.password)
      if (isAuthed) {
        console.log('isAuthed is true');
        // set up JWT token here.
      }
    } else {
      console.log('cannot find matching email');
      res.json({error: "Email or password not found"})
    }
  })
 }; //closes process_login


controller.restricted = (req, res) => {
  // jwt.verify
}





module.exports = controller;
