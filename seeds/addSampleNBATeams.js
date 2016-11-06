
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('nbaTeams').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('nbaTeams').insert({id: 1, teamName: 'Atlanta Hawks', primaryColour: "red", secondaryColour: "navy"}),
        knex('nbaTeams').insert({id: 2, teamName: 'Boston Celtics', primaryColour: "green", secondaryColour: "white"}),
        knex('nbaTeams').insert({id: 3, teamName: 'Cleveland Cavaliers', primaryColour: "maroon", secondaryColour: "blue"}),
        knex('nbaTeams').insert({id: 4, teamName: 'Chicago Bulls', primaryColour: "red", secondaryColour: "white"}),
        knex('nbaTeams').insert({id: 5, teamName: 'Golden State Warriors', primaryColour: "blue", secondaryColour: "yellow"}),
        knex('nbaTeams').insert({id: 6, teamName: 'Los Angeles Lakers', primaryColour: "purple", secondaryColour: "gold"}),
        knex('nbaTeams').insert({id: 7, teamName: 'San Antonio Spurs', primaryColour: "black", secondaryColour: "white"}),
        knex('nbaTeams').insert({id: 8, teamName: 'Miami Heat', primaryColour: "red", secondaryColour: "yellow"}),
      ]);
    });
};
