import { createRouter, createWebHistory } from 'vue-router'
import About from '../pages/About.vue'
import HomePage from '../pages/HomePage.vue'
import Centers from '../pages/Centers.vue'
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/centers',
    name: 'Centers',
    component: Centers
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
