import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/app/root'
import Home from '@/app/root_childs/home'
import Pay from '@/app/root_childs/pay'
import Mine from '@/app/root_childs/Mine'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Root,
    children: [{
      path: '',
      name: 'Home',
      component: Home
    }, {
      path: 'home',
      name: 'Home',
      component: Home
    }, {
      path: 'pay',
      name: 'Pay',
      component: Pay
    }, {
      path: 'mine',
      name: 'Mine',
      component: Mine
    }]
  }]
})
