const chalk = require('chalk');
const { db, utils } = require('./server/db/index.js');

const { seed } = utils;

db.sync()
  .then(seed)
  .then(() => {
    console.log(chalk.green('Seed script ran successfully.'));
    process.exit(0);
  })
  .catch(e => {
    console.log(chalk.red('Seed script failed to run.'));
    console.error(e);
    process.exit(1);
  });
