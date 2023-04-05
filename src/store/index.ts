import Vue from 'vue';
import Vuex from 'vuex';
import { invoiceModule as invoice } from './modules/invoice';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    invoice,
  },
});
