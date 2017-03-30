const User = require('../../models/user.js');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const myToken = process.env.myToken


const controller = {};

controller.create = (req, res) => {
  User.create(req.body.user)
  .then(() => {
    console.log('controller.create is running');
    res.send('hello');
  })
  .catch((err) => console.log('error: ', err));
}; //closes create

 controller.process_login = (req, res) => {
  console.log('req.body.user: ', req.body.user)
  User.findByEmail(req.body.user.email)
  .then((user) => {
    if (user) {
      console.log('^^*^!', req.body.user.password);
      console.log('user.password_digest: ', user.password_digest)
      const isAuthed = bcrypt.compareSync(req.body.user.password, user.password_digest)
      if (isAuthed) {
        console.log('isAuthed is true');
        // set up JWT token here.
        const token = jwt.sign({email: user.email}, myToken, {expiresIn: "10d"});

        res.json({
            token: token,
            firstname: user.first_name,
            lastname: user.last_name,
            user_id: user.id
          })

      } else {
        console.log('isAuthed is false');
        res.status(401)
        .json({error: "Incorrect email or password"})
      }
    } else {
      console.log('cannot find matching email');
      res.json({error: "Incorrect email or password"})
    }
  })
 }; //closes process_login


//use jwt.verify to compare the secret in the Token to the one in .env
controller.restricted = (req, res) => {
  jwt.verify(req.headers.authorization, myToken, (err, decoded) => {
    if (err) {
      res.
      status(401)
      .json({error: err.message});
    } else {
      res.json({message: 'this is content coming from Node.'});
    }
  })
}





module.exports = controller;
