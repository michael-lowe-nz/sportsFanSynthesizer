
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function (table) {
    table.increments('userID')
    table.string('name')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}
