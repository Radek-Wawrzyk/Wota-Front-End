<template>
  <transition name="fade">
    <section id="preloader" v-if="loading">
      <div class="loader">
        <label>Ładowanie</label>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  name: 'Preloader',
  props: [
    'loading'
  ]
}
</script>

<style lang="scss" scoped src="./Preloader.scss" />