const express = require('express');
const path = require('path');
const chalk = require('chalk');
const apiRouter = require('./api/index.js');

const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = path.join(__dirname, '../dist');

const app = express();

app.use((req, res, next) => {
  console.log(chalk.cyan(`${(new Date()).toString()}: ${req.path}`));
  next();
});
app.use(express.static(PUBLIC_PATH));

app.use('/api', apiRouter);

app.get('*', (req, res, next) => {
  res.sendFile(path.join(PUBLIC_PATH, './index.html'));
});

const startServer = () => new Promise(res => {
  app.listen(PORT, () => {
    console.log(chalk.greenBright(`Application now listening on PORT ${PORT}`));
    res(true);
  });
});

module.exports = startServer;
