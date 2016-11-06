var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']

var knex = Knex(knexConfig)

module.exports = {
  getAllTeamsFrom: getAllTeamsFrom
}

function getAllTeamsFrom(league) {
  return knex(league)
}
