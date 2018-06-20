const async = require('async');
/*
reduce(coll, memo, iteratee, callback)
memo为初始状态
并且
results为回调前iteratee最后callback的结果
 */

console.time('reduce方法');
async.reduce([1,2,3], 0, (memo, item, callback)=>{
    if(item>1){
        callback('err', memo + item);
    } else {
        callback(null, memo + item);
    }   
}, (err, result)=>{
    if(err){
        console.log(err);
    } 
    console.timeEnd('reduce方法');
    console.log(result);
});