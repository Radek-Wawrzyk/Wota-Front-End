<template>
  <main>
    <SubHeader title="Pojazdy"></SubHeader>
    <section class="vehicles">
      <div class="container">
        <p class="vehicles-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet doloremque placeat eius, recusandae iste nihil velit dolores perferendis beatae possimus doloribus! Saepe doloremque ad ut esse at voluptatem doloribus odio.
        </p>
        <el-row :gutter="30">
          <el-col :md="8" :sm="12" >
            <div class="vehicle">
              <h2 class="vehicle-name">Toyota Yaris III</h2>
              <p class="vehicle-categories">Kategorie: <span>b1, b</span></p>
              <img class="vehicle-img" src="https://cdn.rotorint.com/Yaris/2017_01_Jan/e/hero/png/lo/907x510/2017-01_Yaris_FWD_5DR-HB_PET_Ascent_A0_3P0_Cherry_e360_003.png" />
            </div>
          </el-col>
          <el-col :md="8" :sm="12">
            <div class="vehicle">
              <h2 class="vehicle-name">Toyota Yaris III</h2>
              <p class="vehicle-categories">Kategorie: <span>b1, b</span></p>
              <img class="vehicle-img" src="https://cdn.rotorint.com/Yaris/2017_01_Jan/e/hero/png/lo/907x510/2017-01_Yaris_FWD_5DR-HB_PET_Ascent_A0_3P0_Cherry_e360_003.png" />
            </div>
          </el-col>
          <el-col :md="8" :sm="12">
            <div class="vehicle">
              <h2 class="vehicle-name">Toyota Yaris III</h2>
              <p class="vehicle-categories">Kategorie: <span>b1, b</span></p>
              <img class="vehicle-img" src="https://cdn.rotorint.com/Yaris/2017_01_Jan/e/hero/png/lo/907x510/2017-01_Yaris_FWD_5DR-HB_PET_Ascent_A0_3P0_Cherry_e360_003.png" />
            </div>
          </el-col>
          <el-col :md="8" :sm="12">
            <div class="vehicle">
              <h2 class="vehicle-name">Toyota Yaris III</h2>
              <p class="vehicle-categories">Kategorie: <span>b1, b</span></p>
              <img class="vehicle-img" src="https://cdn.rotorint.com/Yaris/2017_01_Jan/e/hero/png/lo/907x510/2017-01_Yaris_FWD_5DR-HB_PET_Ascent_A0_3P0_Cherry_e360_003.png" />
            </div>
          </el-col>
          <el-col :md="8" :sm="12">
            <div class="vehicle">
              <h2 class="vehicle-name">Toyota Yaris III</h2>
              <p class="vehicle-categories">Kategorie: <span>b1, b</span></p>
              <img class="vehicle-img" src="https://cdn.rotorint.com/Yaris/2017_01_Jan/e/hero/png/lo/907x510/2017-01_Yaris_FWD_5DR-HB_PET_Ascent_A0_3P0_Cherry_e360_003.png" />
            </div>
          </el-col>
          <el-col :md="8" :sm="12">
            <div class="vehicle">
              <h2 class="vehicle-name">Toyota Yaris III</h2>
              <p class="vehicle-categories">Kategorie: <span>b1, b</span></p>
              <img class="vehicle-img" src="https://cdn.rotorint.com/Yaris/2017_01_Jan/e/hero/png/lo/907x510/2017-01_Yaris_FWD_5DR-HB_PET_Ascent_A0_3P0_Cherry_e360_003.png" />
            </div>
          </el-col>
        </el-row>
      </div>
    </section>
    <Categories></Categories>
  </main>
</template>

<script>
import Categories from '../../components/Categories/Categories.vue';

export default {
  name: 'vehiclesPage',
  components: {
    Categories
  }
};
</script>

<style lang="scss" scoped src="./VehiclesPage.scss" />