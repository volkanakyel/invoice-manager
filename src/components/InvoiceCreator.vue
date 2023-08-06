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
    <BilledForm @update="clientData" :invoiceItemToEdit="invoiceItemToEdit" />
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
        <button
          v-if="!invoiceItemToEdit"
          @click="wrapInvoiceAndSave"
          class="action-btn primary"
        >
          Save & Send
        </button>
        <button v-else @click="editInvoiceAndSave" class="action-btn primary">
          Save & Send
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
import BilledForm from "@/components/BilledForm.vue";
import ServiceForm from "@/components/ServiceForm.vue";
import { Invoice, InvoiceItem } from "@/interfaces/invoice";

export default Vue.extend({
  components: {
    BilledForm,
    ServiceForm,
  },
  props: {
    invoiceItemToEdit: {
      type: Object as () => Invoice,
      default: null,
    },
  },
  data() {
    return {
      billingInfos: {},
      serviceInfos: [],
      description: "",
    };
  },
  computed: {
    getServiceFormData() {
      return this.invoiceItemToEdit ? this.invoiceItemToEdit.items : null;
    },
  },
  methods: {
    ...mapActions({
      addInvoice: "invoice/addInvoice",
      editInvoice: "invoice/editInvoice",
    }),
    clientData(clientData: any) {
      Object.assign(this.billingInfos, clientData);
    },
    serviceData(serviceData: InvoiceItem) {
      (this as any).serviceInfos = serviceData;
    },
    wrapInvoiceAndSave() {
      (this as any).serviceInfos.forEach((invoice) => {
        invoice.total = invoice.price * invoice.quantity;
      });
      const invoiceData: Invoice = {
        items: (this as any).serviceInfos,
        clientEmail: (this as any).billingInfos.clientEmail,
        clientName: (this as any).billingInfos.clientName,
        clientAddress: { ...(this as any).billingInfos.clientAddress },
        senderAddress: { ...(this as any).billingInfos.senderAddress },
        paymentTerms: 1,
        description: this.description,
        id: Math.random()
          .toString(36)
          .substring(2, 6 + 2)
          .toUpperCase(),
        total: (this as any).serviceInfos.reduce((a, b) => a + b.total, 0),
        status: "paid",
      };
      this.addInvoice(invoiceData);
      this.close();
    },
    editInvoiceAndSave() {
      for (let i = 0; i < (this as any).serviceInfos.length; i++) {
        (this as any).serviceInfos[i].total =
          (this as any).serviceInfos[i].quantity *
          (this as any).serviceInfos[i].price;
      }
      const invoiceData: Invoice = {
        items:
          (this as any).serviceInfos.length > 0
            ? (this as any).serviceInfos
            : this.invoiceItemToEdit.items,
        ...(this as any).billingInfos,
        clientEmail:
          (this as any).billingInfos.clientEmail ||
          (this as any).invoiceItemToEdit.clientEmail,
        clientName:
          (this as any).billingInfos.clientName ||
          (this as any).invoiceItemToEdit.clientName,
        description:
          (this as any).description ||
          (this as any).invoiceItemToEdit.description,
        clientAddress:
          (this as any).billingInfos.clientAddress ||
          (this as any).invoiceItemToEdit.clientAddress,
        senderAddress:
          (this as any).billingInfos.senderAddress ||
          (this as any).invoiceItemToEdit.senderAddress,
        paymentTerms: 1,
        id: this.invoiceItemToEdit.id,
        total:
          (this as any).invoiceItemToEdit.total ||
          (this as any).serviceInfos.reduce(
            (a, b) => a + b.quantity * b.price,
            0
          ),
        status: this.invoiceItemToEdit.status,
      };
      this.$emit("getUpdatedInvoice", invoiceData);
      this.editInvoice(invoiceData);
      this.close();
    },
    getDescription(description: string) {
      this.description = description;
    },
    close() {
      this.$emit("closeInvoiceCreator");
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
