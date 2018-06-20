const async =  require('async');
/*
reject(coll, iteratee, callback)
并行执行,results数组中保存calback(bull, false)的coll元素名
 */
console.time('reject方法');
async.reject(['file1', 'file2', 'file3'], (item, callback)=>{
    if(item === 'file2') {
        callback(null, false);
    }else {
        callback(null, item);
    }
}, (err, results)=> {
    if(err) {
        console.log(err);
    }
    console.timeEnd('reject方法');
    console.log(results);
});