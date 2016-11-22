
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('userTeams', function (table) {
    table.integer('userID')
    table.string('league')
    table.integer('teamID')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('userTeams')
}
