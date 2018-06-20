'use strict';

var validator = require('validator');
//validator.trim
console.log(validator.trim('     sdasda         \n'));
console.log(validator.toDate("54643645645"));


function assertString(input) {
    var isString = typeof input === 'string' || input instanceof String;
  
    if (!isString) {
      throw new TypeError('This library (validator.js) validates strings only');
    }
}
console.log((0, assertString)("414"));

//validator

console.log(new RegExp("^[A-Za-z0-9]{5,20}@[A-Za-z0-9]{3-9}\.[A-Za-z]+$"));
var patter = new RegExp("^[A-Za-z0-9_]{7,12}@[A-Za-z0-9]+\.[A-Za-z]+$");
console.log(patter.test("45651454@163.com"));

