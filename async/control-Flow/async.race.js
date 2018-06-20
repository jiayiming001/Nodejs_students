const async = require('async');
/** 
 * race(tasks, callback)
 * 并行执行任务,一旦有一个任务完成并且调用回调,就直接执行回调函数然后结束.
 * 执行过错中出现错误,立即进入回调
*/
async.race([
    function(callback) {
        setTimeout(function() {
            callback(null, 'one');
        }, 200);
    },
    function(callback) {
        setTimeout(function() {
            callback(null, 'two');
        }, 100);
    }
],(err, result)=>{
    console.log(err);
    console.log(result);
});