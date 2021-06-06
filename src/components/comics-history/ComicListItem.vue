<template>
  <div class="card p-2 is-flex mb-2">
    <figure class="image comics-history__image-container is-64x64">
      <img
        :src="comic.img"
        class="comics-history__image"
        :title="comic.safe_title"
        :alt="shortDescription"
      >
    </figure>
    <div class="comics-history__comic-info pl-1 is-flex-grow-1">
      <div class="comics-history__top-info tile">
        <span class="mr-2"><b>{{comic.safe_title}}</b></span>
        <rate-star v-model="comic.rate" readonly size="small" />
      </div>
      <div class="comics-history__bottom-info">
        <p class="comics-history__description">{{shortDescription}}</p>
      </div>
    </div>
    <div class="comics-history__actions is-flex is-align-items-center">
      <i class="mdi mdi-eye-outline comics-history__action" title="Details" />
      <i class="mdi mdi-trash-can-outline comics-history__action" title="Delete" />
    </div>
  </div>
</template>
<script>
import RateStar from '../common/RateStar.vue';

export default {
  name: 'ComicListItem',
  components: {
    RateStar,
  },
  computed: {
    shortDescription() {
      const { alt } = this.comic;

      if (alt.length > 300) {
        return `${alt.substring(0, 299)}...`;
      }

      return alt;
    },
  },
  props: {
    comic: {
      type: Object,
      required: true,
    },
  },
};
</script>
