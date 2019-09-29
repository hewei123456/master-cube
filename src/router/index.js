import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home')
    },
    {
      path: '/master',
      name: 'master',
      component: () => import('../views/Master')
    },
    {
      path: '/college',
      name: 'college',
      component: () => import('../views/College')
    },
    {
      path: '/major',
      name: 'major',
      component: () => import('../views/Major')
    },
    {
      path: '/reexam',
      name: 'reexam',
      component: () => import('../views/Reexam')
    }
  ]
})
