const  async = require('async');
/**
 * applyEachSeries （ fns ，... args opt，callback）
 * 将所提供的参数应用于数组中的每个函数，callback在所有函数完成后调用
 * 并行
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

console.time('applyEach方法');
async.applyEach([task1, task2, task3], 5 ,(err, results) => {
    if(err) {
        console.log(err);
    } 
    console.timeEnd('applyEach方法');
    console.log(results);
})