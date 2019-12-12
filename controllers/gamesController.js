const { getGames } = require('../models/gamesModel');

exports.sendGames = (req, res, next) => {
  getTopics()
    .then(games => {
      res.status(200).send({ games });
    })
    .catch(next);
};
