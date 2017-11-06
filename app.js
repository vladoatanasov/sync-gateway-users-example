var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();
app.use(bodyParser.json({
  extended: true
}));

var SERVER_PORT = 8080;

app.post('/user', function (req, resp) {
  var user = {
    name: req.body.user,
    email: req.body.user,
    password: req.body.pass,
    admin_roles: [req.body.user],
    admin_channels: [req.body.user]
  };

  request({
    method: "POST",
    url: "http://admin:admin1234@localhost:4984/default/_user/", // ADMIN port
    headers: {
      'content-type': 'application/json'
    },
    body: user,
    json: true
  }, function (error, response, body) {
    if (error) {
      console.log(error);
      resp.send("error");
    }

    resp.send("ok");

  });
});

app.listen(SERVER_PORT, function () {
  console.log("NodeJS server started on port " + SERVER_PORT);
});
