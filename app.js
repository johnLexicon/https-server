var express = require('express');
var fs = require('fs');
var https = require('https');
var app = express();

app.get('/', function (req, res) {
  res.send('hello world');
});

/*
Create private key and certificate with:
    openssl req -nodes -new -x509 -keyout server.key -out server.cert2
*/
https
  .createServer(
    {
      key: fs.readFileSync('server.key'),
      cert: fs.readFileSync('server.cert2'),
    },
    app
  )
  .listen(3000, function () {
    console.log(
      'Example app listening on port 3000! Go to https://localhost:3000/'
    );
  });
