var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']

var knex = Knex(knexConfig)

module.exports = getTeamsFromLocation

function getTeamsFromLocation(league, location) {
  return knex(league).where('location', location)
}
