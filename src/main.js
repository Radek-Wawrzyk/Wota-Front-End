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

//MAPS
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBOPK9ee6xjafSFZL5hwr9B6ROHfoWFjyo',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
});

// API
export const API = Vue.prototype.$API = 'https://hubertkuzdak.com';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
