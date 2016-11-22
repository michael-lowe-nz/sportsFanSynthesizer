
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({userID: 1, name: 'Michael'}),
        knex('users').insert({userID: 2, name: 'John'}),
        knex('users').insert({userID: 3, name: 'Yeeple'})
      ])
    })
}
