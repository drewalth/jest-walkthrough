import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Home from '@/examples/vuex-store/vuex-store.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/route/:id',
    name: 'Test Route',
    component: () => import('../components/route/route.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
