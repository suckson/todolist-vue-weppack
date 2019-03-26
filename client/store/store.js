import Vuex from 'vuex'
import defaultState from './state/state'
import defaultMutation from './mutation/mutation.js'
import getters from './getters/getters.js'

export default () => {
  return new Vuex.Store({
    state: defaultState,
    mutations: defaultMutation,
    getters
  })
}
