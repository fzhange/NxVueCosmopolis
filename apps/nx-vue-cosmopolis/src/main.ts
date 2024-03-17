import './styles.less';

import { createApp } from 'vue';
import App from './app/App.vue';
import NxWelcome from './app/NxWelcome.vue';
import * as VueRouter from 'vue-router';

const routes = [
  { path: '/', component: NxWelcome },
  {
    path: '/products',
    component: () =>
      import('@nx-vue-cosmopolis/products').then((m) => m.ProductList),
  },
  {
    path: '/orders',
    component: () =>
      import('@nx-vue-cosmopolis/orders').then((m) => m.OrderList),
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount('#root');
