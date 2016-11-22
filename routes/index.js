var express = require('express')
var router = express.Router()

var getAllTeamsFrom = require('../db/getAllTeamsFrom')
var incrementViews = require('../db/incrementViews')
var getSumOfViews = require('../db/getSumOfViews')
var getUsersTeams = require('../db/getUsersTeams')

var confusionFixer = process.env.NODE_ENV ? 'sum' : 'sum("views")'

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index')
})

router.get('/showTeam', function (req, res, next) {
  getAllTeamsFrom(req.query.league)
    .then(function (teams) {
      console.log("Teams that I have", teams)
      var team = teams[Math.floor(Math.random() * teams.length)]
      incrementViews(req.query.league, team.teamName)
      .then(function () {
        team.views ++
        getSumOfViews(req.query.league)
          .then(function (totalViews) {
            team.totalViews = totalViews[0][confusionFixer]
            res.render('showTeam', team)
          })
          .catch(function (err) {
            console.log(err)
          })
      })
      .catch(function (err) {
        console.log(err)
      })
    })
    .catch(function (err) {
      console.log(err)
    })
})

router.get('/users/:id', function (req, res, next) {
  console.log('In the users/id route')
  console.log('Req.params.id is: ', req.params.id)
  res.send('hello')
  
})

module.exports = router
