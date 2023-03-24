<template>
  <div class="modal" @click.capture="handleMaskClick">
    <h2 class="modal__title">Confirm Deletion</h2>
    <p class="modal__description">
      Are you sure you want to delete invoice #XM9141? This action cannot be
      undone.
    </p>
    <div class="modal__ctas">
      <button class="action-btn">Cancel</button>
      <button class="action-btn danger">Delete</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  methods: {
    handleMaskClick() {
      this.$emit('closeModal');
    },
  },
});
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
  &__title {
    margin-bottom: 12px;
    font-size: 24px;
  }
  &__description {
    color: #888eb0;
  }
  &__ctas {
    margin-top: 16px;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }
}
.action-btn {
  border: none;
  color: #7e88c3;
  border-radius: 24px;
  padding: 18px;
  font-weight: 700;
}

.primary {
  background: #7c5dfa;
  color: #ffffff;
}
.danger {
  background: #ec5757;
  color: #ffffff;
  &:hover {
    background: #ff9797;
  }
}
</style>
