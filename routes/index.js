var express = require('express');
var router = express.Router();

var getAllTeamsFrom = require('../db/getAllTeamsFrom').getAllTeamsFrom

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
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
