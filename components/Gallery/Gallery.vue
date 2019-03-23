<template>
  <div class="gallery">
    <!-- <h2 class="section-title">{{title ? 'Galeria' : ''}}</h2>
    <el-row :gutter="20">
      <el-col :md="16">
        <GalleryPhoto title="Plac manewrowy" :image="galleryPlace[0].image" type="place" @openLightbox="openLightbox(0, $event)"></GalleryPhoto>
      </el-col>
      <el-col :md="8">
        <GalleryPhoto title="Sala szkoleniowa" :image="galleryHall[0].image" type="hall" @openLightbox="openLightbox(0, $event)"></GalleryPhoto>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :md="6" v-for="(item, index) in gallery" :key="item._id" >
        <GalleryPhoto :image="item.image" type="all" @openLightbox="openLightbox(index, $event)"></GalleryPhoto>
      </el-col>
    </el-row>
    <vue-gallery-slideshow :images="galleryType" :index="index" @close="index = null"></vue-gallery-slideshow> -->
  </div>
</template>

<script>
import GalleryPhoto from "@/components/GalleryPhoto/GalleryPhoto";
import axios from "axios";
import VueGallerySlideshow from 'vue-gallery-slideshow';

export default {
  name: "gallery",
  data: () => ({
    gallery: [],
    index: null,
    galleryPlaceImages: [],
    galleryHallImages: [],
    galleryAll: [],
    activeGallery: ''
  }),
  props: {
    title: {
      type: Boolean,
      default: true
    }
  },
  components: {
    GalleryPhoto,
    VueGallerySlideshow 
  },
  computed: {
    galleryPlace() {
      let galleryPlace = this.gallery.filter(item => item.category === 'plac');
      let images = [];
      galleryPlace.forEach(item => images.push(item.image));
      
      this.galleryPlaceImages = images;
      return galleryPlace;
    },
    galleryHall() {
      let galleryHall = this.gallery.filter(item => item.category === 'sala');
      let images = [];
      galleryHall.forEach(item => images.push(item.image));

      this.galleryHallImages = images;
      return galleryHall;
    },
    galleryImages() {
      let images = [];
      
      for (let i = 0; i < this.gallery.length; i++) {
        images.push(this.gallery[i].image);
      }

      return images;
    },
    galleryType() {
      switch (this.activeGallery) {
        case 'place': {
          return this.galleryPlaceImages;
          break;
        }
        case 'hall': {
          return this.galleryHallImages;
          break;
        }
        case 'all': {
          return this.galleryImages;
          break;
        }
        default: {
          break;
        }
      }
    }
  },
  methods: {
    openLightbox(index, galleryCategory) {
      this.index = index;
      this.activeGallery = galleryCategory;
    }
  },
  async created() {
    try {
      const response = await axios.get(`${this.$API}/galery`);
      response.data ? (this.gallery = response.data) : false;
    } catch(error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss" scoped src="./Gallery.scss" />