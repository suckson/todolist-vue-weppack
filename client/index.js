import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import './assets/style/global.styl'
import App from './app.vue'

import createRouter from './config/router.js'
import createStore from './store/store.js'

const root = document.createElement('div')
document.body.appendChild(root)

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

router.beforeEach((to, from, next) => {
  console.log('before beforeResolve invoked')
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('before beforeResolve invoked')
  next()
})

router.afterEach((to, from) => {
  console.log('before beforeResolve invoked')
})

new Vue({
  render: (h) => h(App),
  router,
  store,
  created () {
    console.log(this)
  }
}).$mount(root)
