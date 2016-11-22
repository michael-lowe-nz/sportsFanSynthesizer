
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('userTeams').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('userTeams').insert({userID: 1, league: 'nbaTeams', teamID: 1}),
        knex('userTeams').insert({userID: 1, league: 'superRugbyTeams', teamID: 2}),
        knex('userTeams').insert({userID: 1, league: 'nbaTeams', teamID: 4}),
        knex('userTeams').insert({userID: 2, league: 'nbaTeams', teamID: 6}),
        knex('userTeams').insert({userID: 2, league: 'nbaTeams', teamID: 9}),
        knex('userTeams').insert({userID: 2, league: 'superRugbyTeams', teamID: 3}),
        knex('userTeams').insert({userID: 3, league: 'nbaTeams', teamID: 5})
      ])
    })
}
