var express = require('express')
var router = express.Router()

var getAllTeamsFrom = require('../db/getAllTeamsFrom')
var getSumOfViews = require('../db/getSumOfViews')

router.get('/:league', function (req, res, next) {
  getAllTeamsFrom(req.params.league)
    .then((teams) => res.json({teams: teams}))
    .catch((error) => res.json(error))
})

router.get('/:league/sumOfViews', function (req, res, next) {
  getSumOfViews(req.params.league)
    .then((sum) => res.json({sum: sum}))
})

module.exports = router
