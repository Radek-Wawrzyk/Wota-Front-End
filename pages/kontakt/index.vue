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
import ContactForm from "@/components/ContactForm/ContactForm.vue";
import Map from "@/components/Map/Map.vue";
import ContactTile from "@/components/ContactTile/ContactTile.vue";
import Sale from "@/components/Sale/Sale.vue";
import axios from "axios";

export default {
  name: "Contact",
  components: {
    ContactForm,
    ContactTile,
    Map,
    Sale
  },
  asyncData: async () => {
    try {
      const response = await axios.get(`${process.env.API}/contact`);
      return { tiles: response.data };
    } catch(err) {
      return { tiles: [] };
    }
  },
};
</script>

<style lang="scss" scoped src="./Contact.scss" />