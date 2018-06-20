'use strcit';

var url = require('url'),
    http = require('http'),
    path = require('path'),
    fs = require('fs');

var root = path.resolve(process.argv[2] || './http');
console.log("Static root dir:" + root);

console.log(url.parse("http://user:pass@host.com:8080/path/to/file?query=string#hash"));

var server = http.createServer(function (req, res) {
    if(req.url === "/favicon.ico") {
        res.end("404");
    }
    var pathname = url.parse(req.url).pathname;

    var filepath = path.join(root, pathname);

    fs.stat(filepath, function (err, stat) {
        if(!err && stat.isFile()) {
            console.log('200' + req.url);
            res.sendFile(filepath);
            // fs.createReadStream(filepath).pipe(res);
        } else {
            console.log('404' + res.url);
            res.end("404 NOt Found");
        }
    });
});

server.listen(8080);

console.log('Server is running at http://localhost:8080/');