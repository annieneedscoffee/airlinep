
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trips').del()
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        {
          user_id: 1,
          title: 'Summer Vacation Trip',
          description: 'Summer vacation cheap flight',
          flight_id: 1
        }
      ]);
    });
};
