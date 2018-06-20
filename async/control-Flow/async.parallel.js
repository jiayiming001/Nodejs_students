const async = require('async');
/* 
parallel(tasks,[callback])
多个函数并行执行,不会等待其他函数
如果中途出错,则立即将err和值传到最终的回调函数,其他未执行完毕的函数将不再执行,但是要占一个位置
*/

var task1 = function (callback) {
    console.log("task1");
    setTimeout(function () {
        callback(null,'task1');    
    }, 5000);

}

var task2 = function (callback) {
    console.log("task2");
    setTimeout(function () {
        callback('err', 'task2');
      }, 3000);
}

var task3 = function (callback) {
    console.log("task3");
    setTimeout(function () {
        callback(null, 'task3');
      }, 1000);
}

console.time("parallel方法");
async.parallel([task1, task2,task3], function(err, result){
    console.log("parallel");
    if(err) {
        console.log(err);
    }
    console.log(result);
    console.timeEnd("parallel方法");
});