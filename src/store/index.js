import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/*
  event
    name 路由名|事件名
    type 事件类型 {1:路由跳转,2:busEvent}
*/
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
          event: {
            name: 'test',
            type: 1
          }
        }]
      },
      pay: {
        title: '还款详情',
        back: false,
        right: [{
          text: '测试页面1',
          event: {
            name: 'test',
            type: 1
          }
        }]
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
