<template>
  <div class="invoice-description">
    <div class="invoice-description__container">
      <div class="invoice-description__category-list">
        <p class="invoice-description__subtitle">Item name</p>
        <p class="invoice-description__subtitle">QTY.</p>
        <p class="invoice-description__subtitle">Price</p>
        <p class="invoice-description__subtitle">Total</p>
      </div>
      <div
        class="invoice-description__category-items"
        v-for="(service, item) in serviceProvided"
        :key="item"
      >
        <div class="invoice-description__category-item">
          <p class="invoice-description__title">{{ service.name }}</p>
        </div>
        <div class="invoice-description__category-item">
          <p class="invoice-description__subtitle">{{ service.quantity }}</p>
        </div>
        <div class="invoice-description__category-item">
          <p class="invoice-description__subtitle">£ {{ service.price }}</p>
        </div>
        <div class="invoice-description__category-item">
          <p class="invoice-description__title">£ {{ service.total }}</p>
        </div>
      </div>
    </div>
    <div class="invoice-description__price-banner">
      <p>Amount Due</p>
      <p class="invoice-description__price">£ {{ totalPrice }}</p>
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
    totalPrice: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.invoice-description {
  &__container {
    margin-top: 46px;
    background: #f9fafe;
    border-radius: 8px 8px 0px 0px;
    padding: $spacing-l $spacing-l $spacing-xl $spacing-l;
  }
  &__category-list {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-xxxl;
    justify-content: space-between;
    align-items: center;
  }
  &__category-items {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-xxxl;
    justify-content: space-between;
    align-items: center;
  }
  &__category-item {
    margin-top: 32px;
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
  &__price {
    font-size: 24px;
  }
}
</style>
