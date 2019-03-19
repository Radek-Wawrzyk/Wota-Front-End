<template>
  <main>
    <SubHeader title="Kontakt"/>
    <section class="contact-info">
      <ContactTile :info="tiles[0]"></ContactTile>
      <ContactTile :info="tiles[1]"></ContactTile>
      <ContactTile :info="tiles[2]"></ContactTile>
    </section>
    <section class="contact-info">
      <ContactTile :info="tiles[3]"></ContactTile>
    </section>
    <ContactForm title="Napisz do nas"/>
    <Sale title="Dane bankowe" subtitle="Numer konta: <br>	61 1090 1014 0000 0712 1981 2874"/>
    <Map/>
  </main>
</template>

<script>
import ContactForm from "../../components/ContactForm/ContactForm.vue";
import Map from "../../components/Map/Map.vue";
import ContactTile from "../../components/ContactTile/ContactTile.vue";
import axios from "axios";
import Sale from "../../components/Sale/Sale.vue";
import { API } from "@/main.js";

export default {
  name: "Contact",
  data: () => ({
    tiles: []
  }),
  components: {
    ContactForm,
    ContactTile,
    Map,
    Sale
  },
  async created() {
    try {
      const response = await axios.get(`${API}/contact`);
      this.tiles = response.data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss" scoped src="./Contact.scss" />