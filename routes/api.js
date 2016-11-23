var express = require('express')
var router = express.Router()

var getAllTeamsFrom = require('../db/getAllTeamsFrom')

router.get('/:league', function (req, res, next) {
  getAllTeamsFrom('nbaTeams')
    .then((teams) => res.json({teams: teams}))
    .catch((error) => res.json(error))
})

module.exports = router
