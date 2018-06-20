const async = require('async');
/*
forever(fn, errback)
forever就是无限循环了.只有当中途出现错误的时候才会停止
*/
var count = 0;

async.forever(function (callbcak) {
    console.log(count);
    count++;
    if(count>10) {
        callbcak('errmessage');
        return;
    }

    setTimeout(function () {
        callbcak();
      },1000);
}, function (err) {
    console.log(err);
  });