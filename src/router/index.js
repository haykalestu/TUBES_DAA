import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListKost from '@/views/ListKost.vue'
import ListApart from '@/views/ListApart.vue'
import LoginForm from '@/views/LoginForm.vue'
import RegisterForm from '@/views/RegisterForm.vue'
import RoleSelection from '@/views/RoleSelection.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/view/ListKost',
    name: 'ListKost',
    component: ListKost
  },
  {
    path: '/view/ListApart',
    name: 'ListApart',
    component: ListApart
  },
  {
    path: '/view/LoginForm',
    name: 'LoginForm',
    component: LoginForm
  },
  {
    path: '/view/RegisterForm',
    name: 'RegisterForm',
    component: RegisterForm
  },
  {
    path: '/view/Roleselection',
    name: 'Roleselection',
    component: RoleSelection
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router