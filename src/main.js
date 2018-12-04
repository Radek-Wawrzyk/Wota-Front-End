import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Vue from 'vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import App from './App.vue';

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
