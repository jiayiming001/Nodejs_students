'use strict';

const fs = require('fs');
const utils = require('./utils');


var data  = fs.readFile('sample.txt', (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
        console.log('First three byte: ' + data[0] + ' ,' + data[1] + ' ,' + data[2]);
        console.log(data.toString('utf-8'));
    }
});

fs.stat('sample.txt' , (err, stat) => {
    if(err) {
        conslog.log(err);
    } else {
        console.log('isFile: ' + stat.isFile());
        console.log('isDirectory: ' + stat.isDirectory());
        if(stat.isFile){
            console.log('size: ' + stat.size);
            console.log('birth: ' + stat.birthtime);
            console.log('modified time: ' + stat);
        }
    }
});



var $ = utils.$;
$("sada",121);