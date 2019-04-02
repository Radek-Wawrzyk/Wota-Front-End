<template>
  <section class="vehicles">
    <div class="container">
      <h2 class="vehicles-title" v-if="!noTitle">Pojazdy</h2>
      <h4 v-if="vehicles.length === 0" class="nexist">Lista pojazdów jest pusta</h4>
      <el-row :gutter="50">
        <el-col :md="8" v-for="vehicle in vehicles" :key="vehicle._id">
          <div class="vehicle">
            <h4 class="vehicle-title">{{vehicle.title}}</h4>
            <span class="vehicle-category">
              Kategorie:
              <span
                class="vehicle-category-item"
                v-for="(category, title) in vehicle.categories"
                :key="title"
              >{{category}},</span>
            </span>
            <img class="vehicle-img" :src="vehicle.image" :alt="vehicle.title">
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { API } from "@/main.js";

export default {
  name: "Vehicles",
  props: {
    noTitle: String
  },
  data: () => ({
    vehicles: []
  }),
  async created() {
    try {
      const response = await axios.get(`${API}/vehicles`);
      response.data ? (this.vehicles = response.data.slice(1)) : false
      ;
      this.vehicles.sort(function(a, b) {
        if (a.categories[0] < b.categories[0]) {
          return -1;
        }
        if (a.categories[0] > b.categories[0]) {
          return 1;
        }
        return 0;
      });
    } catch {
      console.log(response.message);
    }
  }
};
</script>

<style lang="scss" scoped src="./Vehicles.scss" />
