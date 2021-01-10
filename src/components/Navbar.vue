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
            <router-link class="navbar-item" to="/profile">
              Welocme, &nbsp;{{user.username}}
             </router-link
            >
            <div v-if="user">
            <a
              href="javascript:void(0)"
              @click="logout"
              class="button is-danger"

            >
              Logout
            </a>
            </div>
            <div v-else>
            <router-link to="/register" class="button is-primary">
              <strong>Sign up</strong>
            </router-link>
            <router-link to="/login" class="button is-light">
              Log in
            </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!-- END NAV -->
</template>

<script lang="ts">
import axios from "axios";
import { useRouter } from "vue-router";
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: "Navbar",
 
  setup() {
    const router = useRouter();
    const store = useStore()

    const user = computed(() => store.state.User.user )

    const logout = async () => {
      await axios.post("logout", {});

      router.push("/login");
    };

    return {
      user,
      logout
      
    };
  },
};
</script>

