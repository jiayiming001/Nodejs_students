'use strict';
var express = require('express');
var fs = require('fs');
var morgan = require('morgan');
var path = require('path');
var rfs = require('rotating-file-stream');
 
var app = express();
var logDirectory = path.join(__dirname, 'log');
 
// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);


// create a rotating write stream
var accessLogStream = rfs('access.log', {
  interval: '1d', // rotate daily
  compress: true,
  path: logDirectory
});
 
// setup the logger
app.use(morgan('combined', {stream: accessLogStream}));
 
app.get('/', function (req, res) {
  res.send('hello, world!');
})
app.listen(8080);
console.log('server is running at http://127.0.0.1:8080');