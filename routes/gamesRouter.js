const gamesRouter = require('express').Router();
const {
  sendGames,
  postGame,
  sendGameByName
} = require('../controllers/gamesController');
const { methodNotFound } = require('../errors');

gamesRouter
  .route('/')
  .post(postGame)
  .get(sendGames)
  .all(methodNotFound);

gamesRouter.route('/:name').get(sendGameByName);

module.exports = gamesRouter;
