const async = require('async');
/** 
 * 创建一个队列池,并行执行一定数量的任务数
 * 当一个任务完成然后调用callback(),另一个任务就接上
*/

const q = async.queue(function (task, callback) {
    console.log('hello', task.name);
    setTimeout(callback,1000);
},2);

q.drain = function() {
    console.log('all items have been processed');
};

q.push({name: 'foo'}, function(err) {
    console.log('finished processing foo');
});
q.push({name: 'bar'}, function (err) {
    console.log('finished processing bar');
});

q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function(err) {
    console.log('finished processing item')
});
