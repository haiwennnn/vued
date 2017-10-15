import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabbarIndex: 0, // roottabbar索引
    currentPageName: 'home', // 当前页面nane
    lastPageName: '', // 上一个页面name
    pages: {
      home: {
        title: '云科贷',
        back: false,
        right: [{
          text: '测试页面',
          event: 'gotoTest'
        }, {
          icon: 'ion-chatbubble-working'
        }]
      },
      pay: {
        title: '还款详情',
        back: false
      },
      mine: {
        title: '个人中心',
        back: false
      },
      test: {
        title: '测试页面'
      }
    }
  },
  mutations: {
    switchTabbar(state, payload) {
      state.tabbarIndex = payload.index
    },
    setPageName(state, payload) {
      state.lastPageName = state.currentPageName
      state.currentPageName = payload.pageName
    },
    setPageItem(state, payload) {
      let pages = state.pages
      pages[payload.name] = payload.info
      state.pages = pages
    }
  }
})
