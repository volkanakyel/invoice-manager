<template>
  <div class="invoice-details">
    <img
      class="invoice-details__back-icon"
      src="../assets/images/icon-arrow-right.svg"
      alt=""
    />
    <p class="invoice-details__previous-cta">Go back</p>
    <div class="invoice-details__actions">
      <div class="invoice-details__infos">
        <p class="invoice-item__price">Status</p>
        <Tag tagState="Pending" />
      </div>
      <div class="invoice-details__ctas">
        <button class="action-btn">Edit</button>
        <button class="action-btn danger">Delete</button>
        <button class="action-btn primary">Mark as Paid</button>
      </div>
    </div>
    <div class="invoice-details-container">
      <div class="invoice-details-container__header">
        <div class="invoice-details-container__id">
          <p>#XM9141</p>
          <p class="invoice-details-container__prestation">Graphic Design</p>
        </div>
        <p class="invoice-details-container__address">
          19 Union Terrace <br />
          London <br />
          E1 3EZ <br />
          United Kingdom
        </p>
      </div>
      <div class="invoice-details-container__content">
        <div class="invoice-details-container__content-type">
          <p>Item name</p>
          <p>QTY.</p>
          <p>Price</p>
          <p>Total</p>
        </div>
        <div class="invoice-details-container__amount-banner">
          <p>Amount Due</p>
          <p style="font-size: 24px">£ 556.00</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Tag from '@/components/Tag.vue';

export default Vue.extend({
  components: {
    Tag,
  },
  data() {
    return {
      invoiceView: false,
    };
  },
  methods: {
    showInvoice() {
      this.invoiceView = true;
      this.$emit('showInvoice', this.invoiceView);
    },
  },
});
</script>

<style scoped lang="scss">
.invoice-details {
  &__back-icon {
    rotate: 180deg;
    display: inline;
  }
  &__previous-cta {
    color: #7e88c3;
    display: inline;
    margin-left: 24px;
  }
  &__actions {
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 28px;
    margin-block: 16px;
    border-radius: $border-radius-container;
    gap: 32px;
  }
  button:not(:last-child) {
    margin-right: 8px;
  }
  &__infos {
    display: flex;
    align-items: center;
    gap: 16px;
  }
}
.invoice-details-container {
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  padding: 48px;
  margin-block: 24px;
  border-radius: $border-radius-container;
  gap: 32px;
  &__header {
    display: flex;
    justify-content: space-between;
  }
  &__prestation {
    color: #7e88c3;
  }
  &__address {
    text-align: right;
    color: #7e88c3;
  }
  &__content {
    margin-top: 46px;
    background: #f9fafe;
    border-radius: 8px 8px 0px 0px;
  }
  &__content-type {
    padding: 32px;
    display: flex;
    justify-content: space-between;
    color: #7e88c3;
  }
  &__amount-banner {
    background: #373b53;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    border-radius: 0px 0px 8px 8px;
    padding: 32px 24px;
  }
}
.action-btn {
  border: none;
  color: #7e88c3;
  border-radius: 24px;
  padding: 18px;
  font-weight: 700;
}

.primary {
  background: #7c5dfa;
  color: #ffffff;
}
.danger {
  background: #ff9797;
  color: #ffffff;
}
</style>
