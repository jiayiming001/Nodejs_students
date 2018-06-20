const async = require('async');

/** 
 * times(n, iteratee, callback)
 * 执行指定次数的iterratee, 当iterratee结束使用(n, next);
 * n为每次的索引次数
*/

var createUser = function(id, callback) {
    callback(null, {
        id: 'user' + id
    });
};

// generate 5 users
async.times(5, function(n, next) {
    createUser(n, function(err, user) {
        next(err, user);
    });
}, function(err, users) {
    // we should now have 5 users
    console.log(err);
    console.log(users);
});