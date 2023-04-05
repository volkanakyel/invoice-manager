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
    <BilledForm @update="clientData" />
    <ServiceForm @update="serviceData" />
    <div class="invoice-creator__items-list">
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
import BilledForm from '@/components/BilledForm.vue';
import ServiceForm from '@/components/ServiceForm.vue';

export default Vue.extend({
  components: {
    BilledForm,
    ServiceForm,
  },
  data() {
    return {
      invoiceItem: {},
    };
  },
  methods: {
    clientData(clientData: any) {
      Object.assign(this.invoiceItem, clientData);
    },
    serviceData(serviceData: any) {
      Object.assign(this.invoiceItem, serviceData);
    },
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
  &__items-list {
    button {
      width: 100%;
    }
  }

  &__actions {
    margin-top: 44px;
    display: flex;
    justify-content: center;
    gap: 8px;
  }
}
</style>
