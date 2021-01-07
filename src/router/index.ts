import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Register from "../views/Register.vue"
import Login from "../views/Login.vue"
import Users from "@/views/users/Users.vue"
import Home from "@/views/Layout/Home.vue"
import Dashboard from "@/components/Dashboard.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'Home',
    component: Home,
    children: [
      {path: '', redirect: '/dashboard'},
      {path: '/dashboard', component: Dashboard},
      {path: '/users', component: Users}
    ]
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
 
    
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
