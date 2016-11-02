
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('superRugbyTeams').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('superRugbyTeams').insert({id: 1, teamName: 'Hurricanes', location: "Wellington", primaryColour: "yellow", secondaryColour: "black"}),
        knex('superRugbyTeams').insert({id: 2, teamName: 'Crusaders', location: "Christchurch", primaryColour: "red", secondaryColour: "black"}),
        knex('superRugbyTeams').insert({id: 2, teamName: 'Chiefs', location: "Hamilton", primaryColour: "red", secondaryColour: "yellow"}),
        knex('superRugbyTeams').insert({id: 2, teamName: 'Blues', location: "Auckland", primaryColour: "blue", secondaryColour: "white"}),
        knex('superRugbyTeams').insert({id: 3, teamName: 'Highlanders', location: "Dunedin", primaryColour: "blue", secondaryColour: "maroon"})
      ]);
    });
};
