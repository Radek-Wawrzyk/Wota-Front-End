<template>
  <div>
    <h2 class="section-title">{{title ? 'Galeria' : ''}}</h2>
    <el-row :gutter="20">
      <el-col :md="16">
        <GalleryPhoto title="Plac manewrowy" v-if="galleryPlace[0]" :image="galleryPlace[0].image" />
      </el-col>
      <el-col :md="8">
        <GalleryPhoto title="Sala szkoleniowa" v-if="galleryHall[0]" :image="galleryHall[0].image"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :md="6" v-for="item in gallery" :key="item._id" >
        <GalleryPhoto :image="item.image" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import GalleryPhoto from "../../components/GalleryPhoto/GalleryPhoto";
import axios from "axios";
import { API } from '@/main.js';

export default {
  name: "gallery",
  data: () => ({
    gallery: []
  }),
  props: {
    title: Boolean
  },
  components: {
    GalleryPhoto
  },
  computed: {
    galleryPlace() {
      return this.gallery.filter(item => item.category === 'plac');
    },
    galleryHall() {
      return this.gallery.filter(item => item.category === 'sala');
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