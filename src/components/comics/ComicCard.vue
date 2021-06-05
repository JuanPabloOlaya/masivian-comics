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
      <div class="field has-addons is-flex-grow-1">
        <p class="control is-flex-grow-1 is-flex">
          <button
            class="button is-flex-grow-1"
            :disabled="actualComic.num <= 1"
            @click="getPreviousComic()"
          >
            Previous
          </button>
        </p>
        <p class="control is-flex-grow-1 is-flex">
          <button class="button is-flex-grow-1" @click="getRandomComic()">
            Random
          </button>
        </p>
        <p class="control is-flex-grow-1 is-flex">
          <button
            class="button is-flex-grow-1"
            :disabled="actualComic.num >= latestNum"
            @click="getNextComic()"
          >
            Next
          </button>
        </p>
      </div>
    </footer>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import types from '@/store/modules/comics/types';

export default {
  name: 'ComicCard',
  computed: {
    ...mapState(types.PATH, ['actualComic', 'latestNum']),
  },
  methods: {
    ...mapActions(types.PATH, {
      getComic: types.actions.GET_COMIC,
      getLatestNum: types.actions.GET_LATEST_NUM,
    }),
    getRandomComic() {
      this.getComic(this.getRandomNum());
    },
    getRandomNum() {
      return Math.floor(Math.random() * (this.latestNum - 1 + 1) + 1);
    },
    getPreviousComic() {
      this.getComic(this.actualComic.num - 1);
    },
    getNextComic() {
      this.getComic(this.actualComic.num + 1);
    },
  },
  mounted() {
    this.getLatestNum().then(() => this.getComic(this.getRandomNum()));
  },
};
</script>
