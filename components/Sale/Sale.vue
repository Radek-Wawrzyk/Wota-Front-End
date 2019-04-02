<template>
  <section class="sale">
    <div class="container">
      <h2 class="sale-title">{{title ? title : 'Rabat -20%'}}</h2>
      <p class="sale-description">
        <span v-if="subtitle">
          <span v-html="subtitle"></span>
        </span>
        <span v-if="!subtitle">Chcesz zrobić więcej niż jeden kurs? Co powiesz na rabat ?
          <br>Każdy kolejny kurs -5%
        </span>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Sale",
  props: {
    title: String,
    subtitle: String
  }
};
</script>

<style src="./Sale.scss" lang="scss" scoped />