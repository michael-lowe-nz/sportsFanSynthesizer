var express = require('express');
var router = express.Router();

var getAllTeamsFrom = require('../db/getAllTeamsFrom').getAllTeamsFrom

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("At / route")
  getAllTeamsFrom('superRugbyTeams')
    .then(function(teams){
      res.render('index', {teams: teams})
    })
    .catch(function(err){
      console.log(err)
    })
});

router.get('/showTeam', function(req, res, next){
  getAllTeamsFrom(req.query.league)
    .then(function(teams){
      console.log('Teams: ', teams)
      team = teams[Math.floor(Math.random()*teams.length)]
      console.log('Team: ', team)
      res.render('showTeam', team)
    })
})

module.exports = router;
