const state = {
  userInfo: {}
};

const actions = {};

const mutations = {
  setAuthorization(state, authorization) {
    state.authorization = authorization;
  },
  clearAuthorization(state) {
    state.authorization = '';
  }
};

export default {
  state,
  actions,
  mutations
}
