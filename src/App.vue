<template>
  <div class="invoice-builder">
    <Navbar />
    <InvoiceCreator v-if="0" />
    <div class="app-container">
      <Header v-if="!isInvoiceDisplay" />
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
        <Modal v-if="0" />
      </div>
      <InvoiceDetails v-else-if="invoiceNumber && isInvoiceDisplay" />
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
import Modal from '@/components/Modal.vue';

export default Vue.extend({
  components: {
    Navbar,
    Header,
    InvoiceItem,
    InvoiceCreator,
    InvoiceDetails,
    EmptyContainer,
    Modal,
  },
  data() {
    return {
      isInvoiceDisplay: false,
      invoiceNumber: 6,
    };
  },
  methods: {
    invoiceDetails(invoiceView: boolean) {
      this.isInvoiceDisplay = invoiceView;
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
  @media (max-width: 480px) {
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
  @media (max-width: 480px) {
    margin: 0 24px;
  }
}
</style>
