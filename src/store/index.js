import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabbarIndex: 0
  },
  mutations: {
    switchTabbar(state, payload) {
      state.tabbarIndex = payload.index
    }
  }
})
