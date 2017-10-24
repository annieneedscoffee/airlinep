
exports.up = function(knex, Promise) {
  return knex.schema.createTable('trips', (table)=>{
    table.increments();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('user')
      .onDelete('CASCADE')
      .index();
    table.string('title');
    table.string('description');
    table.integer('flight_id')
      .notNullable()
      .references('id')
      .inTable('airline')
      .onDelete('CASCADE')
      .index();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trips');
};
