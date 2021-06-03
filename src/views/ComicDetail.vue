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
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Comic Title
          </p>
        </header>
        <div class="card-content">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="prueba" />
            </figure>
          </div>
          <div class="content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia necessitatibus
            aspernatur pariatur architecto officiis voluptatum aut voluptate laborum eaque ullam.
            Odio, nostrum distinctio? Adipisci aliquid cumque iure et ab similique hic at voluptatem
            unde. Eos vitae error soluta minus consectetur.
          </div>
          <div class="content is-flex is-justify-content-center">
            <label>Here will be the rate component</label>
          </div>
        </div>
        <footer class="card-footer">
          <a role="button" class="card-footer-item">Previous</a>
          <a role="button" class="card-footer-item">Random</a>
          <a role="button" class="card-footer-item">Next</a>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ComicDetail',
};
</script>
