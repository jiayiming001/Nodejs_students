'use strict';

var cheerio = require('cheerio');  //cheerio 模块能让我们用类似 jQuery 的语法对页面进行解析
var eventproxy = require('eventproxy');
var superagent = require('superagent');


var ep = new eventproxy();
var urls = [];
for(let i =1; i<= 100; i++) {
    let tmp = 'http://acm.zju.edu.cn/onlinejudge/showProblemStatus.do?problemId=' + i;
    urls.push(tmp);
}

ep.after('topic_html', urls.length, (topics) => {

    topics = topics.map((page) => {
        var $ = cheerio.load(page);
        var userId = $('.runUserName a font').eq(0).text();
        return userId;
    });

    console.log(topics);
});


urls.forEach((item) => {
    superagent.get(item)
        .end(function (err, res) {
            ep.emit('topic_html', res.text);
        });
});


