<template>
  <div>
    <Navbar />

    <div class="container">
      <div class="columns">
        <Menu />
        <Dashboard />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Menu from "@/components/Menu.vue";
import Navbar from "@/components/Navbar.vue";
import Dashboard from "@/components/Dashboard.vue";

export default defineComponent({
  name: "Layout",
  components: {
    Navbar,
    Menu,
    Dashboard,
  },
});
</script>
