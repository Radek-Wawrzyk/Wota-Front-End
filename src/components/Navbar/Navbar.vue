<template>
  <nav class="navbar">
    <div class="nav-logo">
      <router-link to="/">
        <img src="../../assets/img/logoC.png">
      </router-link>
    </div>
    <div>
      <ul class="nav-list">
        <li>
          <router-link to="/" class="nav-link">Główna</router-link>
        </li>
        <li>
          <router-link to="" class="nav-link">Kursy</router-link>
        </li>
        <li>
          <router-link to="/instruktorzy" class="nav-link">Instruktorzy</router-link>
        </li>
        <li>
          <router-link to="" class="nav-link">Pojazdy</router-link>
        </li>
        <li>
          <router-link to="" class="nav-link">Projekty</router-link>
        </li>
        <li class>
          <router-link to="/kontakt" class="btn btn-primary">Kontakt</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss" src='./Navbar.scss'/>
