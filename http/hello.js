'use strict';

var http = require('http');
var server = http.createServer((req, res) => {
    console.log(req.method + ': ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello World!</h1>');
});

server.listen(8080);

console.log('Server is running at http://localhost:8080/');