import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist/dist/umd'
import user from './user'

Vue.use(Vuex);

/* Vuex持久化存储--vuex-persist */
const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage
});

export default new Vuex.Store({
  modules: {user},
  plugins: [vuexLocal.plugin],
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
