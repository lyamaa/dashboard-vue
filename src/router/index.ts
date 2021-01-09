import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Register from "../views/Register.vue"
import Login from "../views/Login.vue"
import Users from "@/views/users/Users.vue"
import Roles from "@/views/roles/Roles.vue"
import UserCreate from "@/views/users/UserCreate.vue"
import UserEdit from "@/views/users/UserEdit.vue"
import Home from "@/views/Layout/Home.vue"
import Dashboard from "@/components/Dashboard.vue"
import RolesCreate from "@/views/roles/RolesCreate.vue"
import RolesEdit from "@/views/roles/RolesEdit.vue"


const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'Home',
    component: Home,
    children: [
      {path: '', redirect: '/dashboard'},
      {path: '/dashboard', component: Dashboard},
      {path: '/users', component: Users},
      {path: '/roles', component: Roles},
      {path: '/user/create', component: UserCreate},
      {path: '/users/:id/edit', component: UserEdit},
      {path: '/roles/create', component: RolesCreate},
      {path: '/roles/:id/edit', component: RolesEdit},
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
