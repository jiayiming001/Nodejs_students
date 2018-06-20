var express = require('express');
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var xml2json=require('xml2json');



var app = express();
var server = require('http').createServer(app);

app.use(bodyParser.urlencoded({    
  extended: true
}));
app.use(bodyParser.json({limit: '1mb'}));

var PORT = process.env.PORT || 8080;
server.listen(PORT);

app.post('/urlencoded', function (req, res) {
    console.log(req.body);
    res.send(req.body);
});

app.post('/formdata',multipartMiddleware, function (req, res) {
    console.log(req.body);
    res.send(req.body);
});

app.post('/json', function (req, res) {
    console.log(req.body);
    res.send(req.body);
  });


app.post('/xml', (req, res) => {
    req.rawBody = '';
    var json = {};
    req.setEncoding('utf-8');
    req.on('data', function (chunk) {
        req.rewBody += chunk;
    });
    req.on('end', function () {
        json = xml2json.toJson(req.rawBody);
        res.send(JSON.stringify(json));
    });
  });