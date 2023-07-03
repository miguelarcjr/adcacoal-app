import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../modules/shared/layouts/HomeLayoutView.vue'),
    children: [
      {
        path: '',
        component: () => import('../modules/live/pages/LiveView.vue'),
      },
      {
        path: '/biblia',
        component: () => import('../modules/biblia/pages/BibliaView.vue'),
      },
      {
        path: '/capitulo',
        component: () => import('../modules/biblia/pages/CapituloView.vue'),
      },
      {
        path: '/leitura',
        component: () => import('../modules/biblia/pages/LeituraView.vue'),
      },
      {
        path: '/live',
        component: () => import('../modules/live/pages/LiveView.vue'),
      },
      {
        path: '/hino',
        component: () => import('../modules/hinos/pages/HinoView.vue'),
      },
      {
        path: '/verso',
        component: () => import('../modules/hinos/pages/VersoView.vue'),
      },
      {
        path: '/agenda',
        component: () => import('../modules/agenda/pages/AgendaView.vue'),
      },
      {
        path: '/insta',
        component: () => import('../shared/components/InstaFeed.vue'),
      },
      {
        path: '/notificacao',
        component: () => import('../shared/components/InstaFeed.vue'),
      },
    ],
  },
];

export default routes;
