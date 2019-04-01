import Vuex from 'vuex'
import defaultState from './state/state'
import defaultMutation from './mutation/mutation.js'
import getters from './getters/getters.js'
import actions from './action/action.js'

const isDev = process.env.NODE_ENV === 'development'
export default () => {
  return new Vuex.Store({
    strict: isDev,
    state: defaultState,
    mutations: defaultMutation,
    getters,
    actions,
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
        }
      },
      b: {
        state: {
          text: 2
        }
      }
    }
  })
}
