
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('airline').del()
    .then(function () {
      // Inserts seed entries
      return knex('airline').insert([
        {name: 'AA', description: 'midprice airline'},
        {name: 'SW', description: 'South West Cheap Escape'},
        {name: 'DL', description: 'Delta Airline affordable'}
      ]);
    });
};
