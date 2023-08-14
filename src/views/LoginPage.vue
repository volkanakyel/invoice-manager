<template>
  <div class="login-page">
    <div class="login-page__container">
      <header class="header-section">
        <div class="header-section__main">
          <h2 class="header-section__title">Login to your account</h2>
          <p class="header-section__subtitle only-desktop-active">
            Login or <router-link to="/signup">Create an account</router-link>
          </p>
        </div>
      </header>
      <form @submit.prevent="login" class="login-page__form">
        <div class="input-container">
          <label class="input-label" for="street-name">Email</label>
          <input
            v-model="loginForm.email"
            class="base-input"
            id="email"
            placeholder="john@example.com"
            type="email"
            autocomplete="username"
          />
        </div>
        <div class="input-container">
          <label class="input-label" for="street-name">Password</label>
          <input
            v-model="loginForm.password"
            class="base-input"
            id="password"
            type="password"
            autocomplete="current-password"
          />
        </div>
        <button class="main-button" type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { firebaseAuth } from "../../firebase";

export default Vue.extend({
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      firebaseAuth
        .signInWithEmailAndPassword(
          this.loginForm.email,
          this.loginForm.password
        )
        .then((user) => {
          this.$router.push("/");
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error("Error:", error);
        });
    },
  },
});
</script>

<style scoped lang="scss">
.billed-form {
  &__input-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: $spacing-m;
    flex-wrap: wrap;
    margin-bottom: 48px;
  }
}
.login-page {
  max-width: 730px;
  margin: $spacing-xxxl auto;

  &__form {
    margin-top: 32px;
  }
  &__container {
    max-width: 374px;
    padding: $spacing-s;
    margin: 0 auto;
  }
}
.header-section {
  display: flex;
  justify-content: space-between;
  max-width: 730px;
  &__title {
    font-size: $font-size-xxl;
    @media (max-width: 680px) {
      font-size: 20px;
    }
  }
  &__subtitle {
    color: $color-grey-light-2;
  }
  &__actions {
    display: flex;
    align-items: center;
    gap: 40px;
    @media (max-width: 680px) {
      gap: 12px;
    }
  }
}
</style>
