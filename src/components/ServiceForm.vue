<template>
  <div>
    <div class="input-container">
      <label class="input-label" for="project-description"
        >Project Description</label
      >
      <input
        @input="sendDescription()"
        v-model="description"
        class="base-input"
        id="project-description"
        type="text"
        placeholder="e.g. Graphic Design Service"
      />
    </div>
    <p class="service-form__item-list-title">Item List</p>

    <form @input="submit" class="service-form__creation-wrapper">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="service-form__input-list"
      >
        <div class="input-item-full-block">
          <label class="input-label" for="item-name">Item Name</label>
          <input
            v-model="items[index].name"
            type="text"
            class="base-input"
            id="item-name"
          />
        </div>
        <div class="input-item-block">
          <label class="input-label" for="item-quantity">Qty.</label>
          <input
            v-model="items[index].quantity"
            type="number"
            class="base-input"
            id="item-quantity"
          />
        </div>
        <div class="input-item-block">
          <label class="input-label" for="item-price">Price</label>
          <input
            v-model="items[index].price"
            type="number"
            class="base-input"
            id="item-price"
          />
        </div>
        <div class="input-item-block">
          <label class="input-label" for="item-total">Total</label>
          <div class="service-form__price-sector" id="item-total">
            <p>{{ getTotalItemPrice(index) }}</p>
            <img
              @click="deleteCurrentItem(index)"
              src="../assets/images/icon-delete.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <button
        @click.prevent="addServiceItem"
        class="service-form__cta action-btn secondary"
      >
        + Add New Item
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      description: '',
      items: [],
    };
  },
  methods: {
    addServiceItem() {
      this.items.push({
        name: '',
        quantity: 0,
        price: 0,
        total: 0,
      });
    },
    sendDescription() {
      this.$emit('projectDescription', this.description);
    },
    deleteCurrentItem(index: number) {
      this.items.splice(index, 1);
    },
    getTotalItemPrice(index: number) {
      return this.items[index].price * this.items[index].quantity;
    },
    submit() {
      this.$emit('update', this.items);
    },
  },
});
</script>

<style scoped lang="scss">
.service-form {
  &__item-list-title {
    font-size: 18px;
    font-weight: 700;
    color: $color-grey-dark;
    margin-bottom: $spacing-s;
  }

  &__cta {
    width: 100%;
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
