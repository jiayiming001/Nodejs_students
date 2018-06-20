const async = require('async');
/** 
 * 自动依赖注入的auto
*/
async.autoInject({
    get_data: function(callback) {
        callback(null, 'data', 'converted to array');
    },
    make_folder: function(callback) {
        callback(null, 'folder');
    },
    write_file: function(get_data, make_folder, callback) {
        callback(null, 'filename');
    },
    email_link: function(write_file, callback) {
        callback(null, {'file':write_file, 'email':'user@example.com'});
    }
}, function(err, results) {
    console.log('err = ', err);
    console.log('email_link = ', results);
});
