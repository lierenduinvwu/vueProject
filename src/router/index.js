import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [
      {
        path: '/t2e',
        name: 't2e',
        component: () => import('../components/Table2Excel')
      },
      {
        path: '/canvas',
        name: 'canvas',
        component: () => import('../components/Canvas')
      }
]

const router = new Router({
  mode: 'hash',
  routes: [...routes]
})

// router.beforeEach((to, from, next) => {
//   next()
// })

// router.afterEach((to, from) => {
//   const title = to.meta.title
//   if (title) document.title = title
// })

export default router
