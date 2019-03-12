<template>
  <section class="about">
    <header class="about-header">
      <h2 class="about-header-title">Nasza szkoła</h2>
      <p class="about-header-description">
        Auto Szkoła "WOTA" powstała w styczniu 1989 roku. Pomysłodawcą i założycielem był wtedy Zygmunt Wota -
        Instruktor nauki jazdy z wielotetnim stażem. Był to historyczny kork w nową rzeczywistość. Pierwszy prywatny ośrodek kształcenia kierwców w Łodzi zaczął
      </p>
    </header>
    <div class="container">
      <el-row :gutter="30">
        <el-col :md="8">
          <div class="tile">
            <figure class="tile-icon">
              <img
                class="vehicle-img"
                :src="require('../../assets/img/zdawalnosc.png')"
                alt="Wysoka zdawalnosc"
              >
            </figure>
            <h3 class="tile-title">Wysoka zdawalność</h3>
            <p
              class="tile-description"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus porro eligendi saepe quasi consectetur omnis officia. Quisquam sapiente, reprehenderit, rem eius aliquam quas, tempora corporis explicabo facere consequuntur minima aperiam!</p>
          </div>
        </el-col>
        <el-col :md="8">
          <div class="tile">
            <figure class="tile-icon">
              <img
                class="vehicle-img"
                :src="require('../../assets/img/wybor.png')"
                alt="Duża ilość kategorii"
              >
            </figure>
            <h3 class="tile-title">Duża ilość kategorii</h3>
            <p
              class="tile-description"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus porro eligendi saepe quasi consectetur omnis officia. Quisquam sapiente, reprehenderit, rem eius aliquam quas, tempora corporis explicabo facere consequuntur minima aperiam!</p>
          </div>
        </el-col>
        <el-col :md="8">
          <div class="tile">
            <figure class="tile-icon">
              <img
                class="vehicle-img"
                :src="require('../../assets/img/ubezpieczenie.png')"
                alt="Ubezpieczenie"
              >
            </figure>
            <h3 class="tile-title">Ubezpieczenie</h3>
            <p
              class="tile-description"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus porro eligendi saepe quasi consectetur omnis officia. Quisquam sapiente, reprehenderit, rem eius aliquam quas, tempora corporis explicabo facere consequuntur minima aperiam!</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="scss" scoped src="./About.scss" />
