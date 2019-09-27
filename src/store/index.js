import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pages: []
  },
  mutations: {
    pushPage(state, page) {
      state.pages.push(page);
    },
    popPage(state) {
      state.pages.pop();
    }
  },
  actions: {}
})
