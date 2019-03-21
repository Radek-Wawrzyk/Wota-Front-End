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
    <Sale
      title="Dane bankowe"
      subtitle="Numer konta: <br><br>	Auto - Szkoła Wota sp. j <br><br> Bank Pekao S.A XI o/ Łódź <br> <br>08 1240 3073 1111 0000 3464 9389"
    />
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