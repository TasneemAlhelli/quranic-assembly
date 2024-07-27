import { createRouter, createWebHistory } from 'vue-router'
import About from '../pages/About.vue'
import HomePage from '../pages/HomePage.vue'
import Centers from '../pages/Centers.vue'
import Center from '../pages/Center.vue'
import Achievements from '../pages/Achievements.vue'
import Timeline from '../pages/Timeline.vue'

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
  },
  {
    path: '/centers/:id',
    name: 'Center',
    component: Center
  },
  {
    path: '/achievements',
    name: 'Achievements',
    component: Achievements
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: Timeline
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
