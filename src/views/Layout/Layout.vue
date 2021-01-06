<template>
  <div>
    <Navbar :user="user" />

    <div class="container">
      <div class="columns">
        <Menu />
        <Dashboard :user="user"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import { defineComponent } from "vue";
import Menu from "@/components/Menu.vue";
import Navbar from "@/components/Navbar.vue";
import Dashboard from "@/components/Dashboard.vue";

import axios from "axios";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Layout",
  components: {
    Navbar,
    Menu,
    Dashboard,
  },
  setup() {
    const router = useRouter()
    const user = ref('')
    onMounted(async () => {
      try {
        const res = await axios.get("user");

        user.value = res.data.data
        console.log(res);
      } catch (err) {
        await router.push('/login')
      }
    });

    return {
      user
    }
  },
});
</script>
