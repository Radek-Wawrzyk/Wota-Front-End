<template>
  <div
    class="project-wrapper"
    :style="{ 'background-image': `url(${project.image})` }"
    :class="{ disabled: disabled }"
  >
    <div class="project-description">
      <h4>{{project.title}}</h4>
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
