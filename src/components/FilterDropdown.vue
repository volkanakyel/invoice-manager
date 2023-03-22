<template>
  <div class="dropdown">
    <p class="dropdown__title">Filter by status</p>
    <p class="dropdown__title-mobile">Filter</p>
    <img
      v-on:click="toggleDropdown()"
      src="../assets/images/icon-arrow-down.svg"
      alt=""
    />
    <div v-if="hasDropdownOpen" class="dropdown__filter">
      <div>
        <input type="checkbox" name="" id="draft" />
        <label for="draft">Draft</label>
      </div>
      <div>
        <input type="checkbox" name="" id="pending" />
        <label for="pending">Pending</label>
      </div>
      <div>
        <input type="checkbox" name="" id="paid" />
        <label for="paid">Paid</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      hasDropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.hasDropdownOpen = !this.hasDropdownOpen;
    },
    closeDropdown() {
      this.hasDropdownOpen = false;
    },
  },
});
</script>

<style scoped lang="scss">
.dropdown {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 16px;
  font-weight: 700;
  img {
    cursor: pointer;
  }
  &__title {
    @media (max-width: 680px) {
      display: none;
    }
  }
  &__title-mobile {
    @media (min-width: 680px) {
      display: none;
    }
  }
  &__filter {
    cursor: pointer;
    position: absolute;
    padding: 24px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    background-color: #fff;
    box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
    border-radius: $border-radius-container;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 20%);
    label {
      margin-left: 12px;
      text-align: center;
    }
    div {
      display: flex;
      align-items: center;
    }
    input {
      color: #dfe3fa;
      border: 1px solid #7c5dfa;
    }
  }
}
</style>
