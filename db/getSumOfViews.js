var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']

var knex = Knex(knexConfig)

module.exports = getSumOfViews

function getSumOfViews(league) {
  return knex(league).sum('views')
}
