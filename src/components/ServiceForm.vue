<template>
  <div>
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
    <p class="service-form__item-list-title">Item List</p>

    <div class="service-form__creation-wrapper">
      <div class="service-form__input-list">
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
          <div class="service-form__price-sector" id="item-total">
            <p>150</p>
            <img src="../assets/images/icon-delete.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style scoped lang="scss">
.service-form {
  &__item-list-title {
    font-size: 18px;
    font-weight: 700;
    color: $color-grey-dark;
    margin-bottom: $spacing-s;
  }
  &__input-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: $spacing-s;
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
