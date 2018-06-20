'use strict';

const fs = require('fs');
var rs = fs.createReadStream('sample2.txt');
var i = 1;

rs.on('data', (chunck) => {
    console.log(i);
    i++;
});

rs.on('end', ()=>{
    console.log('end');
});

rs.on('error', (err)=> {
    console.log(err);
})
var ws = fs.createWriteStream('copied.txt');

rs.pipe(ws);