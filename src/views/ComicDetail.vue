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
    <div class="column is-5 comic-detail__column">
      <loader v-if="isLoading" />
      <comic-card />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import types from '@/store/modules/comics/types';
import ComicCard from '@/components/comics-detail/ComicCard.vue';
import Loader from '@/components/common/Loader.vue';

export default {
  name: 'ComicDetail',
  components: {
    ComicCard,
    Loader,
  },
  computed: {
    ...mapState(types.PATH, ['isLoading']),
  },
};
</script>
