const { gameData } = require('../data/index.js');

exports.seed = function(connection) {
  return connection.migrate
    .rollback()
    .then(() => {
      return connection.migrate.latest();
    })
    .then(() => {
      const gamesInsertions = connection('games').insert(gameData);

      return Promise.all([gamesInsertions]);
    });
};
