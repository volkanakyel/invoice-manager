<template>
  <transition name="dropdown">
    <div class="dropdown">
      <div class="dropdown__wrapper" v-click-outside="closeDropdown">
        <div class="dropdown__actions" @click="toggleDropdown">
          <p class="dropdown__title">Filter by status</p>
          <p class="dropdown__title-mobile">Filter</p>
          <img src="../assets/images/icon-arrow-down.svg" alt="" />
        </div>
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
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import vClickOutside from 'v-click-outside';

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
  directives: {
    clickOutside: vClickOutside.directive,
  },
});
</script>

<style scoped lang="scss">
.dropdown {
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: $spacing-s;
    font-weight: 700;
  }
  &__actions {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: $spacing-xs;
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
    padding: $spacing-m;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: $spacing-s;
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

.dropdown-enter {
  opacity: 0;
}

.dropdown-leave-active {
  opacity: 0;
}

.dropdown-enter .dropdown__filter,
.dropdown-leave-active .dropdown__filter {
  transform: scale(1.1);
}
</style>
