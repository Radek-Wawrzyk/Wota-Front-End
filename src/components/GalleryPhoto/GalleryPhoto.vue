<template>
<a :href="image" class="gallery-link">
  <div class="gallery-photo" :style="image  ? `background-image: url(${image})` : ``" >
    <div class="gallery-photo-title">{{title}}</div>
  </div>
</a>
 
</template>

<script>
export default {
  name: "galleryPhoto",
  props: {
    title: String,
    image: String
  }
};
</script>

<style lang="scss" scoped src="./GalleryPhoto.scss" />