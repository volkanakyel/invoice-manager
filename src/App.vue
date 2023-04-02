<template>
  <div class="invoice-builder">
    <Navbar />
    <div class="app-container">
      <Header
        @showInvoiceCreation="displayInvoiceCreationFunnel"
        v-if="!isInvoiceDisplay"
      />
      <InvoiceFunnel :open="isInvoiceFunnelDiplayed" @close="closeInvoiceFunnel"
        ><InvoiceCreator
      /></InvoiceFunnel>
      <div v-if="invoiceNumber && !isInvoiceDisplay" class="invoices-list">
        <InvoiceItem
          v-for="invoiceItem in invoiceList"
          :key="invoiceItem.id"
          :invoiceItem="invoiceItem"
          @showInvoice="invoiceDetails"
        />
      </div>
      <InvoiceDetails
        :invoiceItem="activeInvoice"
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
import InvoiceFunnel from '@/components/InvoiceFunnel.vue';
import Navbar from '@/components/Navbar.vue';
import InvoiceDetails from '@/components/InvoiceDetails.vue';
import Header from '@/components/Header.vue';
import InvoiceItem from '@/components/InvoiceItem.vue';
import InvoiceCreator from '@/components/InvoiceCreator.vue';
import EmptyContainer from '@/components/EmptyContainer.vue';
import { disableScroll, enableScroll } from '@/utils/scroll/scroll';
import { invoiceList } from '@/data/invoices';

export default Vue.extend({
  components: {
    Navbar,
    Header,
    InvoiceItem,
    InvoiceCreator,
    InvoiceDetails,
    EmptyContainer,
    InvoiceFunnel,
  },
  data() {
    return {
      isInvoiceDisplay: false,
      isInvoiceFunnelDiplayed: false,
      invoiceNumber: 6,
      invoiceList,
      activeInvoice: {},
    };
  },
  methods: {
    invoiceDetails(invoiceData: any) {
      this.isInvoiceDisplay = invoiceData.invoiceView;
      this.activeInvoice = invoiceData.invoiceItem;
    },
    displayInvoiceList() {
      this.isInvoiceDisplay = false;
    },
    displayInvoiceCreationFunnel() {
      disableScroll(true);
      this.isInvoiceFunnelDiplayed = true;
    },
    closeInvoiceFunnel() {
      enableScroll();
      this.isInvoiceFunnelDiplayed = false;
    },
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
