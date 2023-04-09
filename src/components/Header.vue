<template>
  <header class="header-section">
    <div class="header-section__main">
      <h2 class="header-section__title">Invoices</h2>
      <p class="header-section__subtitle only-desktop-active">
        There are {{ getFilteredInvoice.length }} total invoices
      </p>
      <p class="header-section__subtitle-mobile only-tablet-active">
        {{ getFilteredInvoice.length }} invoices
      </p>
    </div>
    <div class="header-section__actions">
      <FilterDropdown />
      <button class="main-button" @click="showInvoiceCreation">
        <span class="main-button__icon-container">
          <img
            class="main-button__icon"
            src="../assets/images/icon-plus.svg"
            alt=""
          />
        </span>
        <p class="main-button__title">New Invoice</p>
        <p class="main-button__title-mobile">New</p>
      </button>
    </div>
  </header>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';
import FilterDropdown from '@/components/FilterDropdown.vue';

export default Vue.extend({
  components: {
    FilterDropdown,
  },
  computed: {
    ...mapGetters({
      getFilteredInvoice: 'invoice/getFilteredInvoice',
    }),
  },
  methods: {
    showInvoiceCreation() {
      this.$emit('showInvoiceCreation');
    },
  },
});
</script>

<style scoped lang="scss">
.header-section {
  display: flex;
  justify-content: space-between;
  max-width: 730px;
  margin: 0 auto;
  @media (max-width: 768px) {
    margin: 0 48px;
    max-width: 672px;
  }
  @media (max-width: 680px) {
    margin: 32px $spacing-m;
  }
  &__title {
    font-size: $font-size-xxl;
    @media (max-width: 680px) {
      font-size: 20px;
    }
  }
  &__subtitle {
    color: $color-grey-light-2;
  }
  &__actions {
    display: flex;
    align-items: center;
    gap: 40px;
    @media (max-width: 680px) {
      gap: 12px;
    }
  }
}
</style>
