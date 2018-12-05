<template>
  <section class="vehicles">
    <div class="container">
      <h2 class="vehicles-title">Pojazdy</h2>
      <el-row :gutter="50">
        <el-col :md="8">
          <div class="vehicle">
            <h3 class="vehicle-title">Ford Mustang 2016 </h3>
            <span class="vehicle-category">Kategorie: B1, B</span>
            <img class="vehicle-img" src="https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/9c127b527cde320dd7597eca04cca814.png" alt="ford mustang" />
          </div>
        </el-col>
        <el-col :md="8">
          <div class="vehicle">
            <h3 class="vehicle-title">Ford Mustang 2016 </h3>
            <span class="vehicle-category">Kategorie: B1, B</span>
            <img class="vehicle-img" src="https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/9c127b527cde320dd7597eca04cca814.png" alt="ford mustang" />
          </div>
        </el-col>
        <el-col :md="8">
          <div class="vehicle">
            <h3 class="vehicle-title">Ford Mustang 2016 </h3>
            <span class="vehicle-category">Kategorie: B1, B</span>
            <img class="vehicle-img" src="https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/9c127b527cde320dd7597eca04cca814.png" alt="ford mustang" />
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Vehicles'
}

</script>

<style lang="scss" scoped src="./Vehicles.scss" />
