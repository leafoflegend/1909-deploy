const { STRING, NUMBER } = require('sequelize');
const db = require('../connection.js');

const Pokemon = db.define('pokemon', {
  name: {
    type: STRING,
    allowNull: false,
  },
  level: {
    type: STRING,
    allowNull: false,
  },
  imageUrl: {
    type: STRING,
    defaultValue: 'https://images-na.ssl-images-amazon.com/images/I/31dQTRb3vHL._AC_SY450_.jpg',
  },
});

module.exports = Pokemon;
