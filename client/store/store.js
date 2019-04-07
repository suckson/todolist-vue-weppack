import Vuex from 'vuex'
import defaultState from './state/state'
import defaultMutation from './mutation/mutation'
import getters from './getters/getters'
import actions from './action/action'
const isDev = process.env.NODE_ENV === 'development'

export default () => {
  const store = new Vuex.Store({
    strict: isDev, // 开启严格模式 如果没有合适的将会报错
    state: defaultState,
    mutations: defaultMutation,
    getters,
    actions,
    plugins: [
      (store) => {
        console.log('my plugin ivoked')
      }
    ],
    modules: {// Vuex 的模块功能，通过this.$store.state.a.text来调用
      a: {
        namespaced: true, //  使用namespace来控制后 注意在调用. mutation中要使用命名空间来调用 ...mapMutaion['Object/funname'] 或者 Fun(state. Object){Fun.state, state}
        mutations: { // mutations通常在vuex会被处理vue的全局属性，如果mutation很多难以控制，请加上namespace来控制
          updateText (state, text) {
            console.table(state)
          }
        },
        state: {
          text: 1
        },
        getters: {// getters相当于计算属性
          textPlus (state, getters, rootState) { // state是局部的state getters rootState是全局的state
            return state.text + rootState.count
          }
        },
        actions: { // 异步数据调用
          add ({ state, commit, rootState }) {
            commit('updateCount', {num: 15255222}, {root: true})
          }
        }
      },
      b: {
        state: {
          text: 2
        }
      }
    }
  })
  // eslint-disable-next-line no-unreachable
  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutation/mutation',
      './getters/getters',
      './action/action'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutation/mutation').default
      const newGetters = require('./getters/getters').default
      const newActions = require('./action/action').default
      store.hotUpdate({
        state: newState,
        getters: newGetters,
        mutations: newMutations,
        actions: newActions
      })
    })
  }
  return store
}
