const gamesRouter = require('express').Router();
const { sendGames, postGame } = require('../controllers/gamesController');
const { methodNotFound } = require('../errors');

gamesRouter
  .route('/')
  .post(postGame)
  .get(sendGames)
  .all(methodNotFound);

module.exports = gamesRouter;
