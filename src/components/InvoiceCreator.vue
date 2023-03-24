<template>
  <div class="invoice-creator">
    <div class="container">
      <h2 class="invoice-creator__title">New Invoice</h2>
      <p class="invoice-creator__subtitle">Bill From</p>
      <div class="invoice-creator__input-container">
        <label class="invoice-creator__label" for="street-name"
          >Street Address</label
        >
        <input
          class="invoice-creator__large-input"
          id="street-name"
          type="text"
        />
      </div>
      <div class="invoice-creator__input-row">
        <div class="invoice-creator__input-row--element">
          <label class="invoice-creator__label" for="city">City</label>
          <input class="invoice-creator__small-input" id="city" type="text" />
        </div>
        <div>
          <label class="invoice-creator__label" for="postcode">Post Code</label>
          <input
            class="invoice-creator__small-input"
            id="postcode"
            type="text"
          />
        </div>
        <div>
          <label class="invoice-creator__label" for="country">Country</label>
          <input
            class="invoice-creator__small-input"
            id="country"
            type="text"
          />
        </div>
      </div>
      <p class="invoice-creator__subtitle">Bill To</p>
      <div class="invoice-creator__input-container">
        <label class="invoice-creator__label" for="client-name"
          >Client’s Name</label
        >
        <input
          class="invoice-creator__large-input"
          id="street-name"
          type="text"
        />
      </div>
      <div class="invoice-creator__input-container">
        <label class="invoice-creator__label" for="client-email"
          >Client’s Email</label
        >
        <input
          class="invoice-creator__large-input"
          id="street-name"
          type="text"
        />
      </div>
      <div class="invoice-creator__input-container">
        <label class="invoice-creator__label" for="client-address"
          >Street Address</label
        >
        <input
          class="invoice-creator__large-input"
          id="street-name"
          type="text"
        />
      </div>
      <div class="invoice-creator__input-row">
        <div class="invoice-creator__input-row--element">
          <label class="invoice-creator__label" for="city">City</label>
          <input class="invoice-creator__small-input" id="city" type="text" />
        </div>
        <div>
          <label class="invoice-creator__label" for="postcode">Post Code</label>
          <input
            class="invoice-creator__small-input"
            id="postcode"
            type="text"
          />
        </div>
        <div>
          <label class="invoice-creator__label" for="country">Country</label>
          <input
            class="invoice-creator__small-input"
            id="country"
            type="text"
          />
        </div>
      </div>
      <div class="invoice-creator__input-container">
        <label class="invoice-creator__label" for="project-description"
          >Project Description</label
        >
        <input
          class="invoice-creator__large-input"
          id="street-name"
          type="text"
        />
      </div>
      <button class="invoice-item-btn">+ Add New Item</button>
      <div class="actions-button">
        <button class="action-btn">Cancel</button>
        <button class="action-btn primary">Save Changes</button>
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
  overflow-y: scroll;
  top: 0;
  left: 96px;
  max-width: 720px;
  background-color: #fff;
  border-radius: $border-radius-right-corner;
  z-index: 950;
  @media (max-width: 768px) {
    left: 0;
    top: 82px;
    width: 620px;
  }
  @media (max-width: 680px) {
    left: 0;
    top: 82px;
    width: 100%;
  }

  &__title {
    font-size: 24px;
    margin-bottom: 46px;
  }
  &__subtitle {
    color: $color-primary;
    font-weight: 700;
    margin-bottom: 24px;
  }
  &__label {
    color: #7e88c3;
    margin-bottom: 10px;
  }
  &__input-container {
    margin-bottom: 24px;
  }
  &__input-row {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-bottom: 48px;
    &--element {
    }
  }
  &__large-input {
    width: 100%;
    border: 1px solid #dfe3fa;
    border-radius: 4px;
    padding: 6px;
  }
  &__small-input {
    max-width: 150px;
    border: 1px solid #dfe3fa;
    border-radius: 4px;
    padding: 6px;
  }
}
.container {
  max-width: 503px;
  margin: 56px;
}
.invoice-item-btn {
  background: #dfe3fa;
  border-radius: 24px;
  cursor: pointer;
  width: 100%;
  border: none;
  padding: 18px;
  color: #7e88c3;
  font-weight: 700;
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
.actions-button {
  margin-top: 44px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
</style>
