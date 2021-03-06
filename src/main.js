import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueCarousel from 'vue-carousel';
import VeeValidate from 'vee-validate';

import Vue from 'vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './styles/main.scss';
import App from './App.vue';

// Global components
import SubHeader from './components/SubHeader/SubHeader.vue';

// Use Libraries
Vue.use(VueCarousel);
Vue.use(ElementUI);
Vue.use(VeeValidate);

// Global components
Vue.component('SubHeader', SubHeader);

//Maps
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBOPK9ee6xjafSFZL5hwr9B6ROHfoWFjyo',
    libraries: 'places',
  },
});

// API address
export const API = Vue.prototype.$API = 'https://hubertkuzdak.com';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
