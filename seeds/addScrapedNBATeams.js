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

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('table_name').insert({id: 1, colName: 'rowValue1'}),
        knex('table_name').insert({id: 2, colName: 'rowValue2'}),
        knex('table_name').insert({id: 3, colName: 'rowValue3'})
      ]);
    });
};
