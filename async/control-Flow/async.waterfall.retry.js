'use strict';
var async = require('async');

async.retry(3, function (callback) {
    console.log(1);
    callback(null, "ok");
}, function (err, result) {
    if(err) {
        console.log(err);
    } else {
        console.log(result);
    }
});
/*
    waterfall(tasks,[callback]) :瀑布流
    依次执行,前一个函数的输出为后一个函数的输入
    如果中途出现错误,后面的函数将不在执行,之前执行的结果和错误信息将直接传到最终的回调函数
 */
async.waterfall([   //会在执行完第一个函数以后,调用callback,并且将参数传给下一个function
    function (callback) {
        console.log("1");
        callback(null,"one");
    },
    function (arg1,callback) {
        console.log(arg1 + ":2");
        callback(null, "two");
    }
],function (err, result) {
    if(err) {
        console.log(err);
    } else {
        console.log(result);
    }
});

  
