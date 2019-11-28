import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios';
import * as VueGoogleMaps from 'vue2-google-maps'
import dotenv from 'dotenv'
import vueCookie from 'vue-cookie'

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

dotenv.config();

Vue.use(VueGoogleMaps, {

  load: {
    key:"AIzaSyB6j8j8HzoXmb_ViHS_0clnphdiLf6HNaE",//process.env.PLACES_API_KEY
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
})
Vue.use(vueCookie)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
