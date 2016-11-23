var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']

var knex = Knex(knexConfig)

module.exports = addTeamToUser

function addTeamToUser(userID, league, teamID) {
  return knex(league).insert({userID: userID, league: league, teamID: teamID})
}
