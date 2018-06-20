var express = require('express');
var bodyParser = require('body-parser');
var xml2json=require('xml2json');


var app = express();
var server = require('http').createServer(app);

app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/xml', function (req, res) {
  req.rawBody = '';
  var json={};
  req.setEncoding('utf8');

  req.on('data', function(chunk) { 
    req.rawBody += chunk;
  });
  req.on('end', function() {

  json=xml2json.toJson(req.rawBody);
  
  res.send(JSON.stringify(json));
  });
  
});


var PORT = process.env.PORT || 8080;
server.listen(PORT);