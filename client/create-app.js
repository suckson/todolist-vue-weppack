import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './app.vue'
import createStore from './store/store'
import createRouter from './config/router'
import Notification from './components/notification'
import Tabs from './components/tabs'
import Meta from 'vue-meta'

import './assets/style/global.styl'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Meta)
Vue.use(Notification)
Vue.use(Tabs)
export default () => {
  const router = createRouter()
  const store = createStore()
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}
