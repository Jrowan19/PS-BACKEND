const connection = require('../db/connection.js');

exports.getGames = () => {
  return connection('games')
    .select('*')
    .from('games');
};

exports.insertGame = ({
  name,
  platform,
  release_date,
  publisher,
  genre,
  boxart,
  no_of_players
}) => {
  return connection('games')
    .insert({
      name,
      platform,
      release_date,
      publisher,
      genre,
      boxart,
      no_of_players
    })
    .returning('*')
    .then(gameData => {
      if (!gameData)
        return Promise.reject({ status: 404, msg: 'Game Not Found' });
      else return gameData[0];
    });
};
