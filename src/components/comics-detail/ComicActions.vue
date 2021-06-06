<template>
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
</template>
<script>
import { mapState, mapActions } from 'vuex';
import types from '@/store/modules/comics/types';

export default {
  name: 'ComicActions',
  computed: {
    ...mapState(types.PATH, ['actualComic', 'latestNum']),
  },
  methods: {
    ...mapActions(types.PATH, {
      getComic: types.actions.GET_COMIC,
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
};
</script>
