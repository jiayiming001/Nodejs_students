const koa = require('koa');
const http = require('http');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const app = new koa();

app.use(bodyParser());

app.use(router.routes());

router.get('/', async(ctx, next)=> {
    if(ctx.cookies.request.headers.cookie){
        console.log(ctx.cookies.request.headers.cookie);
    }else {
        await next(); 
    }
    console.log(`${ctx.method} ${ctx.url}`);

    ctx.body = "Hello World!"; 
});

router.use(async (ctx) => {
    if(ctx.url === "/") {
        ctx.cookies.set(
            'cid',
            'hello World',
            {
                domain:'localhost', //cookie所在的域名
                path:'/',           //cookie所在的路径
                maxAge: 20 * 1000,  //cookie的有效时长
               // expires: new Date('2017-02-15'),  //cookie失效时间
               httpOnly: false, //是否只用于http请求中获取
               overwrite: false //是否允许重写
            }
        );
        console.log("cookie is writed ok!");
    } else {
        console.log('no thing!');
    }
    
});

http.createServer(app.callback()).listen(3000);



