const knex = require('../db/knex.js');
const encryption = require('../encryption.js')
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

        encryption.check(user, req.body).then((isValid)=>{
        if(isValid){
          req.session.user = user.id;
          res.redirect('/trips')
        }else{
          res.redirect('/')
        }
      })})
  },
  register: function(req, res){
    encryption.hash(req.body).then((encryptedUser)=>{
    knex('user')
    .insert(encryptedUser)
    .then(()=>{
      req.session.successMsg = "You have successfully registered. Log in to continue";
      res.redirect('/')
    })
  })
}
