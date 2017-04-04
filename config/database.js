// database is called get_wanderlust

const pgp = require('pg-promise')();

const localconnection = process.env.DATABASE_URL || 'postgres://localhost:5432/get_wanderlust';

const db = pgp(localconnection);

module.exports = db;
