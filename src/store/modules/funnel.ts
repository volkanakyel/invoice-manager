import { disableScroll, enableScroll } from '@/utils/scroll/scroll';

const state = {
  funnelActive: false,
};
const mutations = {
  DISPLAY_FUNNEL(state: any) {
    state.funnelActive = true;
    disableScroll(true);
  },
  CLOSE_FUNNEL(state: any) {
    state.funnelActive = false;
    enableScroll();
  },
};
const actions = {
  displayFunnel({ commit }) {
    commit('DISPLAY_FUNNEL');
  },

  closeFunnel({ commit }) {
    commit('CLOSE_FUNNEL');
  },
};

const getters = {
  funnelStatus(state) {
    return state.funnelActive;
  },
};

export const funnelModule = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
