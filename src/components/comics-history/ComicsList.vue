<template>
  <div class="comics-history__list is-flex-grow-1 is-flex is-flex-direction-column">
    <div
      v-if="!getComicsList.length"
      class="
        is-flex-grow-1
        is-flex
        is-justify-content-center
        is-align-items-center
        has-background-white
      "
    >
      <span>You don't have any comic in your history.</span>
    </div>
    <comic-list-item v-else v-for="(item, index) in getComicsList" :comic="item" :key="index" />
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
