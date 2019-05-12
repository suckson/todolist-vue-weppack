/*
 * @Author: Suckon
 * @Date: 2019-04-14 12:00:36
 * @Last Modified by: 柴小恒
 * @Last Modified time: 2019-05-11 22:17:30
 */
const Router = require('koa-router')

const apiRouter = new Router({prefix: '/api'})

const validateUser = async (ctx, next) => {
  if (!ctx.session.user) {
    ctx.status = 401
    ctx.body = 'need login'
  } else {
    await next()
  }
}

apiRouter.use(validateUser) // 添加用户登录的判断

const successResponse = (data) => {
  return {
    success: true,
    data
  }
}
apiRouter.get('/todos', async (ctx) => {
  const todos = await ctx.db.getAllTodos()
  ctx.body = successResponse(todos)
})
  .post('/todo', async (ctx) => {
    const todos = await ctx.db.addTodo(ctx.request.body)
    console.log(ctx.request.body)
    ctx.body = successResponse(todos)
  })
  .put('/todo/:id', async (ctx) => {
    const data = await ctx.db.updateTodo(ctx.params.id, ctx.request.body)
    ctx.body = successResponse(data)
  })
  .delete('/todo/:id', async (ctx) => {
    const data = await ctx.db.deleteTodo(ctx.params.id)
    ctx.body = successResponse(data)
  })
  .post('/delete/completed', async (ctx) => {
    const todos = await ctx.db.deleteCompleted(ctx.request.body.ids)
    console.log(ctx.request.body)
    ctx.body = successResponse(todos)
  })
module.exports = apiRouter
