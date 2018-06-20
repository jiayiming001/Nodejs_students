'use strict';

const koa = require('koa');
const app = new koa();

app.use(async ctx => {
    ctx.body = "Hello World";
});

app.listen(8080);

console.log("The server is running at http://127.0.0.1:8080");