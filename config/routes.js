const login = require("../controllers/login.js");
const trips = require("../controllers/trips.js");

module.exports = function(app){

  app.get('/', login.loginPage);

  app.post('/check', login.checkUser);
  
  app.get('/trips', trips.tripList);

}
