const knex = require('../db/knex.js');

module.exports = {
  loginPage: function(req, res){
    var msg = req.session.successMsg;
    var errMsg = req.session.failMsg;
    var regErrorMsg = req.session.registerErr;
    res.render('index', {msg: msg, error: errMsg, regMsg: regErrorMsg});
  },
  checkUser: function(req, res){
    knex('user')
      .where('email', req.body.email)
      .then((result)=>{
        let user = result[0];
        if(user.password === req.body.password){
          req.session.user = user.id;
          req.session.save(()=>{
            res.redirect('/trips')
          })
        }else{
          res.redirect('/')
        }
      })
      .catch(()=>{
        req.session.failMsg = "You have entered wrong email or password. Try again!"
        res.redirect('/')
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
    .catch(()=>{
      req.session.registerErr = "Email you have used already exist. Try different email!";
      res.redirect('/')
    })
  }
}
