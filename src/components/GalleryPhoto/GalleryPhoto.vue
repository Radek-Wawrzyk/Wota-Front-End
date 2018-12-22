<template>
  <div class="gallery-photo">
    <div class="gallery-photo-title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: "galleryPhoto",
  props: ['title'],
};
</script>

<style lang="scss" scoped src="./GalleryPhoto.scss" />