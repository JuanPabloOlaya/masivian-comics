<template>
  <div
    class="
      comics-history__header
      is-flex
      is-flex-direction-column
      pb-2
    "
  >
    <div class="tile is-12">
      <button class="button" @click="$router.push('/')">Go back</button>
    </div>
    <div class="tile is-12 is-justify-content-space-between is-align-items-center">
      <h1 class="comics-history__title">
        Comics History
      </h1>
      <div class="comics-history__filters is-flex">
        <input
          type="text"
          name="keyword"
          v-model="searchText"
          placeholder="Type your keyword..."
          id="keyword" class="input"
        >
        <button
          class="button ml-2 comics-history__filter-button"
          title="Sort by stars"
          @click="updateSortType()"
        >
          <i class="mdi mdi-filter-outline" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import types from '@/store/modules/comics/types';

export default {
  name: 'Header',
  computed: {
    ...mapState(types.PATH, ['keyWord']),
    searchText: {
      get() {
        return this.keyWord;
      },
      set(val) {
        this.updateKeyWord(val);
      },
    },
  },
  methods: {
    ...mapActions(types.PATH, {
      updateKeyWord: types.actions.UPDATE_KEY_WORD,
      updateSortType: types.actions.UPDATE_SORT_TYPE,
    }),
  },
};
</script>
