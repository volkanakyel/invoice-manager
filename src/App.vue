<template>
  <div class="invoice-builder">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "@/components/Navbar.vue";

export default Vue.extend({
  components: {
    Navbar,
  },
});
</script>

<style scoped lang="scss"></style>
