<template>
  <div class="column is-9">
    <div class="columns dash">
      <div class="column is-6">
        <!-- here -->
        <div class="card events-card">
          <header class="card-header">
            <p class="card-header-title">Profile</p>
          </header>

          <div class="content">
            <form class="mt-5 box" @submit.prevent="submitProfile">
              <div class="field">
                <label class="label">Username</label>
                <div class="control">
                  <input
                    class="input is-medium"
                    name="username"
                    type="text"
                    placeholder="Username"
                    required
                    v-model="username"
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input
                    class="input is-medium"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    v-model="email"
                  />
                </div>
              </div>
              <button class="button is-info">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div class="column is-6">
        <div class="card events-card">
          <header class="card-header">
            <p class="card-header-title">Password Change</p>
          
          </header>

          <div class="content">
            <form class="mt-5 box" @submit.prevent="submitPassword">
              <div class="field">
                <label class="label">Password</label>
                <div class="control">
                  <input
                    class="input is-medium"
                    name="password"
                    type="password"
                    
                    required
                    v-model="password"
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Password Confirm</label>
                <div class="control">
                  <input
                    class="input is-medium"
                    type="password"
                    name="password_confirm"
                    
                    required
                    v-model="password_confirm"
                  />
                </div>
              </div>
              <button class="button is-info" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import { User } from "@/classes/user";
export default {
  name: "Profile",
  setup() {
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const password_confirm = ref("");

    onMounted(async () => {
      const res = await axios.get("user");

      const user: User = res.data.data;
      username.value = user.username; 
      email.value = user.email;
    });

    const submitProfile = async() => {
        await axios.put('user/info', {
            username: username.value,
            email: email.value
        })
    }

    const submitPassword = async () => {
        await axios.put('user/password', {
            password: password.value,
            password_confirm: password_confirm.value
        })

        password.value = ''
        password_confirm.value = ''
    }

    return {
      username,
      email,
      password,
      password_confirm,
      submitProfile,
      submitPassword
    };
  },
};
</script>