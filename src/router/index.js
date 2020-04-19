import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/AboutMe.vue'
import MyPortfolio from '../views/MyPortfolio.vue'
import ExpEdu from '../views/ExpEdu.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AboutMe',
    component: About
  },
  {
    path: '/myportfolio',
    name: 'MyPortfolio',
    component: MyPortfolio
  },
  {
    path: '/expedu',
    name: 'ExpEdu',
    component: ExpEdu
  }
]

const router = new VueRouter({
  routes
})

export default router
