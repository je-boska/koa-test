const Router = require('koa-router')
const router = new Router()

const koaBody = require('koa-body')

router.post('/message', koaBody(), async ctx => {
  console.log(ctx.request.body)
  ctx.body = 'Hi'
})

module.exports = router
