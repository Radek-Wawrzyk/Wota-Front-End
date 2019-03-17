import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

export default () => {
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyBOPK9ee6xjafSFZL5hwr9B6ROHfoWFjyo',
      libraries: 'places',
    },
  });
};
