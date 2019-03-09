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
import { API } from '@/main.js';

export default {
  name: 'Project',
  props: {
    id: String
  },
  data: () => ({
    project: {}
  }),
  async created() {
    try {
      const response = await axios.get(`${API}/projects/${this.id}`);
      response.data ? this.project = response.data.project : false;
    } catch(error) {
      console.log(error.message);
    }
  }
};
</script>

<style lang="scss" scoped src="./ProjectPage.scss" />
