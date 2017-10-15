// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
import mixins from './mixins'

const BUS = new Vue()

window.BUS = BUS

Vue.config.productionTip = false

mixins.init(Vue)

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
