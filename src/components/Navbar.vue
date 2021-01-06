<template>
  <!-- START NAV -->
  <nav class="navbar is-white">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item brand-text" href="../index.html"> DJ Admin </a>
        <div class="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="admin.html"> Home </a>
          <a class="navbar-item" href="admin.html"> Orders </a>
          <a class="navbar-item" href="admin.html"> Payments </a>
          <a class="navbar-item" href="admin.html"> Exceptions </a>
          <a class="navbar-item" href="admin.html"> Reports </a>
        </div>
      </div>
      <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
           <a class="navbar-item button" href="/profile">{{user.username}}</a>
          <a href="javascript:void(0)" @click="logout" class="button is-danger">
            Logout
          </a>
         
        </div>
      </div>
    </div>
    </div>
  </nav>
  <!-- END NAV -->
</template>

<script>
import axios from 'axios'
import { useRouter } from 'vue-router'
export default {
    name: "Navbar",
     props: ['user'],
    setup(){
        const router = useRouter()
        const logout = async() => {
            await axios.post('logout', {

            })

            router.push('/login')
        }

        return {
            logout,
        }
    }
}
</script>

