<template>
  <div class="invoice-description">
    <div class="invoice-description__container">
      <div class="invoice-description__category-list only-mobile-active">
        <p class="invoice-description__subtitle">Item name</p>
        <p style="justify-self: center" class="invoice-description__subtitle">
          QTY.
        </p>
        <p style="justify-self: end" class="invoice-description__subtitle">
          Price
        </p>
        <p style="justify-self: end" class="invoice-description__subtitle">
          Total
        </p>
      </div>
      <div
        class="invoice-description__category-items"
        v-for="(service, item) in serviceProvided"
        :key="item"
      >
        <div class="invoice-description__category-item">
          <p class="invoice-description__title">{{ service.name }}</p>
          <p
            class="invoice-description__subtitle invoice-description__title only-mobile-active"
          >
            {{ service.quantity }} x £ {{ service.price }}
          </p>
        </div>
        <div
          style="justify-self: center"
          class="invoice-description__category-item only-tab-active"
        >
          <p class="invoice-description__subtitle">{{ service.quantity }}</p>
        </div>
        <div
          style="justify-self: end"
          class="invoice-description__category-item only-tab-active"
        >
          <p class="invoice-description__subtitle">£ {{ service.price }}</p>
        </div>
        <div
          style="justify-self: end"
          class="invoice-description__category-item"
        >
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
@import "@/assets/scss/abstracts/_variables.scss";
.invoice-description {
  &__container {
    margin-top: 46px;
    background: #f9fafe;
    border-radius: 8px 8px 0px 0px;
    padding: $spacing-l $spacing-l $spacing-xl $spacing-l;
    @media (max-width: 480px) {
      padding: $spacing-m;
    }
  }
  &__category-list {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    justify-content: center;
    margin-bottom: $spacing-l;
    @media (max-width: 480px) {
      display: none;
    }
  }
  &__category-items {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: end;

    &:not(:last-child) {
      margin-bottom: $spacing-l;
    }
    @media (max-width: 480px) {
      margin-bottom: $spacing-m;
      grid-template-columns: 1fr 1fr;
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
  &__price {
    font-size: 24px;
  }
}
</style>
