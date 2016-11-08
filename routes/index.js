var express = require('express');
var router = express.Router();

var getAllTeamsFrom = require('../db/getAllTeamsFrom').getAllTeamsFrom
var incrementViews = ('../db/incrementViews')

var unirest = require('unirest')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});

router.get('/showTeam', function(req, res, next){
  getAllTeamsFrom(req.query.league)
    .then(function(teams){
      team = teams[Math.floor(Math.random()*teams.length)]
      res.render('showTeam', team)
      // incrementViews(req.query.league, team.teamName)
      //   .then(function(point){
      //     console.log("in increment views promise")
      //     res.render('showTeam', team)
      //   })
      //   .catch(function(err){console.log(err)})
    })
    .catch(function(err){
      console.log(err)
    })
})



module.exports = router;
