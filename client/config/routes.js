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
    component: Todo
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]
