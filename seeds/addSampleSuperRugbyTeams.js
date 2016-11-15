
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('superRugbyTeams').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('superRugbyTeams').insert({teamName: 'Hurricanes', location: 'Wellington', primaryColour: 'yellow', secondaryColour: 'black', imageURL: 'https://www.odt.co.nz/sites/default/files/story/2016/06/hurricanes_jpg_5732993e14.jpg'}),
        knex('superRugbyTeams').insert({teamName: 'Crusaders', location: 'Christchurch', primaryColour: 'red', secondaryColour: 'black', imageURL: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Crusaders_rugby_logo.png'}),
        knex('superRugbyTeams').insert({teamName: 'Chiefs', location: 'Waikato', primaryColour: 'red', secondaryColour: 'yellow', imageURL: 'http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/032011/waicato_chiefs.png?itok=vrJ7Bz__'}),
        knex('superRugbyTeams').insert({teamName: 'Blues', location: 'Auckland', primaryColour: 'blue', secondaryColour: 'white', imageURL: 'http://www.taniwha.co.nz/wp-content/uploads/2014/02/Blues-logo.jpg'}),
        knex('superRugbyTeams').insert({teamName: 'Rebels', location: 'Melbourne', primaryColour: 'blue', secondaryColour: 'red', imageURL: 'http://shujaapride.com/uploads/ShujaaPride1461233245-highlanders.png'}),
        knex('superRugbyTeams').insert({teamName: 'Reds', location: 'Queensland', primaryColour: 'blue', secondaryColour: 'maroon'}),
        knex('superRugbyTeams').insert({teamName: 'Waratahs', location: 'New+South+Wales', primaryColour: 'blue', secondaryColour: 'maroon'}),
        knex('superRugbyTeams').insert({teamName: 'Brumbies', location: 'Canberra', primaryColour: 'blue', secondaryColour: 'maroon'})
      ])
    })
}
