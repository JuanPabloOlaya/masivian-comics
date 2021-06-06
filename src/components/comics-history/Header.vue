<template>
  <div
    class="
      comics-history__header
      is-flex is-justify-content-space-between
      is-align-items-center
    "
  >
    <h1 class="comics-history__title">
      Comics History
    </h1>
    <div class="comics-history__filters is-flex">
      <input
        type="text"
        name="keyword"
        placeholder="Type your keyword..."
        id="keyword" class="input"
      >
      <button class="button ml-2">
        <i class="mdi mdi-filter-outline" />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
};
</script>
