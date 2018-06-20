'use strict';
const fs = require('fs');
const utils = require('./../utils');

var $ = utils.$;
var data  = fs.readFile('sample.txt', (err, data) => {
    if(err) {
        $(err);
    }else {
        fs.writeFile('test.txt', data, (err) => {
            if(err) {
                $(err);
            }else {
                $('ok!');
            }
        });
    }
});

