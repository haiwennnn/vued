// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
import mixins from './mixins'

import FastClick from 'fastclick'

console.log(document)
FastClick.attach(document.body)

Vue.config.productionTip = false

mixins.init(Vue)

router.beforeEach((to, from, next) => {
  let targetName = to.name || 'home'
  let oRootName = {
    home: 0,
    pay: 1,
    mine: 2
  }
  if (oRootName[targetName] >= 0) {
    store.commit({
      type: 'switchTabbar',
      index: oRootName[targetName]
    })
  }
  console.log(to)
  console.log(from)
  next()
})
/*  router.app.$options.components.App.store.state.isLogin */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
