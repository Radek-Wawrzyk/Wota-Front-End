<template>
  <main>
    <SubHeader title="Projekty"></SubHeader>
    <section class="projects">
      <div class="container">
        <p class="projects-subtitle"> 
          Jesteśmy liderem na łódzkim rynku szkoleń również w zakresie kursów prawa jazdy, współfinansowanych ze
          środków unijnych. Posiadamy wieloletnie doświadczenie w realizacji projektów. Jesteśmy liderem na łódzkim rynku
          szkoleń. Prowadzimy zarówno projekty lokalne, jak i współfinansowane ze środków unijnych.
        </p>
        <div>
          <h3 class="section-title">Trwające projekty</h3>
          <el-row :gutter="50">
            <el-col :md="12"  v-for="(project, index) in enabledProjects" :key="index" >
              <Project :project="project" />
            </el-col>
          </el-row>
          <p class="no-results" v-if="enabledProjectsLenght === 0">Brak trwających projektów</p>
        </div>
        <div>
          <h3 class="section-title">Zakończone projekty</h3>
          <el-row :gutter="50">
            <el-col :md="12" v-for="(project, index) in disabledProjects" :key="index" >
              <Project :project="project" disabled />
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
  components: {
    Categories,
    Project
  },
  computed: {
    disabledProjects() {
      const filtered = this.projects.filter(
        project => project.status === false
      );

      return filtered.sort((a, b) => {
        a.index < b.index ? -1 : a.index > b.index ? 1 : 0;
      })
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
  asyncData: async () => {
    try {
      const response = await axios.get(`${process.env.API}/projects`);
      return { projects: response.data };
    } catch (err) {
      return { projects: [] };
    }
  }
};
</script>

<style lang="scss" scoped src="./index.scss" />