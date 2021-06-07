import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
    
  },
  {
    path: '/about',
    component: About
    
  }
]

export default new VueRouter({
  routes
})
