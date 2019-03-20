<template>
  <main class="home">
    <Header/>
    <About/>
    <Categories/>
    <Vehicles/>
    <Reviews/>
    <Instructors/>
    <Sale/>
    <ContactForm title="Kontakt"/>
    <Map/>
    <div class="fb-icon">
      <a href="https://www.facebook.com/Auto-Szkola-WOTA-127784787273828/" target="_blank">
        <svg
          aria-hidden="true"
          data-prefix="fab"
          data-icon="facebook"
          class="svg-inline--fa fa-facebook fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 617"
        >
          <path
            fill="currentColor"
            d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"
          ></path>
        </svg>
      </a>
      <a href="https://www.instagram.com/auto_szkola_wota/" target="_blank">
        <svg
          aria-hidden="true"
          data-prefix="fab"
          data-icon="instagram"
          class="svg-inline--fa fa-instagram fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="#000000"
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
          ></path>
        </svg>
      </a>
    </div>
  </main>
</template>

<script>
import Header from "../components/Header/Header";
import Sale from "../components/Sale/Sale.vue";
import Categories from "../components/Categories/Categories.vue";
import About from "../components/About/About.vue";
import Vehicles from "../components/Vehicles/Vehicles.vue";
import Reviews from "../components/Reviews/Reviews.vue";
import Instructors from "../components/Instructors/Instructors.vue";
import ContactForm from "../components/ContactForm/ContactForm.vue";
import Map from "../components/Map/Map.vue";

export default {
  name: "Home",
  components: {
    Header,
    Sale,
    Categories,
    About,
    Vehicles,
    Reviews,
    Instructors,
    ContactForm,
    Map
  }
};
</script>

<style scoped>
.fb-icon {
  position: fixed;
  right: 0;
  top: 30%;
  z-index: 999;
  width: 30px;
  color: #3b5998;
}
</style>
