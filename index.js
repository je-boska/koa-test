const Koa = require('koa')
const app = new Koa()

const messageRoutes = require('./routes/messageRoutes')
app.use(messageRoutes.routes())

console.log('Server is running on port 3000')
app.listen(3000)
