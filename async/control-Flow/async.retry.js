const async = require('async');
/** 
 * retry(optsopt, task, callbackopt)
 * 尝试执行多次task,直到回到成功或者超出尝试次数
 * 还可以定义每次尝试的间隔时间
 * 执行出现错误还能错误过滤
 * 
*/
var count = 0;
async.retry(5, (callback)=>{
    console.log(count++);
    if(count > 5) {
        callback(null, count);
    } else {
        callback('err', count);
    }
}, (err, result)=>{
    console.log(err);
    console.log(result);
});