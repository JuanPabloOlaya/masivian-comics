<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ actualComic.safe_title }}
      </p>
    </header>
    <div class="card-content">
      <div class="card-image">
        <figure class="image">
          <img :src="actualComic.img" :alt="actualComic.alt" :title="actualComic.alt" />
        </figure>
      </div>
      <div class="content">
        {{ actualComic.alt }}
      </div>
      <div class="content is-flex is-justify-content-center">
        <rate-star v-model="comicRate" />
      </div>
    </div>
    <footer class="card-footer">
      <comic-actions />
    </footer>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import types from '@/store/modules/comics/types';
import ComicActions from './ComicActions.vue';
import RateStar from '../common/RateStar.vue';

export default {
  name: 'ComicCard',
  computed: {
    ...mapState(types.PATH, ['actualComic', 'latestNum']),
    comicRate: {
      get() {
        return this.actualComic.rate;
      },
      set(val) {
        const updatedComic = { ...this.actualComic, ...{ rate: val } };
        this.updateActualComic(updatedComic);
      },
    },
  },
  components: {
    ComicActions,
    RateStar,
  },
  methods: {
    ...mapActions(types.PATH, {
      getComic: types.actions.GET_COMIC,
      getLatestNum: types.actions.GET_LATEST_NUM,
      updateActualComic: types.actions.UPDATE_ACTUAL_COMIC,
    }),
    getRandomNum() {
      return Math.floor(Math.random() * (this.latestNum - 1 + 1) + 1);
    },
  },
  mounted() {
    this.getLatestNum().then(() => this.getComic(this.getRandomNum()));
  },
};
</script>
