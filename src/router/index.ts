import { createRouter, createWebHistory } from 'vue-router'
import FrontLayout from '../layouts/FrontLayout.vue';
import Home from "../page/Home.vue";


const routes = [
  {
    path: '/',
    component: FrontLayout,
    children: [
      {
      path: '',
      name: 'home',
      component: Home,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
export default router