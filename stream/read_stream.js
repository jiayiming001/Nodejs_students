'use strict';

var i = 1;
var fs = require('fs');

var rs = fs.createReadStream('sample2.txt', 'utf-8');

rs.on('data', (chunk) => {
    console.log('DATA');
    if(i === 1) {
        console.log(Buffer.from(chunk, 'utf-8'));
        console.log(Buffer.from(chunk, 'utf-8').length); //单个流最大为65536字节
        i--;
    }
    //console.log(chunk);
});

rs.on('end', () => {
    console.log('END');
});

rs.on('error', (err) => {
    console.log(err);
});