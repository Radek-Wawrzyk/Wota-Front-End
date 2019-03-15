<template>
  <div class="gallery">
    <h2 class="section-title">{{title ? 'Galeria' : ''}}</h2>
    <el-row :gutter="20">
      <el-col :md="16">
        <div class="gallery-photo" :style="galleryPlace[0].image  ? `background-image: url(${galleryPlace[0].image })` : ``"  @click="openLightbox(0, 'place')">
          <div class="gallery-photo-title">Plac manewrowy</div>
        </div>
      </el-col>
      <el-col :md="8">
        <div class="gallery-photo" :style="galleryHall[0].image  ? `background-image: url(${galleryHall[0].image })` : ``"  @click="openLightbox(0, 'hall')">
          <div class="gallery-photo-title">Sala szkoleniowa</div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :md="6" v-for="(item, index) in gallery" :key="item._id" >
        <div class="gallery-photo" :style="item.image  ? `background-image: url(${item.image })` : ``"  @click="openLightbox(index, 'all')">
        </div>
      </el-col>
    </el-row>
    <vue-gallery-slideshow :images="activeGallery === 'place' ? galleryPlaceImages : (activeGallery === 'hall' ? galleryHallImages : galleryImages)" :index="index" @close="index = null"></vue-gallery-slideshow>
  </div>
</template>

<script>
import GalleryPhoto from "../../components/GalleryPhoto/GalleryPhoto";
import axios from "axios";
import { API } from '@/main.js';
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
    activeGallery() {
      switch (gallery) {
        case 'place': {
          this.activeGallery = 'place';
          break;
        }
        case 'hall': {
          this.activeGallery = 'hall';
          break;
        }
        case 'all': {
          this.activeGallery = 'all';
          break;
        }
        default: {
          break;
        }
      }
    },
  },
  methods: {
    openLightbox(index, galleryCategory) {
      this.index = index;
      this.activeGallery = galleryCategory;
    }
  },
  async created() {
    try {
      const response = await axios.get(`${API}/galery`);
      response.data ? (this.gallery = response.data) : false;
    } catch(error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss" scoped src="./Gallery.scss" />