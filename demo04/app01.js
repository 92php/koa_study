
var Koa=require('koa');
var Router=require('koa-router'); 

var app=new Koa();
var router=new Router();

//ctx 上下文context，包含了request, response等信息
//配置路由
router.get('/',async (ctx)=>{

    ctx.body="首页"; //返回数据 相当于：原生里面的res.writeHead()     res.end()
}).get('/news',async (ctx)=>{

    ctx.body="这是一个新闻页面"
})

app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());

app.listen(3000);