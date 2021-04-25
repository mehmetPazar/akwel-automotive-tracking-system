import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import i18n from './library/plugins/i18n.js';
import messageplugin from './library/plugins/messageplugin';
import Toaster from 'v-toaster'
import 'v-toaster/dist/v-toaster.css'

Vue.config.productionTip = false
Vue.use(Toaster, {timeout: 5000})

new Vue({
  router,
  store,
  vuetify,
  i18n,
  messageplugin,
  render: h => h(App)
}).$mount('#app')
