
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trips').del()
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        {user_id: 1, title: 'Weekend Trip', description: '$400 for 2 people', flight_id: 1},
        {user_id: 2, title: 'Summer Vacation Trip', description: 'Summer vacation cheap flight 5 people in $200', flight_id: 2},
        {user_id: 3, title: 'July 4', description: 'Firework Show', flight_id: 3}
      ]);
    });
};
