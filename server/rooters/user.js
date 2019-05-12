const Router = require('koa-router')

const userRouter = new Router({prefix: '/user'})

userRouter.post('/login', async ctx => {
  const user = ctx.request.body
  console.log(user)
  if (user.username === 'chai' && user.password === 'chai1234') {
    ctx.session.user = {
      username: user.username
    }
    ctx.body = {
      success: true,
      data: {
        userdata: user
      }
    }
  } else {
    ctx.status = 400
    ctx.body = {
      success: false,
      message: 'username or password error'
    }
  }
})

module.exports = userRouter
