import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabbarIndex: 0, // roottabbar索引
    currentPageName: 'home', // 当前页面nane
    lastPageName: '' // 上一个页面name
  },
  mutations: {
    switchTabbar(state, payload) {
      state.tabbarIndex = payload.index
    },
    setPageName(state, payload) {
      state.lastPageName = state.currentPageName
      state.currentPageName = payload.pageName
    }
  }
})
