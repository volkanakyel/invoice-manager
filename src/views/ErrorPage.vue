<template>
  <div class="app-container">
    <EmptyContainer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import EmptyContainer from "@/components/EmptyContainer.vue";

export default Vue.extend({
  components: {
    EmptyContainer,
  },
});
</script>

<style scoped lang="scss"></style>
