const db = require('../config/database');
const bcrypt = require('bcrypt');

const User = {};

User.create = (user) => {
  //create encrypted password variable
  const password = bcrypt.hashSync(user.password, 10);

  //create user
  return db.none(`INSERT INTO users
    (first_name, last_name, email, password_digest)
    VALUES ($1, $2, $3, $4)`, [user.first_name, user.last_name, user.email, user.password_digest])
};

//find if user currently exists via inputted email address
User.findByEmail = (email) => {
  return db.oneOrNone(`SELECT * FROM users WHERE email = $1`,
   [email]);
};




module.exports = User;
