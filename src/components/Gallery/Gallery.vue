<template>
  <div>
    <h2 class="section-title">Galeria</h2>
    <el-row :gutter="20">
      <el-col :span="16">
        <GalleryPhoto title="Plac manewrowy"/>
      </el-col>
      <el-col :span="8">
        <GalleryPhoto title="Sala szkoleniowa"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <GalleryPhoto/>
      </el-col>
      <el-col :span="6">
        <GalleryPhoto/>
      </el-col>
      <el-col :span="6">
        <GalleryPhoto/>
      </el-col>
      <el-col :span="6">
        <GalleryPhoto/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import GalleryPhoto from "../../components/GalleryPhoto/GalleryPhoto";

export default {
  name: "gallery",
  components: {
    GalleryPhoto
  }
};
</script>

<style lang="scss" scoped src="./Gallery.scss" />