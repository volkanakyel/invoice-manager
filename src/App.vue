<template>
  <div class="invoice-builder">
    <Navbar />
    <InvoiceCreator v-if="isInvoiceFunnelDiplayed" />
    <div class="app-container">
      <Header
        @showInvoiceCreation="displayInvoiceCreationFunnel"
        v-if="!isInvoiceDisplay"
      />
      <div v-if="invoiceNumber && !isInvoiceDisplay" class="invoices-list">
        <InvoiceItem @showInvoice="invoiceDetails" />
        <InvoiceItem @showInvoice="invoiceDetails" />
        <InvoiceItem @showInvoice="invoiceDetails" />
        <InvoiceItem @showInvoice="invoiceDetails" />
        <InvoiceItem @showInvoice="invoiceDetails" />
        <InvoiceItem @showInvoice="invoiceDetails" />
        <InvoiceItem @showInvoice="invoiceDetails" />
        <InvoiceItem @showInvoice="invoiceDetails" />
        <InvoiceItem @showInvoice="invoiceDetails" />
      </div>
      <InvoiceDetails
        @backToInvoiceList="displayInvoiceList"
        v-else-if="invoiceNumber && isInvoiceDisplay"
      />
      <EmptyContainer v-else />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// eslint-disable-next-line import/no-unresolved
import Navbar from '@/components/Navbar.vue';
import InvoiceDetails from '@/components/InvoiceDetails.vue';
import Header from '@/components/Header.vue';
import InvoiceItem from '@/components/InvoiceItem.vue';
import InvoiceCreator from '@/components/InvoiceCreator.vue';
import EmptyContainer from '@/components/EmptyContainer.vue';

export default Vue.extend({
  components: {
    Navbar,
    Header,
    InvoiceItem,
    InvoiceCreator,
    InvoiceDetails,
    EmptyContainer,
  },
  data() {
    return {
      isInvoiceDisplay: false,
      isInvoiceFunnelDiplayed: false,
      invoiceNumber: 6,
    };
  },
  methods: {
    invoiceDetails(invoiceView: boolean) {
      this.isInvoiceDisplay = invoiceView;
    },
    displayInvoiceList() {
      this.isInvoiceDisplay = false;
    },
    displayInvoiceCreationFunnel() {
      this.isInvoiceFunnelDiplayed = true;
    },
  },
});
</script>

<style scoped lang="scss">
.app-container {
  width: 100%;
  margin: 56px 48px 0 144px;
  @media (max-width: 768px) {
    margin: 56px auto;
  }
  @media (max-width: 680px) {
    margin: 0 auto;
  }
}
.invoices-list {
  max-width: 730px;
  margin: 56px auto;
  @media (max-width: 768px) {
    margin: 56px 48px;
    max-width: 672px;
  }
  @media (max-width: 680px) {
    margin: 0 24px;
  }
}
</style>
