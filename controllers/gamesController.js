const { getGames, insertGame } = require('../models/gamesModel');

exports.sendGames = (req, res, next) => {
  getGames()
    .then(games => {
      res.status(200).send({ games });
    })
    .catch(next);
};

exports.postGame = (req, res, next) => {
  insertGame(req.body)
    .then(game => {
      res.status(201).send({ game });
    })
    .catch(next);
};
