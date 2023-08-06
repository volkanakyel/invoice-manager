<template>
  <div class="app-container">
    <EmptyContainer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import EmptyContainer from "@/components/EmptyContainer.vue";

export default Vue.extend({
  components: {
    EmptyContainer,
  },
  data() {
    return {
      isInvoiceDisplay: false,
      activeInvoice: {},
    };
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
</style>
