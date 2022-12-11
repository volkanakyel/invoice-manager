<template>
  <div class="invoice-builder">
    <Navbar />
    <InvoiceCreator v-if="0" />
    <div class="app-container">
      <Header />
      <div v-if="1" class="invoices-list">
        <InvoiceItem />
        <InvoiceItem />
        <InvoiceItem />
        <InvoiceItem />
        <InvoiceItem />
        <InvoiceItem />
        <InvoiceItem />
        <InvoiceItem />
        <Modal v-if="0" />
      </div>
      <EmptyContainer v-else />
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue';
import Header from '@/components/Header.vue';
import InvoiceItem from '@/components/InvoiceItem.vue';
import InvoiceCreator from '@/components/InvoiceCreator.vue';
import EmptyContainer from '@/components/EmptyContainer.vue';
import Modal from '@/components/Modal.vue';
import Vue from 'vue';

export default Vue.extend({
  components: {
    Navbar,
    Header,
    InvoiceItem,
    InvoiceCreator,
    EmptyContainer,
    Modal,
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
