<template>
  <div id="app">
    <Navbar/>
    <div class="page">
      <transition name="fade-up">
        <router-view></router-view>
      </transition>
    </div>
    <div class="cookie" id="cookie" v-if="!this.getCookie()">
      <div
        class="cookie-text"
      >Informujemy, iż w celu optymalizacji treści dostępnych w naszym serwisie, dostosowania ich do Państwa indywidualnych potrzeb korzystamy z informacji zapisanych za pomocą plików cookies na urządzeniach końcowych użytkowników.</div>
      <div class="cookie-btn">
        <button @click="acceptCookies">Akceptuj</button>
      </div>
    </div>
    <Footer/>
    <Preloader :loading="loading"/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar.vue";
import Footer from "./components/Footer/Footer.vue";
import Preloader from "./components/Preloader/Preloader.vue";

export default {
  components: {
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
  methods: {
    acceptCookies() {
      localStorage.setItem("cookie", true);
      document.getElementById("cookie").style.display = "none";
    },
    getCookie() {
      if (localStorage.getItem("cookie")) {
        return true;
      }
      return false;
    }
  }
};
</script>

<style scoped>
.cookie {
  position: fixed;
  bottom: 0;
  background: white;
  color: #444;
  padding: 10px;
  z-index: 999;
  border-top: 1px solid #dd2700;
}
.cookie-text {
  padding-right: 320px;
}
.cookie-btn {
  width: 320px;
  position: absolute;
  right: 0;
  top: 3px;
  padding-left: 2em;
  padding-right: 2em;
  display: block;
}
button {
  border: solid 1px rgb(76, 175, 80);
  background-color: rgb(76, 175, 80);
  float: right;
  color: white;
  font-weight: bold;
  white-space: nowrap;
  padding: 0.5em 1.5em 0.5em 1.5em;
  text-align: center;
  margin: 0.5em;
  border: solid 1px rgb(106, 196, 21);
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .cookie-text {
    padding-right: 160px;
  }
  .cookie-btn {
    width: 80%;
  }
  .cookie-btn {
    width: 20%;
  }
}
</style>

