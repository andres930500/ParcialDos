const { Sequelize } = require('sequelize');
const defineModels = require('../db/models/index');

require('dotenv').config(); // Cargar las variables de ambiente

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  dialect: 'postgres'
});

defineModels(sequelize);

sequelize.sync();

module.exports = sequelize;
