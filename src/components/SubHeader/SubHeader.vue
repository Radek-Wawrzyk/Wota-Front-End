<template>
  <header class="header">
    <h1 class="header-title">{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: 'SubHeader',
  props: [
    'title'
  ]
};
</script>

<style lang="scss" scoped src="./SubHeader.scss" />
