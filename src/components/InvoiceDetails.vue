<template>
  <div class="invoice-details">
    <div class="invoice-details__container">
      <div @click="backToInvoiceList">
        <img
          class="invoice-details__back-icon"
          src="../assets/images/icon-arrow-right.svg"
          alt=""
        />
        <p class="invoice-details__previous-cta">Go back</p>
      </div>
      <div class="invoice-details__actions">
        <div class="invoice-details__infos">
          <p class="invoice-item__price">Status</p>
          <Tag tagState="Pending" />
        </div>
        <div class="invoice-details__ctas">
          <button class="action-btn">Edit</button>
          <button class="action-btn danger" @click="openConfirmationModal">
            Delete
          </button>
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
        <div class="invoice-details-container__details">
          <div id="item-0">
            <p class="invoice-details-container__prestation">Invoice Date</p>
            <p class="invoice-details-container__subtitle">21 Aug 2021</p>
            <p class="invoice-details-container__prestation">Payment Due</p>
            <p class="invoice-details-container__subtitle">20 Sep 2021</p>
          </div>
          <div id="item-1">
            <p class="invoice-details-container__prestation">Bill To</p>
            <p class="invoice-details-container__subtitle">Alex Grim</p>
            <p class="invoice-details-container__prestation">
              84 Church Way Bradford BD1 9PB United Kingdom
            </p>
          </div>
          <div id="item-2">
            <p class="invoice-details-container__prestation">Sent to</p>
            <p class="invoice-details-container__subtitle">alexgrim@mail.com</p>
          </div>
        </div>
        <div class="invoice-details-container__content">
          <div class="invoice-details-container__content-type">
            <p class="invoice-details-container__content-type--element">
              Item name
            </p>
            <p class="invoice-details-container__content-type--element">QTY.</p>
            <p class="">Price</p>
            <p class="">Total</p>
          </div>
          <div class="invoice-details-container__amount-banner">
            <p>Amount Due</p>
            <p style="font-size: 24px">£ 556.00</p>
          </div>
        </div>
      </div>
    </div>
    <div class="invoice-details__mobile-cta">
      <button class="action-btn">Edit</button>
      <button class="action-btn danger" @click="openConfirmationModal">
        Delete
      </button>
      <button class="action-btn primary">Mark as Paid</button>
    </div>
    <Modal v-show="isInvoiceModalOpen" @closeModal="closeInvoiceModal" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Tag from '@/components/Tag.vue';
import Modal from '@/components/Modal.vue';

export default Vue.extend({
  components: {
    Tag,
    Modal,
  },
  data() {
    return {
      isInvoiceModalOpen: false,
    };
  },
  methods: {
    backToInvoiceList() {
      this.$emit('backToInvoiceList');
    },
    openConfirmationModal() {
      this.isInvoiceModalOpen = true;
    },
    closeInvoiceModal() {
      this.isInvoiceModalOpen = false;
    },
  },
});
</script>

<style scoped lang="scss">
.invoice-details {
  &__container {
    @media (max-width: 768px) {
      margin: 0 40px;
    }
    @media (max-width: 680px) {
      margin: 48px $spacing-m;
    }
  }
  &__back-icon {
    rotate: 180deg;
    display: inline;
  }
  &__previous-cta {
    color: #7e88c3;
    display: inline;
    margin-left: $spacing-m;
  }
  &__actions {
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $spacing-s 28px;
    margin-block: $spacing-s;
    border-radius: $border-radius-container;
    gap: 32px;
    @media (max-width: 680px) {
      display: block;
    }
  }
  &__ctas {
    @media (max-width: 680px) {
      display: none;
    }
  }
  button:not(:last-child) {
    margin-right: 8px;
  }
  &__infos {
    display: flex;
    align-items: center;
    gap: $spacing-s;
    @media (max-width: 680px) {
      justify-content: space-between;
    }
  }
  &__mobile-cta {
    display: none;
    @media (max-width: 680px) {
      margin-top: 32px;
      padding: $spacing-m;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.invoice-details-container {
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  padding: 48px;
  margin-block: $spacing-m;
  border-radius: $border-radius-container;
  gap: 32px;
  @media (max-width: 680px) {
    padding: $spacing-m;
  }
  &__header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__details {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: $spacing-m;
    gap: 40px;
  }
  &__subtitle {
    font-size: $spacing-s;
    font-weight: 700;
  }
  &__prestation {
    color: #7e88c3;
  }
  &__address {
    text-align: right;
    color: #7e88c3;
    @media (max-width: 480px) {
      text-align: unset;
      flex: 1 1 300px;
      margin-top: 32px;
    }
  }
  &__content {
    margin-top: 46px;
    background: #f9fafe;
    border-radius: 8px 8px 0px 0px;
  }
  &__content-type {
    padding: 32px;
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-s;
    justify-content: space-between;
    color: #7e88c3;
    &--element {
      flex: 1 1 50px;
    }
  }
  &__amount-banner {
    background: #373b53;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    border-radius: 0px 0px 8px 8px;
    padding: 32px $spacing-m;
  }
}
#item-0 {
}
#item-1 {
  flex: 1 1 100px;
}
#item-2 {
  grid-row-start: 1;
  grid-column-start: 4;

  grid-row-end: 2;
  grid-column-end: 6;
}
</style>
