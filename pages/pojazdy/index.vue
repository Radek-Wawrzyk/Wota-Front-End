<template>
  <main>
    <SubHeader title="Pojazdy"></SubHeader>
    <section class="vehicles">
      <div class="container">
        <p
          class="vehicles-info"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet doloremque placeat eius, recusandae iste nihil velit dolores perferendis beatae possimus doloribus! Saepe doloremque ad ut esse at voluptatem doloribus odio.</p>
        <el-row :gutter="30" v-if="vehicles.length > 0">
          <Vehicles noTitle="true"/>
        </el-row>
      </div>
    </section>
    <Categories></Categories>
    <div class="container section-spacing">
      <Gallery/>
    </div>
  </main>
</template>

<script>
import Categories from "@/components/Categories/Categories.vue";
import Gallery from "@/components/Gallery/Gallery";
import axios from "axios";
import Vehicles from "@/components/Vehicles/Vehicles.vue";

export default {
  name: "vehiclesPage",
  data: () => ({
    vehicles: []
  }),
  components: {
    Categories,
    Gallery,
    Vehicles
  },
  async created() {
    try {
      const response = await axios.get(`${this.$API}/vehicles`);
      response.data ? (this.vehicles = response.data) : false;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss" scoped src="./VehiclesPage.scss" />