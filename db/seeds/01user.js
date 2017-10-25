exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {name: 'Bob', email: 'bob@gmail.com', password: 'abc123'},
        {name: 'John', email: 'john@gmail.com', password: 'abc123'},
        {name: 'Cam', email: 'cam@gmail.com', password: 'abc123'}
      ]);
    });
};
