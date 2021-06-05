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
          <img :src="actualComic.img" :alt="actualComic.alt" />
        </figure>
      </div>
      <div class="content">
        {{ actualComic.alt }}
      </div>
      <div class="content is-flex is-justify-content-center">
        <label>Here will be the rate component</label>
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

export default {
  name: 'ComicCard',
  computed: {
    ...mapState(types.PATH, ['actualComic', 'latestNum']),
  },
  components: {
    ComicActions,
  },
  methods: {
    ...mapActions(types.PATH, {
      getComic: types.actions.GET_COMIC,
      getLatestNum: types.actions.GET_LATEST_NUM,
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
