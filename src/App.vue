<template>
  <div id="app">
    <Navbar />
    <div class="page">
      <transition name="fade-up">
        <router-view></router-view>
      </transition>
    </div>
    <Footer />
    <Preloader :loading="loading" />
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue';
import Footer from './components/Footer/Footer.vue';
import Preloader from './components/Preloader/Preloader.vue';

export default {
  components:{
    Navbar,
    Footer,
    Preloader
  },
  data: () => ({
    loading: true
  }),
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  },
};
</script>
