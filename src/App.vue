<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue';
import Footer from './components/Footer/Footer.vue';

export default {
  components:{
    Navbar,
    Footer
  }
};
</script>
