const async = require('async');
/* 
filter(coll, iteratee, callback)
并行执行
其他的异步最后的结果顺序偶读不一定按照coll的顺序输出
*/
console.time('filter方法');
async.filter(['file1', 'file2', 'file3'], function (item, callback) {
    console.log(item);
    setTimeout(() => {
        callback(null, item);
    }, 2000);
}, (err, results) => {
    if(err) {
        console.log(err);
    } 
    console.timeEnd('filter方法');
    console.log(results);
});
