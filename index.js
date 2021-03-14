const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')

app.use(bodyParser())

app.use(async ctx => {
  console.log(ctx.request.body)
  ctx.body = ctx.request.body.message
})

console.log('Server is running on port 3000')
app.listen(3000)
