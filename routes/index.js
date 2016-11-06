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
  // res.render('index', {title: "Hello"})
});

module.exports = router;
