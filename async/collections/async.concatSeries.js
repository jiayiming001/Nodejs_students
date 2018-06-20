const async = require('async');
/*
concatSeries （coll，iteratee，callback（err）opt）
和concat一样,只是每个元素对应的任务是串行的.
 */
console.time('concatSeries方法');
async.concatSeries(['task1','task2', 'task3'], (args1, callback) => {
    console.log(args1);
    setTimeout(() => {
        callback(null, args1);
    },1000);
}, (err, results) => {
    if(err) {
        console.log(err);
    }
    console.timeEnd('concatSeries方法');
    console.log(results);
});