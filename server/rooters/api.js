/*
 * @Author: Suckon
 * @Date: 2019-04-14 12:00:36
 * @Last Modified by: 柴小恒
 * @Last Modified time: 2019-04-14 12:01:07
 */
const Router = require('koa-router')

const apiRouter = new Router({prefix: '/api'})

const successResponse = (data) => {
  return {
    success: true,
    data
  }
}
apiRouter.get('/todo', async (ctx) => {
  const todos = await ctx.db.getAllTodos()
  ctx.body = successResponse(todos)
})

module.exports = apiRouter
