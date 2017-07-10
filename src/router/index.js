import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home.vue'
// import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: home,
      children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../page/home')), 'home')
      }]
    }
  ]
})
