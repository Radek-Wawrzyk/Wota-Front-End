<template>
  <section class="about">
    <header class="about-header">
      <h2 class="about-header-title">Nasz szkoła</h2>
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
              <svg aria-hidden="true" data-prefix="fas" data-icon="clipboard-check" class="svg-inline--fa fa-clipboard-check fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm121.2 231.8l-143 141.8c-4.7 4.7-12.3 4.6-17-.1l-82.6-83.3c-4.7-4.7-4.6-12.3.1-17L99.1 285c4.7-4.7 12.3-4.6 17 .1l46 46.4 106-105.2c4.7-4.7 12.3-4.6 17 .1l28.2 28.4c4.7 4.8 4.6 12.3-.1 17z"></path></svg>
            </figure>
            <h3 class="tile-title">Wysoka zdawalność</h3>
            <p class="tile-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus porro eligendi saepe quasi consectetur omnis officia. Quisquam sapiente, reprehenderit, rem eius aliquam quas, tempora corporis explicabo facere consequuntur minima aperiam!</p>
          </div>
        </el-col>
        <el-col :md="8">
          <div class="tile">
            <figure class="tile-icon">
              <svg aria-hidden="true" data-prefix="fas" data-icon="clipboard-check" class="svg-inline--fa fa-clipboard-check fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm121.2 231.8l-143 141.8c-4.7 4.7-12.3 4.6-17-.1l-82.6-83.3c-4.7-4.7-4.6-12.3.1-17L99.1 285c4.7-4.7 12.3-4.6 17 .1l46 46.4 106-105.2c4.7-4.7 12.3-4.6 17 .1l28.2 28.4c4.7 4.8 4.6 12.3-.1 17z"></path></svg>
            </figure>
            <h3 class="tile-title">Wysoka zdawalność</h3>
            <p class="tile-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus porro eligendi saepe quasi consectetur omnis officia. Quisquam sapiente, reprehenderit, rem eius aliquam quas, tempora corporis explicabo facere consequuntur minima aperiam!</p>
          </div>
        </el-col>
        <el-col :md="8">
          <div class="tile">
            <figure class="tile-icon">
              <svg aria-hidden="true" data-prefix="fas" data-icon="clipboard-check" class="svg-inline--fa fa-clipboard-check fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm121.2 231.8l-143 141.8c-4.7 4.7-12.3 4.6-17-.1l-82.6-83.3c-4.7-4.7-4.6-12.3.1-17L99.1 285c4.7-4.7 12.3-4.6 17 .1l46 46.4 106-105.2c4.7-4.7 12.3-4.6 17 .1l28.2 28.4c4.7 4.8 4.6 12.3-.1 17z"></path></svg>
            </figure>
            <h3 class="tile-title">Wysoka zdawalność</h3>
            <p class="tile-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus porro eligendi saepe quasi consectetur omnis officia. Quisquam sapiente, reprehenderit, rem eius aliquam quas, tempora corporis explicabo facere consequuntur minima aperiam!</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>

export default {
  name: 'About'
};

</script>

<style lang="scss" scoped src="./About.scss" />
