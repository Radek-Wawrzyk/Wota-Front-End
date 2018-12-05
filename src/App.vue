<template>
  <div id="app">
    <Navbar />
    <router-view/>
    
    
    
    <p>All buttons to test</p>
    <button class="btn btn-primary">Zobacz wszystkie ></button>
    <button class="btn btn-outline">Zobacz wszystkie ></button>
    <button class="btn btn-outline-white">Zobacz wszystkie ></button>
  </div>
</template>

<script>

import Navbar from './components/Navbar/Navbar.vue';


export default {
  components:{
    Navbar
  }
}
</script>
