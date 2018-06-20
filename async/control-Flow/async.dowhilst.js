const async = require('async');
/*doWhilt(fn, test, [callback])
和whilst类似,和do-while一个意思,首先执行一次fn,再判断,和whilst相比它把fn和test位置交换了而已.
until和whilst相反,当test判断为false的时候执行fn里的方法,为true时跳出,
doUntil与doWhilst相反.
 */
var datalist = [{number:10},{number:20},{number:30},{number:40},{number:50}];

var count = 0;
console.time("doWhilt方法");
var test = function () {
    return count<datalist.length;
}

var fn = function (callback) {
    console.log(datalist[count].number);
    setTimeout(function () {
        count++;
        callback();
    },1000);
};

async.doWhilst(fn, test, function (err) {
    if(err) { 
        console.log(err);
    }
    console.timeEnd('doWhilt方法');
    console.log('doWhilst结束');
});