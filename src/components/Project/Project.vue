<template>
  <div
    class="project-wrapper"
    v-bind:style="{ 'background-image': 'url(http://placeimg.com/640/480/arch)' }"
    v-bind:class="{ disabled: disabled }"
  >
    <div class="project-description">
      <h4>Szkolenia na kierowców dla kadr MMŚP z brany transportowej</h4>
      <router-link class="btn btn-primary" to="/instruktorzy/marek-franiak">Więcej</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: ['disabled'],
};
</script>

<style lang="scss" scoped src="./Project.scss" />
