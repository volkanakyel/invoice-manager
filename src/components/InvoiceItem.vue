<template>
  <div class="invoice-item" @click="showInvoice">
    <div class="invoice-item__info">
      <p class="invoice-item__id">{{ invoiceItem.id }}</p>
      <p class="invoice-item__creation">Due 19 Aug 2021</p>
      <p class="invoice-item__owner">{{ invoiceItem.clientName }}</p>
      <p class="invoice-item__price only-mobile-active">
        £ {{ invoiceItem.total }}
      </p>
    </div>
    <div class="invoice-item__actions">
      <p class="invoice-item__price only-desktop-active">
        £ {{ invoiceItem.total }}
      </p>
      <p class="invoice-item__owner-mobile">Jensen Huang</p>
      <Tag :name="invoiceItem.status" />
      <img
        class="only-desktop-active"
        src="../assets/images/icon-arrow-right.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Tag from '@/components/Tag.vue';
import { Invoice } from '@/interfaces/invoice';

export default Vue.extend({
  components: {
    Tag,
  },
  props: {
    invoiceItem: {
      type: Object as () => Invoice,
      required: true,
    },
  },
  data() {
    return {
      invoiceView: false,
      tag: {
        name: 'draft',
      },
    };
  },
  methods: {
    showInvoice() {
      this.invoiceView = true;
      this.$emit('showInvoice', {
        invoiceView: this.invoiceView,
        invoiceItem: this.invoiceItem,
      });
    },
  },
});
</script>

<style scoped lang="scss">
.invoice-item {
  cursor: pointer;
  position: relative;
  right: 0;
  transition: right linear 0.1s;
  width: 100%;
  background-color: $color-white;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $spacing-s 28px;
  margin-block: $spacing-m;
  border-radius: $border-radius-container;
  gap: $spacing-l;
  &:hover {
    right: -5px;
  }
  @media (max-width: 768px) {
    padding: $spacing-s $spacing-m;
  }
  @media (max-width: 680px) {
    padding: $spacing-m;
  }
  &__info {
    display: flex;
    justify-content: center;
    gap: $spacing-m;
    align-items: center;
    // flex-wrap: wrap;
    @media (max-width: 680px) {
      gap: 0;
      display: block;
    }
  }
  &__id {
    font-weight: 700;
    // flex: 0 0 100%;
    @media (max-width: 680px) {
      margin-bottom: $spacing-m;
    }
  }
  &__creation {
    color: $color-grey-light-2;
    // flex: 0 0 100%;
  }
  &__owner {
    color: $color-grey-light-2;
    // flex: 0 0 100%;
    @media (max-width: 680px) {
      display: none;
    }
  }
  &__owner-mobile {
    color: $color-grey-light-2;
    margin-bottom: $spacing-m;
    // flex: 0 0 100%;
    @media (min-width: 680px) {
      display: none;
    }
  }
  &__actions {
    display: flex;
    justify-content: center;
    gap: $spacing-m;
    align-items: center;
    @media (max-width: 680px) {
      display: block;
      text-align: center;
    }
  }
  &__price {
    font-size: $font-size-m;
    font-weight: 700;
  }
}
</style>
