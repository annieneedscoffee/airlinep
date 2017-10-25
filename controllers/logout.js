const knex = require('../db/knex.js');
module.exports = {
  getOutUser: function(req, res){
    delete req.session.user;
    res.redirect('/');
  },
  getOutAirline: function(req, res){
    delete req.session.airline;
    res.redirect('/airline/login');
  }
}
