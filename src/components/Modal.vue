<template>
  <div class="modal">
    <h2>Confirm Deletion</h2>
    <p>Are you sure you want to delete invoice #XM9141? This action cannot be undone.</p>
    <div class="modal__ctas">
      <button class="main-button">Cancel</button>
      <button class="main-button--danger">Delete</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 480px;
  background-color: #fff;
  padding: 48px;
  border-radius: $border-radius-container;
  &__ctas {
    margin-top: 16px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
