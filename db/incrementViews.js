var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']

var knex = Knex(knexConfig)

module.exports = incrementViews

function incrementViews(league, id) {
  console.log(league, id)
  return knex(league)
    .where('id', '=', id)
    .increment('views', '+', 1)
}
