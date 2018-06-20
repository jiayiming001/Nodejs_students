const async = require('async');
/*
detectLimit （coll，limit，iteratee，callback） 
和detect相似,
limit限制了并行的任务数
result为返回true的任务数组
*/
console.time("detectLimit方法");
 async.concatLimit(['task1', 'task2', 'task3','task4'], 2, (item, callback) => {
     console.log(item);    
     setTimeout(function () {
        let err = null;
        let res = false;
        if(item === 'task1'){
            res = true;
        }
        callback(err, res);
    }, 2000);
 }, (err, result) => {
     if(err) {
         console.log(err);
     }
     console.timeEnd('detectLimit方法');
     console.log(result);
 })