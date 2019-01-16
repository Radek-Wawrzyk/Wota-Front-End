import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/kursy',
      name: 'courses',
      component: () => import('./views/CoursesPage/CoursesPage.vue'),
    },
    {
      path: '/kursy/:name',
      name: 'course',
      component: () => import('./views/CoursePage/CoursePage.vue'),
    },
    {
      path: '/instruktorzy',
      name: 'instructos',
      component: () => import('./views/InstructorsPage/InstructorsPage.vue'),
    },
    {
      path: '/pojazdy',
      name: 'vehicles',
      component: () => import('./views/VehiclesPage/VehiclesPage.vue'),
    },
    {
      path: '/projekty',
      name: 'projects',
      component: () => import('./views/ProjectsPage/ProjectsPage.vue'),
    },
    {
      path: '/kontakt',
      name: 'contact',
      component: () => import('./views/Contact/Contact.vue'),
    },
  ],
});
