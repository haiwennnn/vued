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
    isLoading: false
  },
  mutations: {
    /*
      切换tabbar
      @params payload{
        index tabbar索引
      }
    */
    SWITCH_TABBAR(state, payload) {
      state.tabbarIndex = payload.index
    },
    /*
      设置新的页面路由名称
      将当前路由名称赋给lastPageName
      @params payload{
        currentPageName 当前路由名称
      }
    */
    SET_PAGE_NAME(state, payload) {
      state.lastPageName = state.currentPageName
      state.currentPageName = payload.pageName
    },
    OPEN_LOADING(state, payload) {
      state.isLoading = true
    },
    CLOSE_LOADING(state, payload) {
      state.isLoading = false
    }
  }
})
