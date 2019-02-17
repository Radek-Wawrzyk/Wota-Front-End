<template>
  <div
    class="project-wrapper"
    :style="{ 'background-image': 'url(http://placeimg.com/640/480/arch)' }"
    :class="{ disabled: disabled }"
  >
    <div class="project-description">
      <h4>Szkolenia na kierowców dla kadr MMŚP z brany transportowej</h4>
      <router-link class="btn btn-primary" :to="`/projekty/${project._id}`">Więcej</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    disabled: Boolean,
    project: Object
  }
};
</script>

<style lang="scss" scoped src="./Project.scss" />
