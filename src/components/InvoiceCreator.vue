<template>
  <div class="invoice-creator">
    <div class="container-data" @click.capture="handleMaskClick">
      <div
        class="invoice-creator__wrapper"
        v-click-outside="closeInvoiceCreator"
      >
        <h2 class="invoice-creator__title">New Invoice</h2>
        <p class="invoice-creator__subtitle">Bill From</p>
        <div class="invoice-creator__input-container">
          <label class="invoice-creator__label" for="street-name"
            >Street Address</label
          >
          <input
            class="invoice-creator__large-input"
            id="street-name"
            type="text"
          />
        </div>
        <div class="invoice-creator__input-row">
          <div class="invoice-creator__input-row--element">
            <label class="invoice-creator__label" for="city">City</label>
            <input class="invoice-creator__small-input" id="city" type="text" />
          </div>
          <div>
            <label class="invoice-creator__label" for="postcode"
              >Post Code</label
            >
            <input
              class="invoice-creator__small-input"
              id="postcode"
              type="text"
            />
          </div>
          <div>
            <label class="invoice-creator__label" for="country">Country</label>
            <input
              class="invoice-creator__small-input"
              id="country"
              type="text"
            />
          </div>
        </div>
        <p class="invoice-creator__subtitle">Bill To</p>
        <div class="invoice-creator__input-container">
          <label class="invoice-creator__label" for="client-name"
            >Client’s Name</label
          >
          <input
            class="invoice-creator__large-input"
            id="street-name"
            type="text"
          />
        </div>
        <div class="invoice-creator__input-container">
          <label class="invoice-creator__label" for="client-email"
            >Client’s Email</label
          >
          <input
            class="invoice-creator__large-input"
            id="street-name"
            type="text"
            placeholder="e.g. email@example.com"
          />
        </div>
        <div class="invoice-creator__input-container">
          <label class="invoice-creator__label" for="client-address"
            >Street Address</label
          >
          <input
            class="invoice-creator__large-input"
            id="street-name"
            type="text"
          />
        </div>
        <div class="invoice-creator__input-row">
          <div class="invoice-creator__input-row--element">
            <label class="invoice-creator__label" for="city">City</label>
            <input class="invoice-creator__small-input" id="city" type="text" />
          </div>
          <div>
            <label class="invoice-creator__label" for="postcode"
              >Post Code</label
            >
            <input
              class="invoice-creator__small-input"
              id="postcode"
              type="text"
            />
          </div>
          <div>
            <label class="invoice-creator__label" for="country">Country</label>
            <input
              class="invoice-creator__small-input"
              id="country"
              type="text"
            />
          </div>
        </div>
        <div class="invoice-creator__input-container">
          <label class="invoice-creator__label" for="project-description"
            >Project Description</label
          >
          <input
            class="invoice-creator__large-input"
            id="street-name"
            type="text"
            placeholder="e.g. Graphic Design Service"
          />
        </div>
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

export default Vue.extend({
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
.container-data {
  top: 0;
  left: 0;
  z-index: 899;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: table;
}
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
    background-color: #fff;
    border-radius: $border-radius-right-corner;
    z-index: 950;
    &::-webkit-scrollbar {
      width: $spacing-xs;
      height: $spacing-s;
      left: 100px;
      background: #fff;
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
  &__label {
    display: block;
    color: #7e88c3;
    margin-bottom: 10px;
  }
  &__input-container {
    margin-bottom: $spacing-m;
  }
  &__input-row {
    display: flex;
    align-items: center;
    gap: $spacing-m;
    flex-wrap: wrap;
    margin-bottom: 48px;
  }
  &__large-input {
    width: 100%;
    border: 1px solid #dfe3fa;
    border-radius: $spacing-xxs;
    padding: 14px;
    &::placeholder {
      color: #0c0e16;
      font-weight: 700;
      font-size: $font-size-xs;
      opacity: 0.4;
      line-height: 15px;
      letter-spacing: 0.3px;
    }
  }
  &__small-input {
    max-width: 150px;
    border: 1px solid #dfe3fa;
    border-radius: $spacing-xxs;
    padding: 6px;
    padding: 14px;
  }
  &__item-list-title {
    font-size: 18px;
    font-weight: 700;
    color: #777f98;
    margin-bottom: $spacing-s;
  }
  &__items-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: $spacing-s;
    color: #7e88c3;
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
  color: #7e88c3;
  font-weight: 700;
}

.action-btn {
  border: none;
  color: #7e88c3;
  border-radius: $spacing-m;
  padding: 18px;
  font-weight: 700;
}
.primary {
  background: #7c5dfa;
  color: #ffffff;
}
.actions-button {
  margin-top: 44px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
</style>
