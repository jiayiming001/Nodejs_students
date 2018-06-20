const async = require('async');
/*
 parallelLimit(tasks,limit,[callback]) 
 和parallel类似,只是limit参数限制了同时并发执行的个数,不再是无限并发
 当其中一个出现错误,则终止其他任务的执行,并且调用回来函数处理错误
 result为运行过的任务
 */
var task1 = function (callback) {
    console.log('task1');
    setTimeout(function () {
        callback('err', 'task1');
      }, 4000);
  }

var task2 = function (callback) {
    console.log('task2');
    setTimeout(function(){
        callback(null, 'task2');
    }, 3000);
  }

var task3 = function (callback) {
    console.log("task3");
       setTimeout(function () {
        callback(null, 'task3');
      }, 4000);
  }

  console.time('parallelLimit方法');
  async.parallelLimit([task1, task2, task3], 2, function (err, result) {
      console.log('parallelLimit');
      if(err) {
          console.log(err);
      }
    console.log(result);
    console.timeEnd("parallelLimit方法");
}); 