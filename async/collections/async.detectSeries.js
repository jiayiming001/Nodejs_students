const async = require('async');
/*detectSeries(coll, iteratee, callbackopt)
和detect一样,只是任务是串行的
当iteratee返回true,立即回调,不执行后面的任务
 */
console.time('detectSeries方法');
async.detectSeries(['task1', 'task2', 'task3'], (item, callback) => {
    console.log(item);
    setTimeout(() => {
        let res = false;
        if(item === 'task2') {
            res = true;
        }
        callback(null, res);
    },1000);
}, (err, result) => {
    if(err) {
        console.log(err);
    }
    console.timeEnd('detectSeries方法');
    console.log(result);
});