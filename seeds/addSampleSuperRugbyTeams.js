
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('superRugbyTeams').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('superRugbyTeams').insert({id: 1, teamName: 'Hurricanes', location: 'Wellington', primaryColour: 'yellow', secondaryColour: 'black', imageURL: 'https://www.odt.co.nz/sites/default/files/story/2016/06/hurricanes_jpg_5732993e14.jpg'}),
        knex('superRugbyTeams').insert({id: 2, teamName: 'Crusaders', location: 'Christchurch', primaryColour: 'red', secondaryColour: 'black', imageURL: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Crusaders_rugby_logo.png'}),
        knex('superRugbyTeams').insert({id: 3, teamName: 'Chiefs', location: 'Hamilton', primaryColour: 'red', secondaryColour: 'yellow', imageURL: 'http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/032011/waicato_chiefs.png?itok=vrJ7Bz__'}),
        knex('superRugbyTeams').insert({id: 4, teamName: 'Blues', location: 'Auckland', primaryColour: 'blue', secondaryColour: 'white', imageURL: 'http://www.taniwha.co.nz/wp-content/uploads/2014/02/Blues-logo.jpg'}),
        knex('superRugbyTeams').insert({id: 5, teamName: 'Highlanders', location: 'Dunedin', primaryColour: 'blue', secondaryColour: 'maroon', imageURL: 'http://shujaapride.com/uploads/ShujaaPride1461233245-highlanders.png'})
      ])
    })
}
