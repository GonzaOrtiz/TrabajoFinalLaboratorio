import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Menu from '../views/Menu.vue';
import About from '../views/About.vue';
import Operar from '../views/Operar.vue';
import Historial from '../views/Historial.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
  },
  {
    path: '/operar',
    name: 'Operar',
    component: Operar,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/historial',
    name: 'Historial',
    component: Historial,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
