<template>
  <main>
    <SubHeader :title="project.title" :backgroundImg="project.image"></SubHeader>
    <section class="project">
      <div class="container">
        <!-- <h2 class="project-title">{{project.subtitle}}</h2> -->
        <div class="project-content editor-content" v-html="project.content"></div>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: 'Project',
  asyncData: async ({ params }) => {
    const response = await axios.get(`${process.env.API}/projects/${params.id}`);
    return { project: response.data.project };
  },
};
</script>

<style lang="scss" scoped src="./index.scss" />
