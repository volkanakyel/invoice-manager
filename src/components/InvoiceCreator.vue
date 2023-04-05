<template>
  <div class="invoice-creator">
    <div class="invoice-creator__previous back-cta">
      <img
        class="arrow-icon"
        src="../assets/images/icon-arrow-right.svg"
        alt=""
      />
      <p>Go back</p>
    </div>
    <h2 class="invoice-creator__title">New Invoice</h2>
    <p class="invoice-creator__subtitle">Bill From</p>
    <InvoiceForm @update="clientData" />

    <div class="invoice-creator__items-list">
      <div class="input-container">
        <label class="input-label" for="project-description"
          >Project Description</label
        >
        <input
          class="base-input"
          id="project-description"
          type="text"
          placeholder="e.g. Graphic Design Service"
        />
      </div>
      <p class="invoice-creator__item-list-title">Item List</p>

      <div class="invoice-creator__creation-wrapper">
        <div class="invoice-creator__input-list">
          <div class="input-item-full-block">
            <label class="input-label" for="item-name">Item Name</label>
            <input type="text" class="base-input" id="item-name" />
          </div>
          <div class="input-item-block">
            <label class="input-label" for="item-quantity">Qty.</label>
            <input type="text" class="base-input" id="item-quantity" />
          </div>
          <div class="input-item-block">
            <label class="input-label" for="item-price">Price</label>
            <input type="text" class="base-input" id="item-price" />
          </div>
          <div class="input-item-block">
            <label class="input-label" for="item-total">Total</label>
            <div class="invoice-creator__price-sector" id="item-total">
              <p>150</p>
              <img src="../assets/images/icon-delete.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <button class="action-btn secondary">+ Add New Item</button>
      <div class="invoice-creator__actions">
        <button class="action-btn secondary">Discard</button>
        <button class="action-btn dark">Save as Draft</button>
        <button class="action-btn primary">Save & Send</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import InvoiceForm from '@/components/InvoiceForm.vue';

export default Vue.extend({
  components: {
    InvoiceForm,
  },
  data() {
    return {
      invoiceItem: {},
    };
  },
  methods: {
    clientData(clientData) {
      Object.assign(this.invoiceItem, clientData);
    },
  },
});
</script>

<style scoped lang="scss">
.invoice-creator {
  &__previous {
    @media (min-width: 480px) {
      display: none;
    }
  }
  &__title {
    font-size: $font-size-xl;
    margin-bottom: 46px;
    margin-top: 24px;
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
  &__items-list {
    button {
      width: 100%;
    }
  }
  &__input-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: $spacing-s;
  }

  &__actions {
    margin-top: 44px;
    display: flex;
    justify-content: center;
    gap: 8px;
  }
  &__actions-ctas {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  &__creation-wrapper {
    margin-bottom: 40px;
  }
  &__price-sector {
    display: flex;
    align-items: center;
    gap: 32px;
    height: 50px;
    @media (max-width: 680px) {
      justify-content: space-between;
    }
    p {
      color: #888eb0;
    }
    img {
      width: 12px;
      height: 16px;
      cursor: pointer;
    }
  }
}
</style>
