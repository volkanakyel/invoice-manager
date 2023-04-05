import { Invoice } from '@/interfaces/invoice';
import { invoiceList } from '@/data/invoices';

const state = {
  invoiceList: [],
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
      // eslint-disable-next-line comma-dangle
      (invoiceItem: Invoice) => invoiceItem.id === payload
    );
    if (idOfInvoiceToRemove > -1) {
      state.invoiceList.splice(idOfInvoiceToRemove, 1);
    }
  },
  removeItemFromCart(state: any) {
    state.item = 0;
  },
};
const actions = {
  fetchInvoiceItems({ commit }) {
    const invoiceItems: Invoice[] = invoiceList;
    commit('GET_INVOICE_ITEMS', invoiceItems);
  },
  addInvoice({ commit }, item: Invoice) {
    commit('ADD_INVOICE', item);
  },
  removeInvoice({ commit }, id: string) {
    commit('REMOVE_INVOICE', id);
  },
};

const getters = {
  getInvoiceItems(state) {
    return state.invoiceList;
  },
  isCartVisible(state) {
    return state.openCart;
  },
};

export const invoiceModule = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
