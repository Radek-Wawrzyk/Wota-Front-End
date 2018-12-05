<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <a class="el-button el-button--danger is-round is-plain" link round >Siema</a>
    <Sale></Sale>
    <p>Dupa jasia</p>
    <Categories></Categories>
    <router-link to="kategorie" aria-label="Kategorie" class="btn btn-primary">Zobacz wszystkie ></router-link>
     <router-link to="kategorie" aria-label="Kategorie" class="btn btn-outline">Zobacz wszystkie ></router-link>
  </div>
</template>

<script>

import Navbar from './components/Navbar/Navbar.vue';
import Sale from './components/Sale/Sale.vue';
import Categories from './components/Categories/Categories.vue';

export default {
  components:{
    Navbar,
    Sale,
    Categories
  }
}
</script>
