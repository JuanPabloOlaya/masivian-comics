<template>
  <div
    class="
      comic-detail
      is-flex
      is-flex-direction-column
      is-align-items-center
      is-justify-content-center
      is-flex-grow-1 columns
      pt-5
      pb-5
    "
  >
    <div class="column is-5">
      <comic-card />
    </div>
  </div>
</template>
<script>
import ComicCard from '@/components/comics/ComicCard.vue';

export default {
  name: 'ComicDetail',
  components: {
    ComicCard,
  },
};
</script>
