const chalk = require('chalk');
const { Pokemon } = require('../models/index.js');

const seed = async () => {
  try {
    await Promise.all([
      Pokemon.create({
        name: 'Charmander',
        level: 5,
        imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
      }),
      Pokemon.create({
        name: 'Bulbasaur',
        level: 5,
        imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
      }),
      Pokemon.create({
        name: 'Squirtle',
        level: 5,
        imageUrl: 'https://s.pngkit.com/png/small/0-8797_squirtle-glasses-png-squirtle-with-glasses-png.png',
      }),
    ]);

    console.log(chalk.green('Success seeding pokemon!'));
  } catch (e) {
    console.log(chalk.red('Error while seeding pokemon.'));
    console.error(e);
    process.exit(1);
  }
};

module.exports = seed;
