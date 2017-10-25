const login = require("../controllers/login.js");
const trips = require("../controllers/trips.js");
const airline = require("../controllers/airlineLogin.js");

module.exports = function(app){

  app.get('/', login.loginPage);

  app.post('/check', login.checkUser);
  app.post('/register', login.register);
  app.get('/airline/login', airline.airlinePage);

  app.post('/aCheck', airline.airlineCheck);
  app.post('/aRegister', airline.register);

  app.use(userAuth);

  app.get('/trips', trips.flightList);
  app.post('/createTrip', trips.newTrip);


  app.get('/airline', airline.airlineList);
  app.post('/createFlight', airline.new);

}
function userAuth(req,res,next){
  if(req.session.user || req.session.airline){
    next();
  }else{
    res.redirect('/');
  }
}
