import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import DescriptiveView from '@/views/DescriptiveView.vue';
import InferentialView from '@/views/InferentialView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/descriptiva',
      name: 'descriptive',
      component: DescriptiveView
    },
    {
      path: '/inferencial',
      name: 'inferential',
      component: InferentialView
    },
    {
      path: '/descriptiva/poblacion-muestra',
      name: 'population-sample',
      component: () => import('@/views/descriptive/PoblacionMuestraView.vue')
    },
      {
      path: '/descriptiva/poblacion-muestra/simulador-muestreo',
      name: 'sampling-simulator',
      component: () => import('@/views/descriptive/SimuladorMuestreoView.vue')
    }
  ]
});

export default router;
