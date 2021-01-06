<template>
  <Layout />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Layout from "@/views/Layout/Layout.vue"

export default defineComponent({
  name: 'Home',
  components: {
   Layout,
  },
});
</script>

<style src="../_main.scss" lang="scss">

</style>