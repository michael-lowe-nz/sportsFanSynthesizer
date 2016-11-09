var express = require('express');
var router = express.Router();

var getAllTeamsFrom = require('../db/getAllTeamsFrom').getAllTeamsFrom
var incrementViews = require('../db/incrementViews')
var getSumOfViews = require('../db/getSumOfViews')

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
      .then(function(){
        team.views ++
        getSumOfViews(req.query.league)
          .then(function(totalViews){
            team.totalViews = totalViews[0]['sum']
            console.log(team)
            console.log(totalViews)
            res.render('showTeam', team)
          })
          .catch(function(err){console.log(err)})
      })
      .catch(function(err){console.log(err)})
    })
    .catch(function(err){
      console.log(err)
    })
})



module.exports = router;
