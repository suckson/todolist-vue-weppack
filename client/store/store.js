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
    actions
  })
}
