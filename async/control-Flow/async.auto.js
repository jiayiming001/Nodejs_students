const async = require('async');

/*
auto(tasks,[callback]) 
多个函数有数据交互,有的并行,有的依次执行 
出现错误的话,之后的任务不执行,执行回调函数处理错误
5秒运行完毕,

函数1和2并行,3秒执行完毕,

函数1和2执行完毕后,函数3,4依次执行共计5秒.
并行的是不用等待依赖项加载
*/
console.time('auto方法');
async.auto({
    task1: function (callback) {
        console.log('task1');
        setTimeout(function () {
            callback(null, 'task11', 'task12');
          }, 2000);
      },
      task2: function (callback) {
          console.log('task2');
          setTimeout(function () {
              callback(null, 'task2');
            }, 3000);
        },
        task3: ['task1', 'task2', function ( results, callback,) {
            console.log('task3');
            console.log('task1和task2运行结果', results);
            setTimeout(function () {
                callback(null, 'task3');
              }, 1000);
          }],
          task4: ['task3', function (results, callback) { 
              console.log('task4');
              console.log('task1 task2 task3运行结果', results);
              setTimeout(function () {
                  callback(null, {'task41': results.task3, "task42": 'task42'})
           }, 1000);
        }]
}, function (err, result) {
    console.log('err :' , err);
    console.log('最终results', result);
    console.timeEnd("auto方法");
  })