<template>
  <nav class="navbar">
    <div class="nav-logo">
      <a href="/">
        <img src="../../assets/img/logoC.png">
      </a>
    </div>
    <div>
      <ul class="nav-list">
        <li>
          <a href="#" class="nav-link">Główna</a>
        </li>
        <li>
          <a href="#" class="nav-link">Kursy</a>
        </li>
        <li>
          <a href="#" class="nav-link">Instruktorzy</a>
        </li>
        <li>
          <a href="#" class="nav-link">Pojazdy</a>
        </li>
        <li>
          <a href="#" class="nav-link">Projekty</a>
        </li>
        <li class>
          <a href="/kontakt" class="btn btn-primary">Kontakt</a>
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
