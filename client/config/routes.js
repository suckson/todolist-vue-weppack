// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    name: 'path',
    redirect: '/app'
  },
  {
    path: '/app',
    name: 'app',
    component: () => import('../views/todo/todo.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  }
]
