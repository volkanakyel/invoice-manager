<template>
  <div class="invoice-form">
    <div class="input-container">
      <label class="input-label" for="street-name">Street Address</label>
      <input class="base-input" id="street-name" type="text" />
    </div>
    <div class="invoice-form__input-list">
      <div class="mobile-input-block">
        <label class="input-label" for="city">City</label>
        <input
          class="base-input small-input mobile-input"
          id="city"
          type="text"
        />
      </div>
      <div class="mobile-input-block">
        <label class="input-label" for="postcode">Post Code</label>
        <input
          class="base-input small-input mobile-input"
          id="postcode"
          type="text"
        />
      </div>
      <div class="mobile-input-full-block">
        <label class="input-label" for="country">Country</label>
        <input
          class="base-input small-input mobile-input"
          id="country"
          type="text"
        />
      </div>
    </div>
    <p class="invoice-form__subtitle">Bill To</p>
    <div class="input-container">
      <label class="input-label" for="client-name">Client’s Name</label>
      <input class="base-input" id="street-name" type="text" />
    </div>
    <div class="input-container">
      <label class="input-label" for="client-email">Client’s Email</label>
      <input
        class="base-input"
        id="street-name"
        type="text"
        placeholder="e.g. email@example.com"
      />
    </div>
    <div class="input-container">
      <label class="input-label" for="client-address">Street Address</label>
      <input class="base-input" id="street-name" type="text" />
    </div>
    <div class="invoice-form__input-list">
      <div class="mobile-input-block">
        <label class="input-label" for="city">City</label>
        <input
          class="base-input small-input mobile-input"
          id="city"
          type="text"
        />
      </div>
      <div class="mobile-input-block">
        <label class="input-label" for="postcode">Post Code</label>
        <input
          class="base-input small-input mobile-input"
          id="postcode"
          type="text"
        />
      </div>
      <div class="mobile-input-full-block">
        <label class="input-label" for="country">Country</label>
        <input
          class="base-input small-input mobile-input"
          id="country"
          type="text"
        />
      </div>
    </div>
    <div class="input-container">
      <label class="input-label" for="project-description"
        >Project Description</label
      >
      <input
        class="base-input"
        id="street-name"
        type="text"
        placeholder="e.g. Graphic Design Service"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style scoped lang="scss">
.invoice-form {
  &__input-list {
    display: flex;
    align-items: center;
    gap: $spacing-m;
    flex-wrap: wrap;
    margin-bottom: 48px;
  }
}
</style>
