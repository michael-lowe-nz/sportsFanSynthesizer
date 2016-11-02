
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('nbaTeams', function(table){
    table.increments("id")
    table.string("teamName")
    table.string("location")
    table.string("primaryColour")
    table.string("secondaryColour")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('nbaTeams')
};
