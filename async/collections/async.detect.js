const async = require('async');
/*
detect(coll, iteratee, callback)
将coll中的元素都传给iteratee函数
callback(err, boolean),结果必须是布尔值
回调函数的结果是第一个callback(null, true)的任务;
并行
 */
console.time('detect方法');
async.detect(['task1', 'task2', 'task3'], (item, callback) => {
    console.log(item);
    setTimeout(() => {
        let res = false;
        if(item === 'task3') {
            res = true;
        }
        callback(null, res);
    },3000);
}, (err, result) => {
    if(err) {
        console.log(err);
    }
    console.timeEnd('detect方法');
    console.log(result);
});