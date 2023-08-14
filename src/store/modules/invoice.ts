import firebase from "firebase/app";
import { Invoice } from "@/interfaces/invoice";
import { firestore, firebaseAuth } from "../../../firebase.js";

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
    const loggedInUserId = firebaseAuth.currentUser.email;
    const invoiceItems = [];
    try {
      const snapshot = await firestore
        .collection("invoices")
        .where("createdBy", "==", loggedInUserId)
        .get();
      snapshot.docs.forEach((doc) => {
        const data = doc.data();
        invoiceItems.push({
          id: doc.id,
          ...data,
        });
      });
      commit("GET_INVOICE_ITEMS", invoiceItems);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Error fetching", err);
    }
  },
  addInvoice({ commit }, item: Invoice) {
    firestore
      .collection("invoices")
      .add(item)
      .then((docRef) => {
        commit("ADD_INVOICE", item);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log("Error adding invoice ", err);
      });
  },
  editInvoice({ commit }, item: Invoice) {
    // commit("REPLACE_INVOICE", item);
    const user = firebase.auth().currentUser;
    if (user) {
      firestore
        .collection("invoices")
        .doc(item.id)
        .update(item)
        .then(() => {
          commit("REPLACE_INVOICE", item);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error("Error updating invoice:", error);
        });
    }
  },
  removeInvoice({ commit }, id: string) {
    const user = firebase.auth().currentUser;
    if (user) {
      firestore
        .collection("invoices")
        .doc(id)
        .delete()
        .then(() => {
          commit("REMOVE_INVOICE", id);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error("Error deleting invoice:", error);
        });
    }
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
  getInvoiceFromId: (state) => (invoiceId) =>
    state.invoiceList.find((invoice) => invoice.id === invoiceId),
};

export const invoiceModule = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
