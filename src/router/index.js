import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ItemsListPage from '../pages/ItemsListPage.vue';
import ItemDetailsPage from '../pages/ItemDetailsPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/items',
    name: 'items',
    component: ItemsListPage
  },
  {
    path: '/items/:id',
    name: 'item-details',
    component: ItemDetailsPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
