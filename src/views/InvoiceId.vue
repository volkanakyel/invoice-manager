<template>
  <div class="invoice-details">
    <InvoiceFunnel :open="funnelStatus" @close="closeFunnel"
      ><InvoiceCreator
        :invoiceItemToEdit="currentInvoice"
        @closeInvoiceCreator="closeFunnel"
        @getUpdatedInvoice="updateNewInvoice"
    /></InvoiceFunnel>
    <div class="back-cta" @click="backToInvoiceList">
      <img
        class="arrow-icon"
        src="../assets/images/icon-arrow-right.svg"
        alt=""
      />
      <p>Go back</p>
    </div>
    <div class="invoice-details__header">
      <div class="invoice-details__infos">
        <p class="invoice-item__price">Status</p>
        <Tag :name="invoice.status" />
      </div>
      <div class="only-desktop-active">
        <button @click="displayFunnel" class="action-btn secondary">
          Edit
        </button>
        <button class="action-btn danger" @click="openConfirmationModal">
          Delete
        </button>
        <button class="action-btn primary">Mark as Paid</button>
      </div>
    </div>
    <div class="invoice-details__container">
      <div class="invoice-details__main-infos">
        <div class="invoice-details-container__id">
          <p>{{ invoice.id }}</p>
          <p class="invoice-details__subtitle">
            {{ invoice.description }}
          </p>
        </div>
        <p class="invoice-details__address">
          {{ invoice.senderAddress.street }} <br />
          {{ invoice.senderAddress.city }} <br />
          {{ invoice.senderAddress.postCode }} <br />
          {{ invoice.senderAddress.country }}
        </p>
      </div>
      <div class="invoice-details__client-details">
        <div class="invoice-details__date-block">
          <p class="invoice-details__subtitle">Invoice Date</p>
          <p class="invoice-details__title">21 Aug 2021</p>
          <p class="invoice-details__subtitle">Payment Due</p>
          <p class="invoice-details__title">20 Sep 2021</p>
        </div>
        <div class="invoice-details__client-block">
          <p class="invoice-details__subtitle">Bill To</p>
          <p class="invoice-details__title">
            {{ invoice.clientName }}
          </p>
          <p class="invoice-details__subtitle" style="max-width: 75px">
            {{ invoice.clientAddress.street }}
            {{ invoice.clientAddress.city }}
            {{ invoice.clientAddress.postCode }}
            {{ invoice.clientAddress.country }}
          </p>
        </div>
        <div class="invoice-details__contact-block">
          <p class="invoice-details__subtitle">Sent to</p>
          <p class="invoice-details__title">
            {{ invoice.clientEmail }}
          </p>
        </div>
      </div>
      <InvoiceDescription
        :serviceProvided="invoice.items"
        :totalPrice="invoice.total"
      />
    </div>

    <div class="invoice-details__mobile-cta">
      <button @click="displayFunnel" class="action-btn secondary">Edit</button>
      <button class="action-btn danger" @click="openConfirmationModal">
        Delete
      </button>
      <button class="action-btn primary">Mark as Paid</button>
    </div>
    <Modal
      v-if="isInvoiceModalOpen"
      @closeModal="closeInvoiceModal"
      :invoiceIdToRemove="invoice.id"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import InvoiceFunnel from "@/components/InvoiceFunnel.vue";
import Tag from "@/components/Tag.vue";
import Modal from "@/components/Modal.vue";
import InvoiceCreator from "@/components/InvoiceCreator.vue";
import InvoiceDescription from "@/components/InvoiceDescription.vue";
import { Invoice } from "@/interfaces/invoice";
import { invoiceList } from "@/data/invoices";

export default Vue.extend({
  components: {
    Tag,
    InvoiceDescription,
    Modal,
    InvoiceCreator,
    InvoiceFunnel,
  },
  beforeRouteEnter(to, from, next) {
    const invoiceId = to.params.id;
    const activeInvoice = invoiceList.find(
      (invoice) => invoice.id === invoiceId
    )!;
    if (activeInvoice) {
      next();
    } else {
      next({ name: "Error" });
    }
  },
  data() {
    return {
      invoice: {} as Invoice,
      currentInvoice: {} as Invoice,
      isInvoiceModalOpen: false,
    };
  },
  created() {
    const invoiceId = this.$route.params.id;
    const activeInvoice = invoiceList.find(
      (invoice) => invoice.id === invoiceId
    )!;
    if (activeInvoice) {
      this.invoice = activeInvoice;
    }
    this.currentInvoice = { ...this.getInvoiceToEdit };
  },
  computed: {
    ...mapGetters({
      funnelStatus: "funnel/funnelStatus",
    }),
    getInvoiceToEdit(): Invoice {
      const invoice = {
        items: this.invoice.items,
        clientEmail: this.invoice.clientEmail,
        clientName: this.invoice.clientName,
        clientAddress: { ...this.invoice.clientAddress },
        senderAddress: { ...this.invoice.senderAddress },
        paymentTerms: this.invoice.paymentTerms,
        description: this.invoice.description,
        id: this.invoice.id,
        total: this.invoice.total,
        status: this.invoice.status,
      };
      return invoice;
    },
  },
  methods: {
    ...mapActions({
      displayFunnel: "funnel/displayFunnel",
      closeFunnel: "funnel/closeFunnel",
    }),
    updateNewInvoice(newInvoice) {
      this.invoice = newInvoice;
    },
    backToInvoiceList() {
      this.$router.push("/");
    },
    openConfirmationModal() {
      this.isInvoiceModalOpen = true;
    },
    closeInvoiceModal(backToInvoiceList: boolean) {
      this.isInvoiceModalOpen = false;
      if (backToInvoiceList) this.$router.push("/");
    },
  },
});
</script>

<style scoped lang="scss">
.invoice-details {
  width: 100%;
  margin: $spacing-xxxl $spacing-xxl 0 144px;
  padding: $spacing-l;
  @media (max-width: 768px) {
    margin: 0;
    padding: 20px;
  }

  &__header {
    width: 100%;
    background-color: $color-white;
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $spacing-s 28px;
    margin-block: $spacing-s;
    border-radius: $border-radius-container;
    gap: $spacing-l;
    @media (max-width: 680px) {
      display: block;
    }
  }
  button:not(:last-child) {
    margin-right: $spacing-xs;
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
      margin-top: $spacing-l;
      padding: $spacing-m;
      background: $color-white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  &__container {
    background-color: $color-white;
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    padding: 48px;
    margin-block: $spacing-m;
    border-radius: $border-radius-container;
    gap: $spacing-l;
    @media (max-width: 680px) {
      padding: $spacing-m;
    }
  }
  &__main-infos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__client-details {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: $spacing-m;
    gap: 48px;
    max-width: 560px;
  }
  &__date-block {
  }
  &__client-block {
    flex: 1 1 75px;
  }
  &__contact-block {
  }

  &__title {
    font-size: $spacing-s;
    font-weight: 700;
  }
  &__subtitle {
    color: $color-primary-light;
  }
  &__address {
    text-align: right;
    color: $color-primary-light;
    @media (max-width: 480px) {
      text-align: unset;
      flex: 1 1 100%;
      margin-top: 32px;
    }
  }
}
</style>
