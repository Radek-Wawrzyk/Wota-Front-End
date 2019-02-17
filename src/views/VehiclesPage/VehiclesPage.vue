<template>
  <main>
    <SubHeader title="Pojazdy"></SubHeader>
    <section class="vehicles">
      <div class="container">
        <p class="vehicles-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet doloremque placeat eius, recusandae iste nihil velit dolores perferendis beatae possimus doloribus! Saepe doloremque ad ut esse at voluptatem doloribus odio.
        </p>
        <el-row :gutter="30" v-if="vehicles.length > 0">
          <el-col :md="8" :sm="12" v-for="vehicle in vehicles" :key="vehicle._id">
            <div class="vehicle">
              <h2 class="vehicle-name">{{vehicle.title}}</h2>
              <p class="vehicle-categories">Kategorie:
                <span v-for="(category, index) in vehicle.categories" :key="index">{{category}}</span>
              </p>
              <img
                class="vehicle-img"
                :src="vehicle.image"
                :alt="vehicle.title"
              >
            </div>
          </el-col>
        </el-row>
        <p class="no-results" v-else >Niestety obecnie nie posiadamy żadnych pojazdów</p>
      </div>
    </section>
    <Categories></Categories>
    <div class="container section-spacing">
      <Gallery/>
    </div>
  </main>
</template>

<script>
import Categories from "../../components/Categories/Categories.vue";
import Gallery from "../../components/Gallery/Gallery";
import axios from "axios";
import { API } from '@/main.js';

export default {
  name: "vehiclesPage",
  data: () => ({
    vehicles: []
  }),
  components: {
    Categories,
    Gallery
  },
  async created() {
    try {
      const response = await axios.get(`${API}/vehicles`);
      response.data ? (this.vehicles = response.data) : false;
    } catch(error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss" scoped src="./VehiclesPage.scss" />