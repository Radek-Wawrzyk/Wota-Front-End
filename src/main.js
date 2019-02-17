import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueCarousel from 'vue-carousel';

import Vue from 'vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './styles/main.scss';
import App from './App.vue';

//Global components
import SubHeader from './components/SubHeader/SubHeader.vue';

//Use Libraries
Vue.use(VueCarousel);
Vue.use(ElementUI);

//Global components
Vue.component('SubHeader', SubHeader);

//API
export const API = Vue.prototype.$API = 'http://hubertkuzdak.com';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
