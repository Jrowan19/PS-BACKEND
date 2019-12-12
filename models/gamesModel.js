const connection = require('../db/connection.js');

exports.getGames = () => {
  return connection('games')
    .select('*')
    .from('games');
};
