const knex = require('../db/knex.js');

module.exports = {
  flightList: function(req, res){
    knex('flight')
      .then((flight)=>{
        knex('airline')
          .then((airline)=>{
            knex('trips')
              .then((trips)=>{
                res.render('trips', {flight: flight, airline: airline, trips: trips, user: req.session.user});
              })
          })
      })
  },

  newTrip: function(req, res){
    knex('trips')
      .insert({
        user_id: req.session.user,
        title: req.body.title,
        description: req.body.description,
        flight_id: req.body.flight

      })
      .then(()=>{
        res.redirect('/trips');
      })

  }
}
