<template>
  <div class="comics-history is-flex is-flex-direction-column is-flex-grow-1 p-4">
    <comics-history-header />
    <comics-list />
  </div>
</template>
<script>
import ComicsHistoryHeader from '@/components/comics-history/Header.vue';
import ComicsList from '@/components/comics-history/ComicsList.vue';

export default {
  name: 'ComicsHistory',
  components: {
    ComicsHistoryHeader,
    ComicsList,
  },
};
</script>
