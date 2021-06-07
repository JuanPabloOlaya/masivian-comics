import Vue from 'vue';
import Vuex from 'vuex';
import types from './modules/comics/types';

import comics from './modules/comics';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    [types.PATH]: comics,
  },
});
