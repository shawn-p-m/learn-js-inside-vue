import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    arrowButtonColor: "primary",
    mapButtonColor: "primary",
  },
  mutations: {
    saveArrowButtonColor: (state, color) => {
      {
        state.arrowButtonColor = color;
      }
    },
    saveMapButtonColor: (state, color) => {
      {
        state.mapButtonColor = color;
      }
    },
  },
  plugins: [createPersistedState()],
});
