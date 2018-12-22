<template>
  <section class="vehicles">
    <div class="container">
      <h2 class="vehicles-title">Pojazdy</h2>
      <el-row :gutter="50">
        <el-col :md="8">
          <div class="vehicle">
            <h4 class="vehicle-title">Toyota Yaris Automat</h4>
            <span class="vehicle-category">Kategorie: B1, B</span>
            <img
              class="vehicle-img"
              :src="require('../../assets/img/pojazdy/B-Toyota-Yaris-Automat.png')"
              alt="Toyota Yaris Automat"
            >
          </div>
        </el-col>
        <el-col :md="8">
          <div class="vehicle">
            <h4 class="vehicle-title">Yamaha YBR 125</h4>
            <span class="vehicle-category">Kategorie: B1</span>
            <img
              class="vehicle-img"
              :src="require('../../assets/img/pojazdy/A1-Yamaha-YBR-125.png')"
              alt="Yamaha YBR 125"
            >
          </div>
        </el-col>

        <el-col :md="8">
          <div class="vehicle">
            <h4 class="vehicle-title">Yamaha MT 07</h4>
            <span class="vehicle-category">Kategorie: A</span>
            <img
              class="vehicle-img"
              :src="require('../../assets/img/pojazdy/A-Yamaha-MT-07.png')"
              alt="Yamaha MT 07"
            >
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
export default {
  name: "Vehicles"
};
</script>

<style lang="scss" scoped src="./Vehicles.scss" />
