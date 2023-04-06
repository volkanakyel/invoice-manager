<template>
  <div class="invoice-creator">
    <div class="invoice-creator__previous back-cta">
      <img
        class="arrow-icon"
        src="../assets/images/icon-arrow-right.svg"
        alt=""
      />
      <p @click="close">Go back</p>
    </div>
    <h2 class="invoice-creator__title">New Invoice</h2>
    <p class="invoice-creator__subtitle">Bill From</p>
    <BilledForm @update="clientData" />
    <ServiceForm @update="serviceData" @projectDescription="getDescription" />

    <div class="invoice-creator__items-list">
      <div class="invoice-creator__actions">
        <button @click="close" class="action-btn secondary">Discard</button>
        <button @click="close" class="action-btn dark">Save as Draft</button>
        <button @click="wrapInvoiceAndSave" class="action-btn primary">
          Save & Send
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import BilledForm from '@/components/BilledForm.vue';
import ServiceForm from '@/components/ServiceForm.vue';
import { Invoice, InvoiceItem } from '@/interfaces/invoice';
import InvoiceItemVue from './InvoiceItem.vue';

export default Vue.extend({
  components: {
    BilledForm,
    ServiceForm,
  },
  data() {
    return {
      billingInfos: {},
      serviceInfos: [],
      description: '',
    };
  },
  methods: {
    ...mapActions({
      addInvoice: 'invoice/addInvoice',
    }),
    clientData(clientData: any) {
      Object.assign(this.billingInfos, clientData);
    },
    serviceData(serviceData: InvoiceItem) {
      (this as any).serviceInfos = serviceData;
    },
    wrapInvoiceAndSave() {
      const invoiceData: Invoice = {
        items: (this as any).serviceInfos,
        ...(this as any).billingInfos,
        description: this.description,
        id: Math.random()
          .toString(36)
          .substring(2, 6 + 2)
          .toUpperCase(),
        total: (this as any).serviceInfos.reduce(
          (a, b) => a + b.quantity * b.price,
          0
        ),
        status: 'paid',
      };
      this.addInvoice(invoiceData);
      this.close();
    },
    getDescription(description: string) {
      this.description = description;
    },
    close() {
      this.$emit('closeInvoiceCreator');
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
