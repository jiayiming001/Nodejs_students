const async = require('async');

console.time('map方法');
async.map(['file1', 'file2', 'file3'], (item, callback)=>{
    let res = item + 1;
    callback(null, res);
},(err, results) => {
    if(err) {
        console.log(err);
    }
    console.timeEnd('map方法');
    console.log(results);
})