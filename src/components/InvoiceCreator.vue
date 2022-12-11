<template>
  <div class="invoice-creator">
    <div class="container">
      <p>Go Back</p>
      <h2 class="invoice-creator__title">New Invoice</h2>
      <p class="invoice-creator__subtitle">Bill From</p>
      <label style="display: block" for="street-name">Street Address</label>
      <input class="invoice-creator__large-input" id="street-name" type="text" />
      <div class="invoice-creator__adress">
        <div>
          <label for="city">City</label>
          <input class="invoice-creator__small-input" id="city" type="text" />
        </div>
        <div>
          <label for="postcode">Post Code</label>
          <input class="invoice-creator__small-input" id="postcode" type="text" />
        </div>
        <div>
          <label for="country">Country</label>
          <input class="invoice-creator__small-input" id="country" type="text" />
        </div>
      </div>
      <p class="invoice-creator__subtitle">Bill To</p>
      <label style="display: block" for="street-name">Street Address</label>
      <input class="invoice-creator__large-input" id="street-name" type="text" />
      <div class="invoice-creator__adress">
        <div>
          <label for="city">City</label>
          <input class="invoice-creator__small-input" id="city" type="text" />
        </div>
        <div>
          <label for="postcode">Post Code</label>
          <input class="invoice-creator__small-input" id="postcode" type="text" />
        </div>
        <div>
          <label for="country">Country</label>
          <input class="invoice-creator__small-input" id="country" type="text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style scoped lang="scss">
.invoice-creator {
  height: 100vh;
  position: fixed;
  top: 0;
  left: 96px;
  width: 45%;
  background-color: #fff;
  border-radius: $border-radius-right-corner;
  z-index: 950;
  @media (max-width: 768px) {
    left: 0;
    top: 82px;
    width: 80%;
  }
  @media (max-width: 480px) {
    left: 0;
    top: 82px;
    width: 100%;
  }

  &__title {
    font-size: 24px;
  }
  &__subtitle {
    color: $color-primary;
  }
  &__large-input {
    width: 100%;
    border: 1px solid $color-primary-light;
    border-radius: 4px;
    padding: 6px;
  }
  &__small-input {
    max-width: 150px;
  }
  &__adress {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
.container {
  max-width: 503px;
  margin: 56px;
}
</style>
