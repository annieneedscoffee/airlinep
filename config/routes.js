const login = require("../controllers/login.js");
const trips = require("../controllers/trips.js");

module.exports = function(app){

  app.get('/', login.loginPage);

  app.post('/check', login.checkUser);
  app.post('/register', login.register);

  app.use(userAuth);
  app.get('/trips', trips.tripList);
  app.post('/createTrip', trips.newTrip);

}
function userAuth(req,res,next){
  if(req.session.user){
    next();
  }else{
    res.redirect('/');
  }
}
