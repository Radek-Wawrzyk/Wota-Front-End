<template>
  <main>
    <section class="error">
      <div class="container">
        <h1 class="error-title" v-if="error.statusCode === 404">Strona nie została znaleziona...</h1>
        <h1 class="error-title" v-else>Błąd Strony</h1>
        <img class="error-img" src="https://cdn.dribbble.com/users/1726478/screenshots/3781908/car-dealer-loader-gif.gif" alt="crash 404" >
        <nuxt-link to="/" class="btn btn-primary" aria-label="Strona główna" title="Strona główna">Jedź dalej!</nuxt-link>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'error',
  props: {
    error: Object
  }
}
</script>

<style scoped lang="scss">
  .error {
    text-align: center;
    margin: 100px 0;
    background: white;
    &-title {
      color: $secondary;
    }
    &-img {
      display: block;
      max-width: 100%;
      height: auto;
      margin: 25px auto;
    }
  }

  //Media

  @media screen and (max-width: 768px) {
    .error {
      margin: 50px 0 0 0;
      &-img {
        margin: 0 auto;
      }
    }
  }
</style>
