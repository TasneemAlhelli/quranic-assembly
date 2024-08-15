import { createRouter, createWebHistory } from 'vue-router'
import About from '../pages/About.vue'
import HomePage from '../pages/HomePage.vue'
import Centers from '../pages/Centers.vue'
import Center from '../pages/Center.vue'
import Achievements from '../pages/Achievements.vue'
import Timeline from '../pages/Timeline.vue'
import Soiarees from '../pages/Soiaress.vue'
import Competitions from '../pages/Competitions.vue'
import Competition from '../pages/Competition.vue'
import Poetries from '../pages/Poetries.vue'
import Poetry from '../pages/Poetry.vue'
import Characters from '../pages/Characters.vue'

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
  },
  {
    path: '/soiaress',
    name: 'Soiaress',
    component: Soiarees
  },
  {
    path: '/competitions',
    name: 'Competitions',
    component: Competitions
  },
  {
    path: '/competitions/:id',
    name: 'Competition',
    component: Competition
  },
  {
    path: '/poetries',
    name: 'Poetries',
    component: Poetries
  },
  {
    path: '/poetries/:id',
    name: 'Poetry',
    component: Poetry
  },
  {
    path: '/characters',
    name: 'Characters',
    component: Characters
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
