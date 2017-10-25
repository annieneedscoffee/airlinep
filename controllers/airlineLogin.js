const knex = require('../db/knex.js');

module.exports = {
  airlinePage: function(req, res){
    res.render('alogin', {msg: req.session.aSuccessMsg});
  },
  airlineCheck: function(req, res){
    knex('airline')
      .where('email', req.body.email)
        .then((result)=>{
          let airline = result[0];
          if(airline.password === req.body.password){
            req.session.airline = airline.id;
            res.redirect('/airline');
          } else {
            res.redirect('/airline/login');
          }
        })
  },
  register: function(req, res){
    knex('airline')
    .insert({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      description: req.body.description
    })
    .then(()=>{
      req.session.aSuccessMsg = "You have successfully registered. Log in to continue.";
      res.redirect('/airline/login');
    })
  },
  airlineList: function(req, res){
    res.render('airline');
  }




}
