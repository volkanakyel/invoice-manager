import { Invoice } from "@/interfaces/invoice";
import { firestore } from "../../../firebase.js";

const state = {
  invoiceList: [],
  invoiceStatus: [],
};
const mutations = {
  ADD_INVOICE(state: any, payload: Invoice) {
    state.invoiceList.push(payload);
  },
  GET_INVOICE_ITEMS(state: any, payload: Invoice[]) {
    state.invoiceList = payload;
  },
  REMOVE_INVOICE(state: any, payload: string) {
    const idOfInvoiceToRemove = state.invoiceList.findIndex(
      (invoiceItem: Invoice) => invoiceItem.id === payload
    );
    if (idOfInvoiceToRemove > -1) {
      state.invoiceList.splice(idOfInvoiceToRemove, 1);
    }
  },
  REPLACE_INVOICE(state: any, payload: Invoice) {
    const index = state.invoiceList.indexOf(payload);
    const foundIndex = state.invoiceList.findIndex((x) => x.id === payload.id);
    state.invoiceList[foundIndex] = { ...payload };
  },
  FILTER_INVOICE(state: any, filterStatus) {
    state.invoiceStatus = [...filterStatus];
  },
};
const actions = {
  async fetchInvoiceItems({ commit }) {
    let invoiceItems = [] as Invoice[];
    try {
      const snapshot = await firestore.collection("invoices").get();
      invoiceItems = snapshot.docs.map((doc) => doc.data());
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Error fetching", err);
    }

    commit("GET_INVOICE_ITEMS", invoiceItems);
  },
  addInvoice({ commit }, item: Invoice) {
    commit("ADD_INVOICE", item);
  },
  editInvoice({ commit }, item: Invoice) {
    commit("REPLACE_INVOICE", item);
  },
  removeInvoice({ commit }, id: string) {
    commit("REMOVE_INVOICE", id);
  },
  invoiceFilter({ commit }, filterStatus) {
    commit("FILTER_INVOICE", filterStatus);
  },
};

const getters = {
  getFilteredInvoice(state): Invoice[] {
    if (!state.invoiceStatus.length) return state.invoiceList;
    return state.invoiceList.filter((invoice) =>
      state.invoiceStatus.includes(invoice.status)
    );
  },
};

export const invoiceModule = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
