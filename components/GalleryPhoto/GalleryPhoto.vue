<template>
  <div class="gallery-photo" :style="image  ? `background-image: url(${image})` : ``" @click="openLightbox">
    <div class="gallery-photo-title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: "galleryPhoto",
  props: {
    title: String,
    image: String,
    type: String,
  },
  methods: {
    openLightbox() {
      this.$emit('openLightbox', this.type);
    }
  }
};
</script>

<style lang="scss" scoped src="./GalleryPhoto.scss" />