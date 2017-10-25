
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', (table)=>{
    table.increments();
    table.string('name');
    table.string('email')
    .notNullable()
    .unique();
    table.string('password');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
