<template>
  
    <div class="columns is-multiline reg">
      <div class="column box is-8 is-offset-2 register">
        <div class="columns">
          <div class="column left">
            <h1 class="title is-1">DJ DASH</h1>
            <h2 class="subtitle colored is-4">Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              ex deleniti aliquam tempora libero excepturi vero soluta odio
              optio sed.
            </p>
          </div>
          <div class="column right has-text-centered">
            <h1 class="title is-4">Sign up today</h1>
            <p class="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit
            </p>
            <form @submit.prevent="submit">
              <div class="field">
                <div class="control">
                  <input
                    class="input is-medium"
                    type="text"
                    placeholder="Username"
                    required
                    v-model="username"
                  />
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input
                    class="input is-medium"
                    type="email"
                    placeholder="Email"
                    required
                    v-model="email"
                  />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    class="input is-medium"
                    type="password"
                    placeholder="Password"
                    required
                    v-model="password"
                  />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    class="input is-medium"
                    type="password"
                    placeholder="Confirm Password"
                    required
                    v-model="password_confirm"
                  />
                </div>
              </div>
              <button class="button is-block is-primary is-fullwidth is-medium">
                Submit
              </button>
              <br />
              <small><em>Lorem ipsum dolor sit amet consectetur.</em></small>
            </form>
          </div>
        </div>
      </div>
      <div class="column is-8 is-offset-2">
        <br />
        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
              &emsp;
              <span class="icon">
                <i class="fab fa-facebook"></i>
              </span>
              &emsp;
              <span class="icon">
                <i class="fab fa-instagram"></i>
              </span>
              &emsp;
              <span class="icon">
                <i class="fab fa-github"></i>
              </span>
              &emsp;
              <span class="icon">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <div class="level-right">
            <small class="level-item" style="color: white">
              &copy; Dj Dash. All Rights Reserved.
            </small>
          </div>
        </nav>
      </div>
    </div>
 
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";

import axios from "axios";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Register",

  setup() {
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const password_confirm = ref("");
    const router = useRouter();

    const submit = async () => {
      const res = await axios.post("register", {
        username: username.value,
        email: email.value,
        password: password.value,
        password_confirm: password_confirm.value,
      });

      console.log(res);

      await router.push("/login");
    };

    return {
      username,
      email,
      password,
      password_confirm,
      submit,
    };
  },
});
</script>



<style src="../assets/scss/register.scss" lang="scss">
</style>