const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const http = require('http');
const https = require('https');

var privateKey = fs.readFileSync(path.join(__dirname + '/certificate/private.pem'), 'utf8');
var certificate = fs.readFileSync(path.join(__dirname, '/certificate/file.crt'), 'utf8');
var options = {key:privateKey, cert: certificate};

const httpServer = http.createServer(app);
const httpsServer = https.createServer(options, app);

var PORT = 8000;
var SSLPORT = 8001;

httpServer.listen(PORT, function () {
    console.log('HTTP Server is running on http://127.0.0.1:8000');
});

httpsServer.listen(SSLPORT, function () {
    console.log('HTTPS Server is running on https://127.0.0.1:8001');
});

app.get("/", function (req, res) { 
    if(req.protocol === 'https') {
        res.status(200).send('This is a https server');
    } else {
        res.status(200).send('This is a http server');
    }
 })