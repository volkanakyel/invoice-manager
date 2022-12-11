<template>
  <div class="invoice-list-empty">
    <div class="invoice-list-empty__container">
      <img src="../assets/images/illustration-empty.svg" alt="" />
      <h2>There is nothing here</h2>
      <p>Create an invoice by clicking the New button and get started</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style scoped lang="scss">
.invoice-list-empty {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &__container {
    text-align: center;
  }
}
</style>
