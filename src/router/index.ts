import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DescriptiveView from '@/views/DescriptiveView.vue'
import InferentialView from '@/views/InferentialView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/descriptiva',
      name: 'descriptive',
      component: DescriptiveView,
    },
    {
      path: '/inferencial',
      name: 'inferential',
      component: InferentialView,
    },
    {
      path: '/descriptiva/poblacion-muestra',
      name: 'population-sample',
      component: () => import('@/views/descriptive/PoblacionMuestraView.vue'),
    },
    {
      path: '/descriptiva/poblacion-muestra/simulador-muestreo',
      name: 'sampling-simulator',
      component: () => import('@/views/descriptive/SimuladorMuestreoView.vue'),
    },
    {
      path: '/descriptiva/tipos-datos',
      name: 'data-types',
      component: () => import('@/views/descriptive/TiposDatosView.vue'),
    },
    {
      path: '/descriptiva/graficos-cualitativos',
      name: 'qualitative-graphs',
      component: () => import('@/views/descriptive/GraficosCualitativosView.vue'),
    },
    {
      path: '/descriptiva/graficos-cuantitativos',
      name: 'quantitative-graphs',
      component: () => import('@/views/descriptive/GraficosCuantitativosView.vue'),
    },
    {
      path: '/descriptiva/instrumentos-recoleccion-datos',
      name: 'data-collection-instruments',
      component: () => import('@/views/descriptive/InstrumentosRecoleccionDatosView.vue'),
    },
    {
      path: '/inferencial/distribuciones-muestrales',
      name: 'sampling-distributions',
      component: () => import('@/views/inferential/DistribucionesMuestralesView.vue'),
    },
    {
      path: '/inferencial/distribuciones-z-t',
      name: 'z-t-distributions',
      component: () => import('@/views/inferential/DistribucionesZTView.vue'),
    },
    {
      path: '/inferencial/comandos-python-excel',
      name: 'python-excel-commands',
      component: () => import('@/views/inferential/ComandosPythonExcelView.vue'),
    },
    {
      path: '/inferencial/diferencia-medias',
      name: 'difference-means',
      component: () => import('@/views/inferential/DiferenciaMediasView.vue'),
    }
  ],
})

export default router
