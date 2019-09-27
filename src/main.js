import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import {Layout} from './components'

Vue.component('Layout', Layout);

Vue.prototype.$navigate = (name, params) => {
  store.commit('pushPage', name);
  router.push({name, params});
};
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
