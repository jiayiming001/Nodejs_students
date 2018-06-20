'use strict';

const fs = require('fs');

try {
    var data  = fs.readFileSync('image.jpg');
    console.log(Buffer.from(data.toString('utf-8')));
    console.log(data.length + ' bytes');
} catch(err) {
    console.log(err);
}


var data2 = fs.readFile('image.jpg', (err, data) => {
    if(err) {
        console.log(err);
    } else {
         console.log(data);
         console.log(data.length + ' bytes');
    }
});