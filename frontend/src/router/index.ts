import { createRouter as createVueRouter, createWebHistory, type Router } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { createAuthGuard } from "@auth0/auth0-vue";
import type { App } from 'vue';

export default (app: App): Router => (
  createVueRouter({
    routes:[
      {
        path: '/',
        name: 'home',
        component: HomeView,
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('../views/VideoView.vue'),
        beforeEnter: createAuthGuard(app),
      },
    ],
    history: createWebHistory( '/vue-auth0-example/'),
  })
);