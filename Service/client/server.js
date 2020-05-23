var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
app.use(cors());
app.use(bodyParser.json());

require("./app/router/router.js")(app);

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Client Service at http://%s:%s", host, port);
});
