import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    name: 'path',
    redirect: '/app'
  },
  {
    path: '/app',
    name: 'app',
    components: {
      default: Todo,
      a: Login
    }
  },
  {
    path: '/login',
    name: 'login',
    components: {
      default: Login,
      a: Todo
    }
  }
]
