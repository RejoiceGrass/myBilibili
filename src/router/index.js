import Vue from 'vue'
import Router from 'vue-router'
import Bhome from '@/components/Bhome'
import topHder from '@/components/topHder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Bhome',
      component: Bhome
    },
    {
      path: '/topHder',
      name: 'topHder',
      component : topHder,
      // meta:{ requireAuth:true}
    },
  ]
})
