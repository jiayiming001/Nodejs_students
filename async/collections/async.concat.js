const async = require('async');
/*
concat(coll, iteratee, callback(err))
将coll迭代器或者数组中的元素,作为参数给iteratee异步函数
每个元素的执行过程都是并行的
中间一个发生错误就会终止整个程序,以及一起并行的任务
 */



 console.time("concat方法");
 async.concat(['task1', 'task2', 'task3','task4'], (args1, callback) => {
     console.log(args1);
     let err = null;
     setTimeout(function () {
         if(args1 === "task3") {
             err = 'err'
         }
        callback(err, args1);
    }, 2000);
 }, (err, results) => {
     if(err) {
         console.log(err);
     }
     console.timeEnd('concat方法');
     console.log('result');
     console.log(results);
 })