const async = require('async');
/**
 * 创建一个有限制的异步函数执行队列
 * 同时只能执行对应数量的任务
 * 
 */
console.time('cargo方法');
var cargo = async.cargo((tasks, callback)=>{
    for(let i=0; i<tasks.length; i++){
        console.log('hello ' + tasks[i].name);
    }
    setTimeout(()=>{
        callback();
    },1000);
    
},2)

// add some items
cargo.push({name: 'foo'}, function(err) {
    console.log('finished processing foo');
});
cargo.push({name: 'bar'}, function(err) {
    console.log('finished processing bar');
});
cargo.push({name: 'baz'}, function(err) {
    console.log('finished processing baz');
    console.timeEnd('cargo方法');
});