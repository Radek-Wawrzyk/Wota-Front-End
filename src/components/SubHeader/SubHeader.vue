<template>
  <header class="header" :style="backgroundImg  ? `background-image: url(${backgroundImg})` : ``" :class="{'header-custom-background' : backgroundImg}">
    <h1 class="header-title">{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: 'SubHeader',
  props: {
    title: String,
    backgroundImg: String
  }
};
</script>

<style lang="scss" scoped src="./SubHeader.scss" />
