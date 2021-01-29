import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    arrowButtonColor: "primary",
    mapButtonColor: "primary",
    reduceButtonColor: "primary",
    promiseButtonColor: "primary",
    spreadButtonColor: "primary",
    generatorButtonColor: "primary",
  },
  mutations: {
    saveArrowButtonColor(state, color) {
      state.arrowButtonColor = color;
    },
    saveMapButtonColor(state, color) {
      state.mapButtonColor = color;
    },
    saveReduceButtonColor(state, color) {
      state.reduceButtonColor = color;
    },
    savePromiseButtonColor(state, color) {
      state.promiseButtonColor = color;
    },
    saveSpreadButtonColor(state, color) {
      state.spreadButtonColor = color;
    },
    saveGeneratorButtonColor(state, color) {
      state.generatorButtonColor = color;
    },
  },
  plugins: [createPersistedState()],
});
