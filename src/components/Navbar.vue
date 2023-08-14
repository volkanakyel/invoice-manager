<template>
  <div class="navbar">
    <router-link to="/">
      <div class="navbar__logo-container">
        <img src="../assets/images/logo.svg" alt="" />
      </div>
    </router-link>
    <div class="navbar__items">
      <img
        @click="logout"
        v-if="userLoggedIn"
        class="navbar__avatar"
        src="../assets/images/icon-logout.svg"
        alt="logout"
      />
      <img
        class="navbar__app-mode"
        src="../assets/images/icon-sun.svg"
        alt="app-mode"
      />
      <div class="navbar__separator"></div>
      <router-link to="/">
        <img
          class="navbar__avatar"
          src="../assets/images/image-avatar.jpg"
          alt="profile-avatar"
        />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { firebaseAuth } from "../../firebase";

export default Vue.extend({
  data() {
    return {
      userLoggedIn: false,
    };
  },
  created() {
    firebaseAuth.onAuthStateChanged((user) => {
      this.userLoggedIn = !!user;
    });
  },
  methods: {
    logout() {
      firebaseAuth
        .signOut()
        .then(() => {
          // User successfully signed out
          this.$router.push("/login");
        })
        .catch((error) => {
          // Handle logout error
          console.error("Error:", error);
        });
    },
  },
});
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
  max-width: 81px;
  @media (max-width: 768px) {
    max-width: 100%;
    border-radius: 0;
    height: 100%;
    flex-direction: row;
    position: relative;
  }
  &__logo-container {
    cursor: pointer;
    background-color: $color-primary;
    border-radius: $border-radius-right-corner;
    padding: $spacing-m $spacing-l;
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
    cursor: pointer;
    margin: $spacing-m $spacing-l;
  }
  &__avatar {
    margin: $spacing-m $spacing-l;
    border-radius: $border-round;
    width: $spacing-l;
    height: $spacing-l;
  }
}
</style>
