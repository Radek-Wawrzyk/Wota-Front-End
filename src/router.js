import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/kontakt',
      name: 'contact',
      component: () => import('./views/Contact/Contact.vue')
    },
    {
      path: '/instruktorzy',
      name: 'instructos',
      component: () => import('./views/InstructorsPage/InstructorsPage.vue')
    }
  ],
});
