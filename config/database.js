// database is called get_wanderlust

const pgPromise = require('pg-promise')();

const db = pgPromise({
  host: 'localhost',
  port: 5432,
  database: 'get_wanderlust'
});

module.exports = db;
