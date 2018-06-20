const async = require('async');

/*
whilst(test,fn,[callback]) 
相当于while循环,fn函数里不管是同步还是异步都会执行完上一次循环才会执行下一次循环,对异步循环很有帮助,
test是条件,为true时执行fn里的方法 */
var datalist = [{number:10},{number:20},{number:30},{number:40}, {number:50}];

var count = 0;

var test = function () {
    return count<datalist.length;
}
console.time("whilst方法");
var fn = function (callback) {
    console.log(datalist[count].number);
    setTimeout(function () { 
        count++;
        callback();
    }, 1000);
  }

async.whilst(test, fn, function (err) {
    if(err) {
        console.log(err);
    }
    console.timeEnd('whilst方法');
    console.log('whilst结束');
  });