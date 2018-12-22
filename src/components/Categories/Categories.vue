<template>
  <section class="categories">
    <div class="container">
      <h2 class="categories-title">Kategorie</h2>
      <ul class="categories-list">
        <li class="categories-list-item">
          <img
            class="vehicle-img"
            :src="require('../../assets/img/kategorie/A1.png')"
            alt="kategoria A1"
          >
          <span class="categories-list-item-text">a1</span>
        </li>
        <li class="categories-list-item">
          <img
            class="vehicle-img"
            :src="require('../../assets/img/kategorie/A.png')"
            alt="kategoria A"
          >
          <span class="categories-list-item-text">a</span>
        </li>
        <li class="categories-list-item">
          <img
            class="vehicle-img"
            :src="require('../../assets/img/kategorie/B1.png')"
            alt="kategoria B1"
          >
          <span class="categories-list-item-text">b1</span>
        </li>
        <li class="categories-list-item">
          <img
            class="vehicle-img"
            :src="require('../../assets/img/kategorie/B.png')"
            alt="kategoria B"
          >
          <span class="categories-list-item-text">b</span>
        </li>
        <li class="categories-list-item">
          <img
            class="vehicle-img"
            :src="require('../../assets/img/kategorie/BE.png')"
            alt="kategoria BE"
          >
          <span class="categories-list-item-text">be</span>
        </li>
        <li class="categories-list-item">
          <img
            class="vehicle-img"
            :src="require('../../assets/img/kategorie/C.png')"
            alt="kategoria C"
          >
          <span class="categories-list-item-text">c</span>
        </li>
        <li class="categories-list-item">
          <img
            class="vehicle-img"
            :src="require('../../assets/img/kategorie/D.png')"
            alt="kategoria D"
          >
          <span class="categories-list-item-text">D</span>
        </li>
        <li class="categories-list-item">
          <img
            class="vehicle-img"
            :src="require('../../assets/img/kategorie/T.png')"
            alt="kategoria T"
          >
          <span class="categories-list-item-text">t</span>
        </li>
        <li class="categories-list-item">
          <img
            class="vehicle-img"
            :src="require('../../assets/img/kategorie/TAXI.png')"
            alt="kategoria Taxi"
          >
          <span class="categories-list-item-text">taxi</span>
        </li>
      </ul>
      <router-link
        to="kategorie"
        aria-label="Kategorie"
        class="btn btn-outline-white"
      >Zobacz wszystkie ></router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "Categories"
};
</script>

<style lang="scss" scoped src="./Categories.scss" />

