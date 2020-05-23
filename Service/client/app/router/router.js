const authJwt = require('./verifyJwtToken');
const controller = require('../controller/controller');
module.exports = function (app) {

//   const controller = require('../controller/controller.js');

  app.get('/api/client/', [authJwt.verifyToken] , controller.userContent );
  
//   app.get('/api/client/', [authJwt.verifyToken], controller.userContent);


}