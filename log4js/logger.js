var log4js = require('log4js');

log4js.configure({
    appenders: {
       stdout:{ 
           type: 'stdout'
        }, // 控制台输出
        err:{
            type: 'dateFile', // 文件输出
            filename: 'log4js/logs/', // 需要手动创建此文件夹
            pattern: "err-yyyy-MM-dd.log",
            alwaysIncludePattern: true,
            maxLogSize: 1024,
            backups: 4, // 日志备份数量，大于该数则自动删除
        },
        req: {
            type: 'dateFile',
            filename: 'log4js/logs/',
            pattern: 'req-yyyy-MM-dd.log',
            alwaysIncludePattern: true
        },
        oth: {//其他日志
            type: 'dateFile',
            filename: 'log4js/logs/',
            pattern: 'oth-yyyy-MM-dd.log',
            alwaysIncludePattern: true
        },
    },

    
    categories: {
        default: { appenders: ['stdout', 'req'], level: 'debug' },//appenders:采用的appender,取appenders项,level:设置级别
        err: { appenders: ['stdout', 'err'], level: 'error' },
        oth: { appenders: ['stdout', 'oth'], level: 'info' }
    },


    replaceConsole: true // 替换 console.log
});


exports.getLogger = function (name, level) {
    return  log4js.getLogger(name || 'default');
};

// 配合 express 使用的方法
exports.useLogger = function (app, level) {
    app.use(log4js.connectLogger(log4js.getLogger('default'), {
        format: '[:remote-addr :method :url :status :response-timems][:referrer HTTP/:http-version :user-agent]'
    }));
};
