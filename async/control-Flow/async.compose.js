const async = require('async');
/*
compose(fn1,fn2,fn3...)
这个方法会创建一个异步的集合函数,执行的顺序是倒序.前一个fn的输出是后一个fn的输入.有数据交互
task1 -> task2 -> task3 
相当于 var m=2; (m*2+3)*5 =35;
*/
var task1 = function (m, callback) {
    console.log('task1');
    setTimeout(function () {
        callback(null, m*2);
      }, 1000);
}

var task2 = function (m, callback) {
    console.log('task2');
    setTimeout(function () {
        callback(null, m+3);
      }, 1000);
}

var task3 = function (m, callback) {
    console.log('task3');
    setTimeout(function () {
        callback(null, m*5); 
      }, 1000);
};

console.time('compose方法');
var com = async.compose(task3, task2, task1);

com(2, function (err, result) {
    if(err) {
        console.log(err);
    }
    console.log(result);
    console.timeEnd("compose方法");
});
  