<template>
  <main class="home">
    <About />
    <Categories />
    <Sale />
  </main>
</template>

<script>

import Sale from '../components/Sale/Sale.vue';
import Categories from '../components/Categories/Categories.vue';
import About from '../components/About/About.vue';

export default {
  name: 'home',
  components: {
    Sale,
    Categories,
    About
  }
};

</script>
