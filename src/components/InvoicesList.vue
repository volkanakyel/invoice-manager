<template>
  <div>
    <InvoiceHeader @showInvoiceCreation="displayFunnel" />
    <div v-if="isInvoicesListEmpty" class="invoices-list">
      <InvoiceItem
        v-for="invoice in invoicesList"
        :key="invoice.id"
        :invoiceItem="invoice"
        @showInvoice="invoiceDetails(invoice)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
import InvoiceHeader from "@/components/InvoiceHeader.vue";
import InvoiceItem from "@/components/InvoiceItem.vue";
import { Invoice } from "@/interfaces/invoice";

export default Vue.extend({
  props: {
    invoicesList: {
      type: Array as () => Invoice[],
      required: true,
    },
  },
  components: {
    InvoiceHeader,
    InvoiceItem,
  },
  computed: {
    isInvoicesListEmpty() {
      return !!this.invoicesList.length;
    },
  },
  methods: {
    ...mapActions({
      displayFunnel: "funnel/displayFunnel",
    }),
    invoiceDetails(invoice: Invoice) {
      this.$router.push({
        name: "Invoice",
        params: { id: invoice.id },
      });
    },
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/_variables.scss";
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
