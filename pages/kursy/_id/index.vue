<template>
  <main>
    <SubHeader title="Kurs"></SubHeader>
    <div class="container">
      <header class="course-page-header">
        <!-- <img :src="course.icon" :alt="course.title"> -->
        <h1>{{course.title}}</h1>
        <h6>Kategoria</h6>
        <p>{{course.description}}</p>
      </header>
      <div class="course-page-content">
        <el-row>
          <el-col :md="12">
            <el-row>
              <el-col :span="24" class="category-info-details p-r">
                <div>Cena:</div>
                <div>{{course.price}}</div>
              </el-col>
              <el-col :span="24" class="category-info-details p-r">
                <div>Teoria:</div>
                <div>{{course.theory}}</div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :md="12">
            <el-row>
              <el-col :span="24" class="category-info-details p-l">
                <div>Praktyka:</div>
                <div>{{course.practise}}</div>
              </el-col>
              <el-col :span="24" class="category-info-details p-l">
                <div>Jazda dodatkowa:</div>
                <div>{{course.additional}}</div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <div v-if="JSON.parse(course.schedule)[0].values.length > 0 || JSON.parse(course.schedule)[1].values.length > 0 || JSON.parse(course.schedule)[2].values.length > 0">
        <!-- {{JSON.parse(course.schedule)[2]}} -->
        <CoursesTable :schedule="JSON.parse(course.schedule)"/>
      </div>
    </div>
    <Sale/>
    <div class="container section-spacing">
      <Gallery/>
    </div>
  </main>
</template>

<script>
import Sale from "@/components/Sale/Sale.vue";
import CoursesTable from "@/components/CourseTable/CourseTable";
import Gallery from "@/components/Gallery/Gallery";
import axios from "axios";


export default {
  name: "coursePage",
  data: () => ({
    course: {}
  }),
  props: {
    id: String
  },
  components: {
    Sale,
    Gallery,
    CoursesTable
  },
  async created() {
    try {
      const response = await axios.get(`${this.$API}/courses/${this.id}`);
      response.data ? (this.course = response.data.course) : false;
    } catch (error) {
      console.log(error.message);
    }
  }
};
</script>

<style lang="scss" scoped src="./CoursePage.scss" />