<template>
  <main>
    <SubHeader title="Pojazdy"></SubHeader>
    <section class="vehicles">
      <div class="container">
        <p
          class="vehicles-info"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet doloremque placeat eius, recusandae iste nihil velit dolores perferendis beatae possimus doloribus! Saepe doloremque ad ut esse at voluptatem doloribus odio.</p>
        <el-row :gutter="30" >
          <Vehicles noTitle="true" :vehicles="vehicles" />
        </el-row>
      </div>
    </section>
    <Categories></Categories>
    <div class="container section-spacing">
      <!-- <Gallery/> -->
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
  components: {
    Categories,
    Gallery,
    Vehicles
  },
  asyncData: async () => {
    try {
      const response = await axios.get(`${process.env.API}/vehicles`);
      return { vehicles: response.data };
    } catch (err) {
      return { vehicles: [] };
    }
  }
};
</script>

<style lang="scss" scoped src="./VehiclesPage.scss" />