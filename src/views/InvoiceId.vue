<template>
  <div class="invoice-details">
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
        <Tag :name="currentInvoice.status" />
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
    <InvoiceFunnel :open="funnelStatus" @close="closeFunnel"
      ><InvoiceCreator
        :invoiceToEdit="getinvoiceToEdit"
        @closeInvoiceCreator="closeFunnel"
        @getUpdatedInvoice="updateNewInvoice"
    /></InvoiceFunnel>
    <div class="invoice-details__container">
      <div class="invoice-details__main-infos">
        <div class="invoice-details-container__id">
          <p>{{ currentInvoice.id }}</p>
          <p class="invoice-details__subtitle">
            {{ currentInvoice.description }}
          </p>
        </div>
        <p class="invoice-details__address">
          {{ currentInvoice.senderAddress.street }} <br />
          {{ currentInvoice.senderAddress.city }} <br />
          {{ currentInvoice.senderAddress.postCode }} <br />
          {{ currentInvoice.senderAddress.country }}
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
            {{ currentInvoice.clientName }}
          </p>
          <p class="invoice-details__subtitle" style="max-width: 75px">
            {{ currentInvoice.clientAddress.street }}
            {{ currentInvoice.clientAddress.city }}
            {{ currentInvoice.clientAddress.postCode }}
            {{ currentInvoice.clientAddress.country }}
          </p>
        </div>
        <div class="invoice-details__contact-block">
          <p class="invoice-details__subtitle">Sent to</p>
          <p class="invoice-details__title">
            {{ currentInvoice.clientEmail }}
          </p>
        </div>
      </div>
      <InvoiceDescription
        :serviceProvided="currentInvoice.items"
        :totalPrice="currentInvoice.total"
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
  props: {
    // invoice: {
    //   type: Object as () => Invoice,
    //   required: true,
    // },
  },
  data() {
    return {
      invoice: {} as Invoice,
      currentInvoice: {
        id: "",
        description: "",
        paymentTerms: 1,
        clientName: "",
        clientEmail: "",
        status: "",
        senderAddress: {
          street: "",
          city: "",
          postCode: "",
          country: "",
        },
        clientAddress: {
          street: "",
          city: "",
          postCode: "",
          country: "",
        },
        items: [
          {
            name: "",
            quantity: 0,
            price: 0,
            total: 0,
          },
        ],
        total: 0,
      } as Invoice,
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
    this.currentInvoice = { ...this.getinvoiceToEdit };
  },
  computed: {
    ...mapGetters({
      funnelStatus: "funnel/funnelStatus",
    }),
    getinvoiceToEdit(): Invoice {
      return {
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
    },
  },
  methods: {
    ...mapActions({
      displayFunnel: "funnel/displayFunnel",
      closeFunnel: "funnel/closeFunnel",
    }),
    updateNewInvoice(newInvoice) {
      this.currentInvoice = newInvoice;
    },
    backToInvoiceList() {
      this.$router.push("/");
    },
    openConfirmationModal() {
      this.isInvoiceModalOpen = true;
    },
    closeInvoiceModal(backToInvoiceList: boolean) {
      this.isInvoiceModalOpen = false;
      if (backToInvoiceList) this.backToInvoiceList();
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
