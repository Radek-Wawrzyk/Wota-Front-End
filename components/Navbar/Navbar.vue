<template>
  <nav class="navigation">
    <figure class="navigation-logo">
      <nuxt-link to="/">
        <img src="@/assets/img/logoC.png" alt="Wota">
      </nuxt-link>
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
        <nuxt-link class="navigation-menu-item-link" to="/" title="Główna" aria-label="Główna">Główna</nuxt-link>
      </li>
      <li class="navigation-menu-item" @click="toggleMenu">
        <nuxt-link class="navigation-menu-item-link" to="/kursy" title="Kursy" aria-label="Kursy">Kursy</nuxt-link>
      </li>
      <li class="navigation-menu-item" @click="toggleMenu">
        <nuxt-link class="navigation-menu-item-link" to="/instruktorzy" title="Instruktorzy" aria-label="Instruktorzy">Instruktorzy</nuxt-link>
      </li>
      <li class="navigation-menu-item" @click="toggleMenu">
        <nuxt-link class="navigation-menu-item-link" to="/pojazdy" title="Pojazdy" aria-label="Pojazdy">Pojazdy</nuxt-link>
      </li>
      <li class="navigation-menu-item" @click="toggleMenu">
        <nuxt-link class="navigation-menu-item-link" to="/projekty" title="Projekty" aria-label="Projekty">Projekty</nuxt-link>
      </li>
      <li class="navigation-menu-item" @click="toggleMenu">
        <nuxt-link class="navigation-menu-item-link" to="/galeria" title="Galeria" aria-label="Galeria">Galeria</nuxt-link>
      </li>
      <li class="navigation-menu-item last" @click="toggleMenu">
        <nuxt-link class="navigation-menu-item-link last btn btn-primary" title="Kontakt" aria-label="Kontakt" to="/kontakt">kontakt</nuxt-link>
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
