<template>
  <router-view></router-view>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
// import InvoiceFunnel from "@/components/InvoiceFunnel.vue";
// import Navbar from "@/components/Navbar.vue";
// import InvoiceDetails from "@/components/InvoiceDetails.vue";
// import Header from "@/components/Header.vue";
// import InvoiceItem from "@/components/InvoiceItem.vue";
// import InvoiceCreator from "@/components/InvoiceCreator.vue";
// import EmptyContainer from "@/components/EmptyContainer.vue";

export default Vue.extend({
  data() {
    return {
      isInvoiceDisplay: false,
      activeInvoice: {},
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
    invoiceDetails(invoiceData: any) {
      this.isInvoiceDisplay = invoiceData.invoiceView;
      this.activeInvoice = invoiceData.invoiceItem;
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
