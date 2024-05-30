import './assets/base.css';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import ReceptionView from './views/ReceptionView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: ReceptionView
    }
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
