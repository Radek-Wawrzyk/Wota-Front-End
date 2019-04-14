<template>
  <main class="home">
    <Header/>
    <About/>
    <Categories/>
    <Vehicles :vehicles="vehicles" />
    <Reviews/>
    <Instructors/>
    <Sale/>
    <ContactForm title="Kontakt"/>
    <Map/>
    <SocialMediaIcons />
  </main>
</template>

<script>
import Header from "@/components/Header/Header";
import Sale from "@/components/Sale/Sale.vue";
import Categories from "@/components/Categories/Categories.vue";
import About from "@/components/About/About.vue";
import Vehicles from "@/components/Vehicles/Vehicles.vue";
import Reviews from "@/components/Reviews/Reviews.vue";
import Instructors from "@/components/Instructors/Instructors.vue";
import ContactForm from "@/components/ContactForm/ContactForm.vue";
import Map from "@/components/Map/Map.vue";
import SocialMediaIcons from "@/components/SocialMediaIcons/SocialMediaIcons.vue";
import axios from 'axios';

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
    Map,
    SocialMediaIcons
  },
  asyncData: async () => {
    const response = await axios.get(`${process.env.API}/vehicles`);
    response.data.sort((a, b) => a.categories[0]< b.categories[0]? -1 : a.categories[0]> b.categories[0]? 1 : 0);
    return { vehicles: response.data };
  }
};
</script>
