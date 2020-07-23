const Koa = require("koa");
const Router = require("koa-router");
const server = require("koa-static");
const moment = require("moment")

const app = new Koa();
const router = new Router();

app.use(server(__dirname + "/static"));

router.get("/polling", (ctx) => {
  //返回一个时间戳
  ctx.body = getCurrentTime();
});

app.use(router.routes());
app.listen(3000);

function getCurrentTime(){
    return moment().format('MMMM Do YYYY, h:mm:ss a'); 
}
