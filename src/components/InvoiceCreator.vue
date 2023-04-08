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
    <BilledForm @update="clientData" :invoiceItemToEdit="getBillingFormData" />
    <ServiceForm
      @update="serviceData"
      @projectDescription="getDescription"
      :invoiceItemToEdit="getServiceFormData"
      :serviceNameToEdit="invoiceItemToEdit?.description"
    />

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

export default Vue.extend({
  components: {
    BilledForm,
    ServiceForm,
  },
  props: {
    invoiceItemToEdit: {
      type: Object as () => Invoice,
      required: false,
    },
  },
  data() {
    return {
      billingInfos: {},
      serviceInfos: [],
      description: '',
    };
  },
  computed: {
    getBillingFormData() {
      return this.invoiceItemToEdit
        ? {
            clientName: this.invoiceItemToEdit.clientName,
            clientEmail: this.invoiceItemToEdit.clientEmail,
            senderAddress: {
              street: this.invoiceItemToEdit.senderAddress.street,
              city: this.invoiceItemToEdit.senderAddress.city,
              postCode: this.invoiceItemToEdit.senderAddress.postCode,
              country: this.invoiceItemToEdit.senderAddress.country,
            },
            clientAddress: {
              street: this.invoiceItemToEdit.clientAddress.street,
              city: this.invoiceItemToEdit.clientAddress.city,
              postCode: this.invoiceItemToEdit.clientAddress.postCode,
              country: this.invoiceItemToEdit.clientAddress.country,
            },
          }
        : null;
    },
    getServiceFormData() {
      return this.invoiceItemToEdit ? this.invoiceItemToEdit.items : null;
    },
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
