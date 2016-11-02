
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('nbaTeams').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('nbaTeams').insert({id: 1, teamName: 'Atlanta Hawks', primaryColour: "red", secondaryColour: "navy"}),
        knex('nbaTeams').insert({id: 2, teamName: 'Boston Celtics', primaryColour: "green", secondaryColour: "white"}),
        knex('nbaTeams').insert({id: 3, teamName: 'Cleveland Cavaliers', primaryColour: "maroon", secondaryColour: "blue"})
      ]);
    });
};
