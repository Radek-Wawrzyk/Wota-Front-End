<template>
  <main>
    <SubHeader title="Projekty"></SubHeader>
    <section class="projects">
      <div class="container">
        <p>Nisi ea officia aliqua ut eiusmod labore incididunt. Labore dolore amet eiusmod reprehenderit dolore id ex laborum ullamco deserunt exercitation irure. Ea aliqua ea proident consequat nulla pariatur. Sit eiusmod duis sint consequat anim culpa proident anim esse quis elit occaecat.</p>
        <div>
          <h3 class="section-title">Trwające projekty</h3>
          <el-row :gutter="50">
            <el-col :span="12">
              <Project/>
            </el-col>
            <el-col :span="12">
              <Project/>
            </el-col>
            <el-col :span="12">
              <Project/>
            </el-col>
            <el-col :span="12">
              <Project/>
            </el-col>
          </el-row>
          <h3 class="section-title">Zakończone projekty</h3>
          <el-row :gutter="50">
            <el-col :span="12">
              <Project disabled="true"/>
            </el-col>
            <el-col :span="12">
              <Project disabled="true"/>
            </el-col>
          </el-row>
        </div>
      </div>
    </section>
    <Categories/>
  </main>
</template>

<script>
import Categories from "../../components/Categories/Categories";
import Project from "../../components/Project/Project";

export default {
  name: "projectsPage",
  components: {
    Categories,
    Project
  }
};
</script>

<style lang="scss" scoped src="./ProjectsPage.scss" />