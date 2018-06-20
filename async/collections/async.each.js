const async = require('async');
/*each(coll, iteratee, callback)
iteratee结尾需要调用callback([err]);
callback只接受错误参数
发生错误终止程序,立即回调
并行
 */
var task1 = function () {
    console.log('task1');
}

var task2 = function () {
    console.log('task2');

}

var task3 = function () {
    console.log('task3');

}

console.time('each方法');
async.each([task1, task2, task3], (item, callback) => {
    item();
    setTimeout(()=>{
        callback(null);
    },1000)
}, (err)=> {
    if(err){
        console.log(err);
    }
    console.timeEnd('each方法');
})