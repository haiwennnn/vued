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
      component: Home
    }, {
      path: 'home',
      name: 'home',
      component: Home
    }, {
      path: 'pay',
      name: 'pay',
      component: Pay
    }, {
      path: 'mine',
      name: 'mine',
      component: Mine
    }]
  }]
})
