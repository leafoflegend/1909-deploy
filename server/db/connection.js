const Sequelize = require('sequelize');

const connection = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/1909-deploy',
  {
    logging: false,
  }
);

module.exports = connection;
