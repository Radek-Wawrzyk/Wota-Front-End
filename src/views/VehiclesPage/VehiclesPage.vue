<template>
  <main>
    <SubHeader title="Pojazdy"></SubHeader>
    <section class="vehicles">
      <div class="container">
        <p class="vehicles-info">
          Szkolenie odbywa się na pojazdach, którymi dysponuje również wojewódzki ośrodek egzaminacyjny w
          Łodzi. Podążając za potrzebami naszych klientów oferujemy kursy dla osób z niepełnosprawnościami
          ruchowymi.
          <br>Wszystkie nasze pojazdy są sprawne technicznie, spełniają wymogi szkoleniowo – egzaminacyjne.
          <br>Istnieje możliwość - (za dodatkową opłatą), podstawienia naszego pojazdu na egzamin.
        </p>
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
import Categories from "../../components/Categories/Categories.vue";
import Gallery from "../../components/Gallery/Gallery";
import axios from "axios";
import { API } from "@/main.js";
import Vehicles from "../../components/Vehicles/Vehicles.vue";

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
      const response = await axios.get(`${API}/vehicles`);
      response.data ? (this.vehicles = response.data) : false;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss" scoped src="./VehiclesPage.scss" />