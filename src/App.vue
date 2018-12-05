<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <a class="el-button el-button--danger is-round is-plain" link round >Siema</a>
    <Sale></Sale>
  </div>
</template>

<script>

import Navbar from './components/Navbar/Navbar.vue';
import Sale from './components/Sale/Sale.vue';

export default {
  components:{
    Navbar,
    Sale
  }
}
</script>
