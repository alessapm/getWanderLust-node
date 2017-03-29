const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const bcrypt = require('bcrypt');

const cors = require('cors');
app.use(cors());

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

require('dotenv').config();

//NEED TO ADD JWT    !!!!!!

app.use(require('./resources.js'));

app.listen(process.env.PORT || 8000, () => {
  console.log('Server is listening on port 8000')
});

// add module.exports = app for TDD

