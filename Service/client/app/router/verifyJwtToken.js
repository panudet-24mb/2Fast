const jwt = require('jsonwebtoken');
const config = require('../config/config.js');

verifyToken = (req, res, next) => {
  let token = req.headers['x-access-token'];

  if (!token) {
    return res.status(403).send({
      auth: false,
      message: 'No token provided.'
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        auth: false,
        message: 'Fail to Authentication. Error -> ' + err
      });
    }
      req.userData = decoded;

    next();
  });
}


const authJwt = {};
authJwt.verifyToken = verifyToken;
module.exports = authJwt;