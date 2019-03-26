import Router from 'vue-router'
import routes from './routes.js'
console.log(routes)
export default () => {
  return new Router({
    routes,
    mode: 'hash',
    base: '/base/'
  })
}
