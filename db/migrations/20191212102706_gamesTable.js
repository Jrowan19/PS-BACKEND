exports.up = function(connection) {
  return connection.schema.createTable('games', gamesTable => {
    gamesTable
      .string('name')
      .primary()
      .notNullable();
    gamesTable.string('platform').notNullable();
    gamesTable.string('genre').notNullable();
    gamesTable.date('release_date').notNullable();
    gamesTable.integer('no_of_players').defaultTo(1);
    gamesTable.string('publisher').notNullable();
    gamesTable.string('boxart').notNullable();
  });
};
exports.down = function(connection) {
  return connection.schema.dropTable('games');
};
