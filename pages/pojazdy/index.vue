<template>
  <main>
    <SubHeader title="Pojazdy"></SubHeader>
    <section class="vehicles">
      <div class="container">
        <p class="vehicles-info">
          Szkolenie odbywa się na pojazdach, jakimi dysponuje również wojewódzki ośrodek egzaminacyjny w
          Łodzi. Podążając za potrzebami naszych klientów oferujemy kursy dla osób z niepełnosprawnościami
          ruchowymi.
          <br>Wszystkie nasze pojazdy są sprawne technicznie, spełniają wymogi szkoleniowo – egzaminacyjne.
          <br>Istnieje możliwość- za dodatkową opłatą , podstawienia naszego pojazdu na egzamin.
        </p>
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