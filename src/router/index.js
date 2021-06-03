import Vue from 'vue';
import VueRouter from 'vue-router';
import ComicDetail from '@/views/ComicDetail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'ComicDetail',
    component: ComicDetail,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
