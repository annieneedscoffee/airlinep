const knex = require('../db/knex.js');
module.exports = {
  tripList: function(req, res){
    knex('trips')
    .where('user_id', req.session.user)
      .then((trips)=>{
        knex('flight')
          .then((flight)=>{
            res.render('trips', {tripsList: trips, flightList: flight});
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
