<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title">Login</h3>
          <hr class="login-hr" />
          <p class="subtitle ">Please login to proceed.</p>
          <div class="box">
            <figure class="image is-3by1">
              <img :src="mySvg" />
            </figure>
            <form @submit.prevent="submit">
              <div class="field">
                <div class="control">
                  <input
                    class="input is-large"
                    type="text"
                    placeholder="Your username/Email"
                    autofocus=""
                    required
                    v-model="username"
                  />
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input
                    class="input is-large"
                    type="password"
                    placeholder="Your Password"
                    required
                    v-model="password"
                  />
                </div>
              </div>
              <div class="field">
                <label class="checkbox">
                  <input type="checkbox" />
                  Remember me
                </label>
              </div>
              <button type="submit" class="button is-block is-info is-large is-fullwidth">
                Login <i class="fa fa-sign-in" aria-hidden="true"></i>
              </button>
            </form>
          </div>
          <p class=""><a href="../">Sign Up</a> &nbsp;·&nbsp;</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";
import axios from "axios"
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Login",
  setup() {
    const username = ref("");
    const password = ref("");
    const router = useRouter()
    
    const submit = async() => {
        const response = await axios.post('login', {
            username: username.value,
            password:password.value
        })
       await router.push('/')
    }

    return {
      username,
      password,
      mySvg: require('../assets/img/profile.svg'),
      submit
      
    };
  },
});
</script>

<style src="../assets/scss/login.scss" lang="scss">
</style>