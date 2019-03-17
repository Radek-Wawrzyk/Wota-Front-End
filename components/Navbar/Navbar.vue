<template>
  <nav class="navigation">
    <figure class="navigation-logo">
      <router-link to="/">
        <img src="../../assets/img/logoC.png" alt="Wota">
      </router-link>
    </figure>
    <button
      class="navigation-button"
      :class="{'active': menuStatus}"
      @click="toggleMenu"
      :aria-expanded="menuStatus ? 'true' : 'false'"
    >
      <span class="navigation-button-bar"></span>
      <span class="navigation-button-bar"></span>
      <span class="navigation-button-bar"></span>
    </button>
    <ul class="navigation-menu" :class="{'active': menuStatus}">
      <li class="navigation-menu-item" @click="toggleMenu">
        <router-link class="navigation-menu-item-link" to="/" title="Główna" aria-label="Główna">Główna</router-link>
      </li>
      <li class="navigation-menu-item" @click="toggleMenu">
        <router-link class="navigation-menu-item-link" to="/kursy" title="Kursy" aria-label="Kursy">Kursy</router-link>
      </li>
      <li class="navigation-menu-item" @click="toggleMenu">
        <router-link class="navigation-menu-item-link" to="/instruktorzy" title="Instruktorzy" aria-label="Instruktorzy">Instruktorzy</router-link>
      </li>
      <li class="navigation-menu-item" @click="toggleMenu">
        <router-link class="navigation-menu-item-link" to="/pojazdy" title="Pojazdy" aria-label="Pojazdy">Pojazdy</router-link>
      </li>
      <li class="navigation-menu-item" @click="toggleMenu">
        <router-link class="navigation-menu-item-link" to="/projekty" title="Projekty" aria-label="Projekty">Projekty</router-link>
      </li>
      <li class="navigation-menu-item" @click="toggleMenu">
        <router-link class="navigation-menu-item-link" to="/galeria" title="Galeria" aria-label="Galeria">Galeria</router-link>
      </li>
      <li class="navigation-menu-item last" @click="toggleMenu">
        <router-link class="navigation-menu-item-link last btn btn-primary" title="Kontakt" aria-label="Kontakt" to="/kontakt">kontakt</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    menuStatus: false
  }),
  methods: {
    toggleMenu() {
      if (window.innerWidth <= 1024) {
        this.menuStatus = !this.menuStatus;
      }
    }
  }
};
</script>

<style lang="scss" src='./Navbar.scss'/>
