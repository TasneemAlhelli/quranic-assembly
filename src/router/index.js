import { createRouter, createWebHistory } from 'vue-router'
import About from '../Pages/About.vue'
import HomePage from '../Pages/HomePage.vue'
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
