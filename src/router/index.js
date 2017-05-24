import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MvpInfo from '@/components/MvpInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/mvp/:id',
      name: 'MVP Info',
      component: MvpInfo
    }
  ]
})
