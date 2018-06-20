const async = require('async');
/*
eachOf(coll, iteratee, callback)
可以向iteratee中放入索引
并行
其他和each一样
 */
var obj = {dev: "/dev.json", test: "/test.json", prod: "/prod.json"};
var configs = {};
console.time('eachOf方法');
async.eachOf(obj, (value, key, callback) => {
    configs[key] = value;
    setTimeout(()=>{
        callback();
    }, 1000);
}, (err)=> {
    if(err) {
        console.log(err);
    }
    console.log("configs",configs);
    console.timeEnd('eachOf方法');
});
