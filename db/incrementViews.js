var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']

var knex = Knex(knexConfig)

module.exports = incrementViews

function incrementViews (league, teamName) {
  console.log(league, teamName)
  return knex(league)
    .where('teamName', '=', teamName)
    .increment('views', '+', 1)
}
