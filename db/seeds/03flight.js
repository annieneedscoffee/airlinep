
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('flight').del()
    .then(function () {
      // Inserts seed entries
      return knex('flight').insert([
        {start: 'PHX', destination: 'CLT', airline_id: 1},
        {start: 'NYC', destination: 'CAL', airline_id: 2},
        {start: 'DAL', destination: 'HOU', airline_id: 3}
      ]);
    });
};
