import Vue from 'vue';
import VueRouter from 'vue-router';
import ComicDetail from '@/views/ComicDetail.vue';
import ComicsHistory from '@/views/ComicsHistory.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'ComicDetail',
    component: ComicDetail,
  },
  {
    path: '/comics-history',
    name: 'ComicsHistory',
    component: ComicsHistory,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
