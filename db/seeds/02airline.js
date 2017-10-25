
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('airline').del()
    .then(function () {
      // Inserts seed entries
      return knex('airline').insert([
        {name: 'American Airline', email: 'aa@gmail.com', password: 'abc123', description: 'American Airlines has airline tickets, cheap flights, vacation packages and American Airlines AAdvantage bonus mile offers at AA.com'},

        {name: 'South West', email: 'sw@gmail.com', password: 'abc123', description: 'Book lowest airfare deals, view flight schedules, get flight status, and more...'},

        {name: 'United Airline', email: 'ua@gmail.com', password: 'abc123', description: 'Find the latest travel deals on flights, hotels and rental cars. Book airline tickets and MileagePlus award tickets to worldwide destinations.'}
      ]);
    });
};
