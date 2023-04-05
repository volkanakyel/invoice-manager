<template>
  <transition name="modal">
    <div class="fixed-container modal-medium" @click.capture="handleMaskClick">
      <div class="confirmation-modal__wrapper">
        <div class="confirmation-modal__container">
          <h2 class="confirmation-modal__title">Confirm Deletion</h2>
          <p class="confirmation-modal__description">
            Are you sure you want to delete invoice #XM9141? This action cannot
            be undone.
          </p>
          <div class="confirmation-modal__ctas">
            <button class="action-btn" @click="closeModal(false)">
              Cancel
            </button>
            <button class="action-btn danger" @click="removeInvoiceFromList">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import { disableScroll, enableScroll } from '@/utils/scroll/scroll';

export default Vue.extend({
  props: {
    invoiceIdToRemove: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions('invoice', ['removeInvoice']),
    handleMaskClick(event: Event) {
      let className: any;
      if (event) {
        // set the 'target' type as HTMLButtonElement, which has 'value'
        className = (event.target as HTMLElement).getAttribute('class');
      }
      if (className === 'confirmation-modal__wrapper') {
        this.closeModal(false);
      }
    },
    removeInvoiceFromList() {
      this.removeInvoice(this.invoiceIdToRemove); // Remove invoice
      this.closeModal(true); // Close Modal and go to invoice List
    },
    closeModal(backToInvoiceList: boolean) {
      enableScroll();
      this.$emit('closeModal', backToInvoiceList);
    },
  },
  created() {
    disableScroll(true);
  },
});
</script>

<style scoped lang="scss">
.confirmation-modal {
  &__wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  &__container {
    max-width: 480px;
    padding: $spacing-xxl;
    position: relative;
    margin: 0 auto;
    background-color: $color-white;
    border-radius: $border-radius-container;
    box-shadow: 0 2px 8px rgba(black, 0.33);
    transition: all 0.3s ease;
    @media (max-width: 530px) {
      margin: 0 $spacing-m;
    }
  }

  &__title {
    margin-bottom: 12px;
    font-size: $font-size-xl;
  }
  &__description {
    color: $color-grey-light-2;
  }
  &__ctas {
    margin-top: $spacing-s;
    display: flex;
    justify-content: flex-end;
    gap: $spacing-xs;
  }
}

/*
 * Modal animation
 */
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .confirmation-modal__container,
.modal-leave-active .confirmation-modal__container {
  transform: scale(1.1);
}
</style>
