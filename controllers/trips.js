const knex = require('../db/knex.js');
module.exports = {
  tripList: function(req, res){
    knex('trips')
      .then((result)=>{
        res.render('trips', {trips: result});
      })

  }
}
