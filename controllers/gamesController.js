const { getGames, insertGame, getGameByName } = require('../models/gamesModel');

exports.sendGames = (req, res, next) => {
  getGames()
    .then(games => {
      res.status(200).send({ games });
    })
    .catch(next);

  exports.postGame = (req, res, next) => {
    insertGame(req.body)
      .then(game => {
        res.status(201).send({ game });
      })
      .catch(next);
  };

  exports.sendGameByName = (req, res, next) => {
    getGameByName(req.params)
      .then(game => {
        res.status(200).send({ game });
      })
      .catch(next);
  };
};
