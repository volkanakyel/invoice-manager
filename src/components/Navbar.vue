<template>
  <div class="navbar">
    <div class="navbar__logo-container">
      <img class="navbar__logo" src="../assets/images/logo.svg" alt="" />
    </div>
    <div class="navbar__items">
      <img
        class="navbar__app-mode"
        src="../assets/images/icon-sun.svg"
        alt=""
      />
      <div class="navbar__separator"></div>
      <img
        class="navbar__avatar"
        src="../assets/images/image-avatar.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style scoped lang="scss">
.navbar {
  background-color: $color-secondary-dark;
  height: 100vh;
  display: flex;
  position: fixed;
  z-index: 999;
  flex-direction: column;
  justify-content: space-between;
  border-radius: $border-radius-right-corner;
  max-width: 96px;
  @media (max-width: 768px) {
    max-width: 100%;
    border-radius: 0;
    height: 100%;
    flex-direction: row;
    position: relative;
  }
  &__logo-container {
    background-color: $color-primary;
    border-radius: $border-radius-right-corner;
    padding: 24px 32px;
  }
  &__items {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: row;
    }
  }
  &__separator {
    height: 100%;
    border-left: 1px solid $color-tertiary-dark;
  }
  &__app-mode {
    margin: 24px 32px;
  }
  &__avatar {
    margin: 24px 32px;
    border-radius: $border-round;
    width: 32px;
    height: 32px;
  }
}
</style>
