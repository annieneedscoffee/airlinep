const knex = require('../db/knex.js');

module.exports = {
  loginPage: function(req, res){
    res.render('index');
  },
  checkUser: function(req, res){
    knex('user')
      .where('email', req.body.email)
      .then((result)=>{
        let user = result[0];
        if(user.password === req.body.password){
          req.session.user = user.id;
          res.redirect('/trips')
        }else{
          res.redirect('/')
        }
      })
  }
}
