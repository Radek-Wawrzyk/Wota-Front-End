<template>
  <!-- <section class="map" :class="{'map-red': withRed}">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2470.759549564257!2d19.371736915778477!3d51.737433179673594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a357f07b98f53%3A0xf9428cfe9f6a4919!2zTm93eSBKw7N6ZWbDs3cgODYsIDk0LTQwNiDFgcOzZMW6!5e0!3m2!1spl!2spl!4v1551831047489" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
  </section>-->
  <GmapMap
    :center="{lat:51.750943, lng:19.409119}"
    :zoom="12"
    map-type-id="terrain"
    style="width: 100%; height: 450px"
  >
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m"
      :label="{
      color: 'black',
      fontSize: '23px',
      padding: '10px',
      text: m.title,
    }"
    />
  </GmapMap>
</template>

<script>
export default {
  name: "Map",
  props: ["withRed"],
  data() {
    return {
      markers: [
        {
          lat: 51.730917,
          lng: 19.34998,
          title: "Nowy Józefów 6"
        },
        {
          lat: 51.781939,
          lng: 19.444331,
          title: "Piwna 3"
        },
        {
          lat: 51.750843,
          lng: 19.409119,
          title: "Retkińska 83"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped src="./Map.scss" />