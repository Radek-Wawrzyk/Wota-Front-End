<template>
  <main>
    <SubHeader title="Projekty"></SubHeader>
    <section class="projects">
      <div class="container">
        <p>Nisi ea officia aliqua ut eiusmod labore incididunt. Labore dolore amet eiusmod reprehenderit dolore id ex laborum ullamco deserunt exercitation irure. Ea aliqua ea proident consequat nulla pariatur. Sit eiusmod duis sint consequat anim culpa proident anim esse quis elit occaecat.</p>
        <div>
          <h3 class="section-title">Trwające projekty</h3>
          <el-row :gutter="50">
            <el-col :md="12"  v-for="(project, index) in enabledProjects" :key="index" >
              <Project :project="project"  />
            </el-col>
          </el-row>
          <p class="no-results" v-if="enabledProjectsLenght === 0">Brak trwających projektów</p>
        </div>
        <div>
          <h3 class="section-title">Zakończone projekty</h3>
          <el-row :gutter="50">
            <el-col :md="12" v-for="(project, index) in disabledProjects" :key="index" >
              <Project :project="project"  />
            </el-col>
          </el-row>
          <p class="no-results" v-if="disabledProjectsLenght === 0">Brak zakończonych projektów</p>
        </div>
      </div>
    </section>
    <Categories/>
  </main>
</template>

<script>
import Categories from "@/components/Categories/Categories";
import Project from "@/components/Project/Project";
import axios from "axios";


export default {
  name: "projectsPage",
  data: () => ({
    projects: []
  }),
  components: {
    Categories,
    Project
  },
  computed: {
    disabledProjects() {
      return this.projects.filter(project => project.status === false);
    },
    disabledProjectsLenght() {
      return this.disabledProjects.length;
    },
    enabledProjectsLenght() {
      return this.enabledProjects.length;
    },
    enabledProjects() {
      return this.projects.filter(project => project.status === true);
    }
  },
  async created() {
    try {
      const response = await axios.get(`${$API}/projects`);
      response.data ? (this.projects = response.data) : false;
    } catch(error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss" scoped src="./ProjectsPage.scss" />