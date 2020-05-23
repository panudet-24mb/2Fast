const verifySignUp = require('./verifySignUp');


module.exports = function (app) {

  const controller = require('../controller/controller.js');

  app.post('/api/auth/signup', [verifySignUp.checkDuplicateUserNameOrEmail, verifySignUp.checkRolesExisted], controller.signup);

  app.post('/api/auth/signin', controller.signin);


}