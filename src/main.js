import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import vueToast from 'vue-toast-notification';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  vueToast,
  render: h => h(App)
}).$mount('#app')
