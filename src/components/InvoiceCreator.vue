<template>
  <div class="invoice-creator">
    <div class="invoice-creator__previous back-cta">
      <img
        class="arrow-icon"
        src="../assets/images/icon-arrow-right.svg"
        alt=""
      />
      <p>Go back</p>
    </div>
    <h2 class="invoice-creator__title">New Invoice</h2>
    <p class="invoice-creator__subtitle">Bill From</p>
    <InvoiceForm />
    <div class="invoice-creator__items-list">
      <p class="invoice-creator__item-list-title">Item List</p>
      <div class="invoice-creator__items-container">
        <p>Item Name</p>
        <p>Qty.</p>
        <p>Price</p>
        <p>Total</p>
      </div>
      <button class="action-btn secondary">+ Add New Item</button>
      <div class="invoice-creator__actions">
        <button class="action-btn secondary">Discard</button>
        <button class="action-btn dark">Save as Draft</button>
        <button class="action-btn primary">Save & Send</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import InvoiceForm from '@/components/InvoiceForm.vue';

export default Vue.extend({
  components: {
    InvoiceForm,
  },
});
</script>

<style scoped lang="scss">
.invoice-creator {
  &__previous {
    @media (min-width: 480px) {
      display: none;
    }
  }
  &__title {
    font-size: $font-size-xl;
    margin-bottom: 46px;
    margin-top: 24px;
  }
  &__subtitle {
    color: $color-primary;
    font-weight: 700;
    margin-bottom: $spacing-m;
  }
  &__item-list-title {
    font-size: 18px;
    font-weight: 700;
    color: $color-grey-dark;
    margin-bottom: $spacing-s;
  }
  &__items-list {
    button {
      width: 100%;
    }
  }
  &__items-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: $spacing-s;
    color: $color-primary-light;
  }
  &__actions {
    margin-top: 44px;
    display: flex;
    justify-content: center;
    gap: 8px;
  }
  &__actions-ctas {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>
