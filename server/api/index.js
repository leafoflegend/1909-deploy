const { Router } = require('express');
const { models } = require('../db/index.js');

const { Pokemon } = models;

const apiRouter = Router();

apiRouter.get('/pokemon', (req, res, next) => {
  Pokemon.findAll()
    .then(pokemon => {
      res.send(pokemon);
    })
    .catch(next);
});

module.exports = apiRouter;
