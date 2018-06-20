const async = require('async');
/**
 *  during(test, fn, callback)
 * 每次执行fn,然后调用callback(),然后执行test判断,函数知道执行到出错或者不满足test条件
*/
var count = 0;

async.during((callback)=> {
    callback(null, count<5);
},(callback) => {
    console.log(count++);
    setTimeout(callback, 1000);
}, (err)=>{
    console.log(err);
})