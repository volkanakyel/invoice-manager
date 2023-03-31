<template>
  <div class="invoice-creator">
    <div class="fixed-container" @click.capture="handleMaskClick">
      <div
        class="invoice-creator__wrapper"
        v-click-outside="closeInvoiceCreator"
      >
        <h2 class="invoice-creator__title">New Invoice</h2>
        <p class="invoice-creator__subtitle">Bill From</p>
        <InvoiceForm />
        <div class="invoice-creator__items-list">
          <p class="invoice-creator__item-list-title">Item List</p>
          <div class="invoice-creator__items-container">
            <p>Item Name</p>
            <p>Qty.</p>
            <p>Price</p>
            <p>Total</p>
          </div>
          <button class="invoice-item-btn">+ Add New Item</button>
        </div>
        <div class="actions-button">
          <button class="action-btn">Cancel</button>
          <button class="action-btn primary">Save Changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import vClickOutside from 'v-click-outside';
import InvoiceForm from '@/components/InvoiceForm.vue';

export default Vue.extend({
  components: {
    InvoiceForm,
  },
  methods: {
    handleMaskClick(event: Event) {
      let className: any;
      if (event) {
        // set the 'target' type as HTMLButtonElement, which has 'value'
        className = (event.target as HTMLElement).getAttribute('class');
      }
      if (className === 'modal__wrapper') {
        this.closeInvoiceCreator();
      }
    },
    closeInvoiceCreator() {
      this.$emit('closeInvoiceCreator');
    },
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
});
</script>

<style scoped lang="scss">
.invoice-creator {
  @media (max-width: 768px) {
    left: 0;
    top: 82px;
    width: 620px;
  }

  &__wrapper {
    height: 100vh;
    position: fixed;
    overflow-y: scroll;
    transition: opacity 0.3s ease;
    top: 0;
    left: 96px;
    max-width: 720px;
    padding: $spacing-m;
    background-color: $color-white;
    border-radius: $border-radius-right-corner;
    z-index: 950;
    &::-webkit-scrollbar {
      width: $spacing-xs;
      height: $spacing-s;
      left: 100px;
      background: $color-white;
      border-radius: $spacing-xxs;
    }
    &::-webkit-scrollbar-thumb {
      background: #dfe3fa;
      height: $spacing-s;
      border-radius: $spacing-xxs;
    }
    @media (max-width: 768px) {
      left: 0;
      top: 82px;
      max-width: 620px;
    }
  }

  &__title {
    font-size: $font-size-xl;
    margin-bottom: 46px;
  }
  &__subtitle {
    color: $color-primary;
    font-weight: 700;
    margin-bottom: $spacing-m;
  }
  &__item-list-title {
    font-size: 18px;
    font-weight: 700;
    color: $color-grey-dark;
    margin-bottom: $spacing-s;
  }
  &__items-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: $spacing-s;
    color: $color-primary-light;
  }
}
.container {
  max-width: 503px;
  margin: 56px;
}
.invoice-item-btn {
  background: #dfe3fa;
  border-radius: $spacing-m;
  cursor: pointer;
  width: 100%;
  border: none;
  padding: 18px;
  color: $color-primary-light;
  font-weight: 700;
}
.actions-button {
  margin-top: 44px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
</style>
