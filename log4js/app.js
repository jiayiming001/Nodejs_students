const log4js = require('./logger');
const logger = log4js.getLogger();
const errlogger = log4js.getLogger('err');
const othlogger = log4js.getLogger('oth');

const express = require('express');

var app = express();
log4js.useLogger(app, logger);

app.get('/', (req, res) => {
    res.write("Hello World");
    res.end();
});

logger.info("test info 1");
errlogger.error('test errror 1');
othlogger.info("test info 2");

app.listen(8080);
console.log("Server is running at http://127.0.0.1:8080");