<template>
  <header class="page-header">
    <div>
      <h1 class="text-primary font-weight-bold">Auto szkoła WOTA</h1>
      <h5 class="text-uppercase font-weight-bold">Największy wybór kategorii w Łodzi</h5>
      <div class="header-buttons">
        <router-link to="/kursy" class="btn btn-outline">Kursy</router-link>
        <router-link to="/kontakt" class="btn btn-primary">Kontakt</router-link>
        <!-- <a href="#egzaminy" class="btn btn-primary">Egzaminy</a> -->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" src='./Header.scss'/>
