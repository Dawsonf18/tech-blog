const sequelize = require('sequelize');

require('dotenv').config;

//Creates our connection to our database
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql2',
      port: 3001
    });

module.exports = sequelize;