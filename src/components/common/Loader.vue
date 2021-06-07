<template>
  <div
    class="
      common-loader
      is-flex
      is-flex-direction-column
      is-justify-content-center
      is-align-items-center
    "
  >
    <img class="loader__image" width="100" src="@/assets/loader.svg">
    <span><b>Loading...</b></span>
  </div>
</template>
<script>
export default {
  name: 'Loader',
};
</script>
