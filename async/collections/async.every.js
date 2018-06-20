const async = require('async');
const fs = require('fs');

/* every(coll, iteratee, callback)
将coll中的元素当做参数给iteratee异步函数,异步函数最后需要调用callback(err, res)
result当所有任务都执行成功就为true,否则为false
并行

*/
// fs.mkdir('file', (err)=>{
//     if(err) {
//         console.log(err);
//     }else {
//         console.log('create ok!');
//     }
// });
console.time('every方法');
async.every(['./file/file1','./file/file2', './file/file3'], (item, callback) => {
    console.log(item);
    setTimeout(()=>{
        fs.access(item, (err) => {
            if(err) {
                callback(err, Boolean(err));
            }else {
                callback(null, !err);
            }
        });
    },1000);
}, (err, result)=> {
    if(err) {
        console.log(err);
    }
    console.timeEnd('every方法');
    console.log(result);
});