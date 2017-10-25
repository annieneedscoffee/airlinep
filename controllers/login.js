const knex = require('../db/knex.js');

module.exports = {
  loginPage: function(req, res){
    var msg = req.session.successMsg;
    res.render('index', {msg: msg});
  },
  checkUser: function(req, res){
    knex('user')
      .where('email', req.body.email)
      .then((result)=>{
        let user = result[0];
        if(user.password ===      req.body.password){
          req.session.user = user.id;
          res.redirect('/trips')
        }else{
          res.redirect('/')
        }
      })
  },
  register: function(req, res){
    knex('user')
    .insert({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    .then(()=>{
      req.session.successMsg = "You have successfully registered. Log in to continue";
      res.redirect('/')
    })
  }
}
