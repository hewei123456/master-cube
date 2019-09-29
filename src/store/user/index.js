const state = {
  userInfo: {},
  authorization: '',
  visible: false
};

const actions = {};

const mutations = {
  setAuthorization(state, authorization) {
    state.authorization = authorization;
  },
  clearAuthorization(state) {
    state.authorization = '';
  },
  showUserInfo(state) {
    state.visible = true;
  },
  hideUserInfo(state) {
    state.visible = false;
  }
};

export default {
  state,
  actions,
  mutations
}
