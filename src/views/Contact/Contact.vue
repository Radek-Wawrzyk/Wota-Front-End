<template>
  <main>
    <SubHeader title='Kontakt' />
    <section class="contact-info">
      <ContactTile :info="tiles[0]"></ContactTile>
      <ContactTile :info="tiles[1]"></ContactTile>
    </section>
    <ContactForm title='Napisz do nas' />
    <Map :withRed='true' />
  </main>
</template>

<script>
import ContactForm from '../../components/ContactForm/ContactForm.vue';
import Map from '../../components/Map/Map.vue';
import ContactTile from '../../components/ContactTile/ContactTile.vue';
import axios from "axios";
import { API } from '@/main.js';

export default {
  name: 'Contact',
  data: () => ({
    tiles: []
  }),
  components: {
    ContactForm,
    ContactTile,
    Map
  },
  async created() {
    try {
      const response = await axios.get(`${API}/contact`);
      this.tiles = response.data;
    } catch(error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss" scoped src="./Contact.scss" />