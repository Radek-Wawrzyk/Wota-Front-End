<template>
  <main class="home">
    <About />
    <Categories />
    <Vehicles />
    <Reviews />
    <Instructors />
    <Sale />
  </main>
</template>

<script>

import Sale from '../components/Sale/Sale.vue';
import Categories from '../components/Categories/Categories.vue';
import About from '../components/About/About.vue';
import Vehicles from '../components/Vehicles/Vehicles.vue';
import Reviews from '../components/Reviews/Reviews.vue';
import Instructors from '../components/Instructors/Instructors.vue';

export default {
  name: 'home',
  components: {
    Sale,
    Categories,
    About,
    Vehicles,
    Reviews,
    Instructors
  }
};

</script>
