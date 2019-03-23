<template>
  <main>
    <SubHeader title="Galeria"></SubHeader>
    <section class="gallery">
      <div class="container">
        <Gallery :title="false"></Gallery>
      </div>
    </section>
  </main>
</template>

<script>
import Gallery from '@/components/Gallery/Gallery.vue';

export default {
  name: 'GalleryPage',
  components: { 
    Gallery,
  }
};
</script>

<style>

</style>
