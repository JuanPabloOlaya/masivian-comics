<template>
  <div id="app" class="is-flex-grow-1 is-flex is-flex-direction-column">
    <router-view/>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import types from '@/store/modules/comics/types';

export default {
  name: 'App',
  computed: {
    ...mapState(types.PATH, ['latestNum']),
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
