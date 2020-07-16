import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/offline-support',
    name: 'Offline',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "offline" */ '../views/Offline.vue'),
    children: [
      {
        path: 'user/:id',
        component: () => import(/* webpackChunkName: "offline-user" */ '../views/OfflineUser.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
