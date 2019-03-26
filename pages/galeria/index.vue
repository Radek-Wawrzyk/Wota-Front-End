<template>
  <main>
    <SubHeader title="Galeria"></SubHeader>
    <section class="gallery">
      <div class="container">
        <Gallery :title="false" :gallery="gallery"></Gallery>
      </div>
    </section>
  </main>
</template>

<script>
import Gallery from '@/components/Gallery/Gallery.vue';
import axios from 'axios';

export default {
  name: 'GalleryPage',
  components: { 
    Gallery,
  },
  asyncData: async () => {
    const response = await axios.get(`${process.env.API}/galery`);
    return { gallery: response.data };
  }
};
</script>

<style>

</style>
