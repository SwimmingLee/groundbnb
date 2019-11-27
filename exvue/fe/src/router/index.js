import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home.vue'
import Test from '../views/test.vue'
import Room from '../views/room.vue'
import Reserve from '../views/reserve.vue'
import Search from '../views/search.vue'
import SignIn from '../views/signin.vue'
import SignUp from '../views/signup.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/room',
    name: 'room',
    component: Room
  },
  {
    path: '/reserve',
    name: 'reserve',
    component: Reserve
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path : '/test',
    name : 'test',
    component : Test
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
