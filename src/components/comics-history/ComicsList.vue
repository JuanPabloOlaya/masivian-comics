<template>
  <div class="comics-history__list is-flex-grow-1 is-flex is-flex-direction-column">
    <comic-list-item v-for="(item, index) in getComicsList" :comic="item" :key="index" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import types from '@/store/modules/comics/types';
import ComicListItem from './ComicListItem.vue';

export default {
  name: 'ComicsList',
  components: {
    ComicListItem,
  },
  computed: {
    ...mapGetters(types.PATH, {
      getComicsList: types.getters.GET_FILTERED_COMICS,
    }),
  },
};
</script>
