<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <About />
    <Categories />
    <p>Dupa jasia</p>
    <Sale />
    
    
    <p>All buttons to test</p>
    <button class="btn btn-primary">Zobacz wszystkie ></button>
    <button class="btn btn-outline">Zobacz wszystkie ></button>
    <button class="btn btn-outline-white">Zobacz wszystkie ></button>
  </div>
</template>

<script>

import Navbar from './components/Navbar/Navbar.vue';
import Sale from './components/Sale/Sale.vue';
import Categories from './components/Categories/Categories.vue';
import About from './components/About/About.vue';

export default {
  components:{
    Navbar,
    Sale,
    Categories,
    About
  }
}
</script>
