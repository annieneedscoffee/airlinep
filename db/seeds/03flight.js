
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('flight').del()
    .then(function () {
      // Inserts seed entries
      return knex('flight').insert([
        {start: 'PHX', destination: 'CLT', airline_id: 1}
      ]);
    });
};
