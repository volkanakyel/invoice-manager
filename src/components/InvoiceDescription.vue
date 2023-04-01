<template>
  <div class="invoice-description">
    <div class="invoice-description__category-list">
      <div class="invoice-description__category-item">
        <p class="invoice-description__subtitle">Item name</p>
        <p class="invoice-description__title">Banner Design</p>
        <p class="invoice-description__title">Email Design</p>
      </div>
      <div class="invoice-description__category-item">
        <p class="invoice-description__subtitle">QTY.</p>
        <p class="invoice-description__subtitle">1</p>
        <p class="invoice-description__subtitle">2</p>
      </div>
      <div class="invoice-description__category-item">
        <p class="invoice-description__subtitle">Price</p>
        <p class="invoice-description__subtitle">£ 156.00</p>
        <p class="invoice-description__subtitle">£ 200.00</p>
      </div>
      <div class="invoice-description__category-item">
        <p class="invoice-description__subtitle">Total</p>
        <p class="invoice-description__title">£ 156.00</p>
        <p class="invoice-description__title">£ 200.00</p>
      </div>
    </div>
    <div class="invoice-description__price-banner">
      <p>Amount Due</p>
      <p style="font-size: 24px">£ 555</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { InvoiceItem } from '@/interfaces/invoice';

export default Vue.extend({
  props: {
    serviceProvided: {
      type: Array as () => InvoiceItem[],
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.invoice-description {
  &__category-list {
    margin-top: 46px;
    background: #f9fafe;
    border-radius: 8px 8px 0px 0px;
    padding: $spacing-l $spacing-l $spacing-xl $spacing-l;
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-xxxl;
    justify-content: space-between;
    align-items: center;
  }
  &__category-item {
    p:not(:first-child) {
      margin-top: 32px;
    }
  }
  &__subtitle {
    color: $color-primary-light;
  }
  &__title {
    font-weight: 700;
  }
  &__price-banner {
    background: $color-primary-dark;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $color-white;
    border-radius: 0px 0px 8px 8px;
    padding: $spacing-l $spacing-m;
  }
}
</style>
