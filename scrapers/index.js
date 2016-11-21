var request = require('superagent')
var cheerio = require('cheerio')

var teams = []

request
  .get('http://www.nba.com/teams')
  .end(function (error, response) {
    if (error) {
      console.log(error)
    }
    else {
      var $ = cheerio.load(response.text)
      $('.team__list').each(function(index, element){
        teams.push(element.children[1].children[0].data)
      })
      console.log(teams)
    }
  })
