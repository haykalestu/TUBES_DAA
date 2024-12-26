import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListKost from '@/views/ListKost.vue'
import ListApart from '@/views/ListApart.vue'
import LoginForm from '@/views/LoginForm.vue'
import RegisterForm from '@/views/RegisterForm.vue'
import RoleSelection from '@/views/RoleSelection.vue'
import RegisterPenjual from '@/views/RegisterPenjual.vue'
import HomePage from '@/views/HomePage.vue'
import ApartDetail from '@/views/ApartDetail.vue'
import AdminLogin from '@/views/AdminLogin.vue'
import AdminDashboard from '@/views/AdminDashboard.vue'
import UserHome from '@/views/UserHome.vue'
import AdminTambah from '@/views/AdminTambah.vue'
import AdminDashboard_1 from '@/views/AdminDashboard_1.vue'




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
    path: '/view/AdminTambah',
    name: 'AdminTambah',
    component: AdminTambah
  },
  {
    path: '/view/UserHome',
    name: 'UserHome',
    component: UserHome
  },
  {
    path: '/view/HomeView',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/view/AdminLogin',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/view/ApartDetail/:id',
    name: 'ApartDetail',
    component: ApartDetail
  },
  {
    path: '/view/HomePage',
    name: 'HomePage',
    component: HomePage
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
    path: "/admin/dashboard",
    name: "AdminDashboard",
    component: AdminDashboard,
    
  },
  {
    path: "/admin/dashboard1",
    name: "AdminDashboard1",
    component: AdminDashboard_1,
    
  },
  {
    path: '/view/RegisterPenjual',
    name: 'RegisterPenjual',
    component: RegisterPenjual
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
