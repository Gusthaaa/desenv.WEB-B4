import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Cadastro from '../views/Cadastro.vue';
import Filmes from '../views/Filmes.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro,
  },
  {
    path: '/filmes',
    name: 'Filmes',
    component: Filmes,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
