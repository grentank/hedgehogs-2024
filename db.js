const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('movie-directors', 'admin', '123', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
