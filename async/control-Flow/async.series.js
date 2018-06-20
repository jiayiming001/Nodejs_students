'use strict';
/*
series(tasks,[callback])
多个函数从上到下依次执行,相互之间没有数据交互
只要中间callback的err参数有值,调用回调函数,处理错误
result是在错误发生前已运行任务的名字组成的数组
*/ 
const async = require("async");

var task1 = function (callback) {
    console.log('task1');
    callback(null, "task1");
}

var task2 = function (callback) {
    console.log('task2');
    callback('err', "task2");
} 

var task3 = function (callback) {
    console.log('task3');
    callback(null, 'task3');
}

async.series([task1, task2, task3], (err, result)=>{
    
    console.log('series');
    if(err) {
        console.log(err);
    } 
    console.log(result);
    
});