var express = require('express');
var router = express.Router();

var getAllTeamsFrom = require('../db/getAllTeamsFrom').getAllTeamsFrom
var incrementViews = require('../db/incrementViews')

var unirest = require('unirest')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});

router.get('/showTeam', function(req, res, next){
  getAllTeamsFrom(req.query.league)
    .then(function(teams){
      team = teams[Math.floor(Math.random()*teams.length)]
      incrementViews(req.query.league, team.teamName)
      console.log(req.query.league, team.teamName, team.views)
      res.render('showTeam', team)
    })
    .catch(function(err){
      console.log(err)
    })
})



module.exports = router;
