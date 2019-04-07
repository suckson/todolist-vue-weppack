import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import './assets/style/global.styl'
import App from './app.vue'

import createRouter from './config/router.js'
import createStore from './store/store.js'
import mutation from './store/mutation/mutation'

const root = document.createElement('div')
document.body.appendChild(root)

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()
store.registerModule('c', { // 动态去添加store注册一个module
  state: {
    text: 3
  }
})
store.unregisterModule('c') // 解绑一个module
// store.watch( (state) => state.count + 1)
store.subscribe((mutation, state) => {
  console.log(mutation.type)
})

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
class Bbb {
  aaa = 10
  constructor (count, name) {
    this.count = count
  }
  getaaa () {
    return this.aaa + 50
  }
}
var cc = new Bbb(15, 6)

console.log(cc.getaaa())

function aaa (x, y, ...arg) {
  console.log(arg)
}
aaa(4, 'aaaa', 666, 777, 555)

new Vue({
  render: (h) => h(App),
  router,
  store,
  created () {
    console.log(this)
  }
}).$mount(root)
