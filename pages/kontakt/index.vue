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
    <Map/>
  </main>
</template>

<script>
import ContactForm from "@/components/ContactForm/ContactForm.vue";
import Map from "@/components/Map/Map.vue";
import ContactTile from "@/components/ContactTile/ContactTile.vue";
import axios from "axios";

export default {
  name: "Contact",
  components: {
    ContactForm,
    ContactTile,
    Map
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