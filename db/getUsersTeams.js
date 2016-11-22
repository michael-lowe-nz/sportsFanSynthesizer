var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']

var knex = Knex(knexConfig)

module.exports = getUsersTeams

function getUsersTeams(userID) {
  return knex.raw(`SELECT users.name, users.userID, nbaTeams.teamName, nbaTeams.imageURL, nbaTeams.id FROM users INNER JOIN userTeams ON users.userID = userTeams.userID INNER JOIN nbaTeams ON nbaTeams.id = userTeams.teamID WHERE users.userID = ${userID}`)
}
