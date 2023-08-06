<template>
  <div class="app-container">
    <InvoiceFunnel :open="funnelStatus" @close="closeFunnel"
      ><InvoiceCreator @closeInvoiceCreator="closeFunnel"
    /></InvoiceFunnel>
    <InvoicesList :invoicesList="getFilteredInvoice" />
    <EmptyContainer v-if="isInvoiceItemsEmpty" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import InvoiceFunnel from "@/components/InvoiceFunnel.vue";
import InvoicesList from "@/components/InvoicesList.vue";
import InvoiceCreator from "@/components/InvoiceCreator.vue";
import EmptyContainer from "@/components/EmptyContainer.vue";
import { Invoice } from "@/interfaces/invoice";

export default Vue.extend({
  components: {
    InvoicesList,
    InvoiceCreator,
    EmptyContainer,
    InvoiceFunnel,
  },
  data() {
    return {
      isInvoiceDisplay: false,
      activeInvoice: {} as Invoice,
    };
  },
  computed: {
    ...mapGetters({
      getFilteredInvoice: "invoice/getFilteredInvoice",
      funnelStatus: "funnel/funnelStatus",
    }),
    isInvoiceItemsEmpty(): boolean {
      return !(this.getFilteredInvoice.length > 0);
    },
  },
  methods: {
    ...mapActions({
      displayFunnel: "funnel/displayFunnel",
      closeFunnel: "funnel/closeFunnel",
      fetchInvoiceItems: "invoice/fetchInvoiceItems",
    }),
    invoiceDetails(invoice: Invoice) {
      this.$router.push({
        name: "Invoice",
        params: { id: invoice.id },
      });
    },
    displayInvoiceList() {
      this.isInvoiceDisplay = false;
    },
  },
  created() {
    // Feed the store, could be asynchronous
    this.fetchInvoiceItems();
  },
});
</script>

<style scoped lang="scss">
.app-container {
  width: 100%;
  margin: $spacing-xxxl $spacing-xxl 0 144px;
  @media (max-width: 768px) {
    margin: $spacing-xxxl auto;
  }
  @media (max-width: 680px) {
    margin: 0 auto;
  }
}
.invoices-list {
  max-width: 730px;
  margin: $spacing-xxxl auto;
  @media (max-width: 768px) {
    margin: $spacing-xxxl $spacing-xxl;
    max-width: 672px;
  }
  @media (max-width: 680px) {
    margin: 0 $spacing-m;
  }
}
</style>
