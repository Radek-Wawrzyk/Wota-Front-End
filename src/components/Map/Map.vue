<template>
  <section class="map" :class="{'map-red': withRed}">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.339523332798!2d19.466411315779403!3d51.763399979677956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bcb2d2fb20d89%3A0xc1dbde99c781c6a3!2zTmF3cm90IDQ2LCA5MC0wMDEgxYHDs2TFug!5e0!3m2!1spl!2spl!4v1544330850736" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
  </section>
</template>

<script>

export default {
  name: 'Map',
  props: [
    'withRed'
  ]
};

</script>

<style lang="scss" scoped src="./Map.scss" />