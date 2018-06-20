'use strict';
var express = require('express')
var morgan = require('morgan')
 
var app = express()

//日志输入到stdout上
app.use(morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
}));
 
 
app.get('/', function (req, res) {
  res.send('hello, world!')
})


app.listen(8080);
console.log('server is running at http://127.0.0.1:8080');