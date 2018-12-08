<template>
  <nav class="navbar">
    <div class="nav-logo">
      <img src="../../assets/img/logo.png">
    </div>
    <div>
      <ul class="nav-list">
        <li>Główna</li>
        <li>Kursy</li>
        <li>Instruktorzy</li>
        <li>Pojazdy</li>
        <li>Projekty</li>
        <li class>
          <a href="#kontakt" class="btn btn-outline">Kontakt</a>
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
