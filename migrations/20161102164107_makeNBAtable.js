
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('nbaTeams', function (table) {
    table.increments('id')
    table.string('teamName')
    table.string('location')
    table.string('primaryColour')
    table.string('secondaryColour')
    table.integer('views').defaultTo(0)
    table.string('imageURL')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('nbaTeams')
}
