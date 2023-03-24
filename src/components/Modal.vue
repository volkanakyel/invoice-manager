<template>
  <div class="modal">
    <div class="modal__container" @click.capture="handleMaskClick">
      <div class="modal__wrapper">
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
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  methods: {
    handleMaskClick(event: Event) {
      let className: any;
      if (event) {
        // set the 'target' type as HTMLButtonElement, which has 'value'
        className = (event.target as HTMLElement).getAttribute('class');
      }
      if (className === 'modal__wrapper') {
        this.closeModal();
      }
    },
    closeModal() {
      this.$emit('closeModal');
    },
  },
});
</script>

<style scoped lang="scss">
.modal {
  &__container {
    top: 0;
    left: 0;
    z-index: 9998;
    width: 100%;
    height: 100%;
    transition: opacity 0.3s ease;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: table;
  }
  &__wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
    max-width: 480px;
    background-color: #fff;
    padding: 48px;
    border-radius: $border-radius-container;
  }

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
