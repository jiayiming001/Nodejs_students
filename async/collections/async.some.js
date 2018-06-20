const async = require('async');
/* 
并行
回调结果为true,只要coll中的元素有一个对应的iteratee回到callback(null,true),函数就立即回调
    */
console.time('some方法');
async.some(['file1', 'file2', 'file3'], (item, callback)=>{
    console.log(item);
    if(item === 'file1'){
        setTimeout(()=>{
            callback(null, false);
        },1000);
    }else {
        callback(null, item);
    }
}, (err, result)=> {
    if(err) {
        console.log(err);
    }
    console.timeEnd('some方法');
    console.log(result);
});