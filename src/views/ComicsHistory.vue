<template>
  <div class="comics-history p-4">
    <comics-history-header />
  </div>
</template>
<script>
import ComicsHistoryHeader from '@/components/comics-history/Header.vue';

export default {
  name: 'ComicsHistory',
  components: {
    ComicsHistoryHeader,
  },
};
</script>
