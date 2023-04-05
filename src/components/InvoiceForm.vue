<template>
  <form @input="submit" class="invoice-form">
    <div class="input-container">
      <label class="input-label" for="street-name">Street Address</label>
      <input
        v-model="form.senderAddress.street"
        class="base-input"
        id="street-name"
        type="text"
      />
    </div>
    <div class="invoice-form__input-list">
      <div class="mobile-input-block">
        <label class="input-label" for="city">City</label>
        <input
          v-model="form.senderAddress.city"
          class="base-input mobile-input"
          id="city"
          type="text"
        />
      </div>
      <div class="mobile-input-block">
        <label class="input-label" for="postcode">Post Code</label>
        <input
          v-model="form.senderAddress.postCode"
          class="base-input mobile-input"
          id="postcode"
          type="text"
        />
      </div>
      <div class="mobile-input-full-block">
        <label class="input-label" for="country">Country</label>
        <input
          v-model="form.senderAddress.country"
          class="base-input mobile-input"
          id="country"
          type="text"
        />
      </div>
    </div>
    <p class="invoice-form__subtitle">Bill To</p>
    <div class="input-container">
      <label class="input-label" for="client-name">Client’s Name</label>
      <input
        v-model="form.clientName"
        class="base-input"
        id="client-name"
        type="text"
      />
    </div>
    <div class="input-container">
      <label class="input-label" for="client-email">Client’s Email</label>
      <input
        v-model="form.clientEmail"
        class="base-input"
        id="street-name"
        type="text"
        placeholder="e.g. email@example.com"
      />
    </div>
    <div class="input-container">
      <label class="input-label" for="client-address">Street Address</label>
      <input
        v-model="form.clientAddress.street"
        class="base-input"
        id="client-address"
        type="text"
      />
    </div>
    <div class="invoice-form__input-list">
      <div class="mobile-input-block">
        <label class="input-label" for="client-city">City</label>
        <input
          v-model="form.clientAddress.city"
          class="base-input mobile-input"
          id="client-city"
          type="text"
        />
      </div>
      <div class="mobile-input-block">
        <label class="input-label" for="client-postcode">Post Code</label>
        <input
          v-model="form.clientAddress.postCode"
          class="base-input mobile-input"
          id="client-postcode"
          type="text"
        />
      </div>
      <div class="mobile-input-full-block">
        <label class="input-label" for="client-country">Country</label>
        <input
          v-model="form.clientAddress.country"
          class="base-input mobile-input"
          id="client-country"
          type="text"
        />
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      form: {
        clientName: '',
        clientEmail: '',
        senderAddress: {
          street: '',
          city: '',
          postCode: '',
          country: '',
        },
        clientAddress: {
          street: '',
          city: '',
          postCode: '',
          country: '',
        },
      },
    };
  },
  methods: {
    submit() {
      this.$emit('update', this.form);
    },
  },
});
</script>

<style scoped lang="scss">
.invoice-form {
  &__input-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: $spacing-m;
    flex-wrap: wrap;
    margin-bottom: 48px;
  }
}
</style>
