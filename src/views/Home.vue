<template>
  <main class="home">
    <Header/>
    <About/>
    <Categories/>
    <Vehicles/>
    <Reviews/>
    <Instructors/>
    <Sale/>
    <ContactForm title='Kontakt' />
    <Map />
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
  name: 'Home',
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
