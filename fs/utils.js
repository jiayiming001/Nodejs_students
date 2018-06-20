'use strict';

/*
封装了console.log()方法
 */
exports.$ = function () {
    console.log.apply(console, arguments);
}