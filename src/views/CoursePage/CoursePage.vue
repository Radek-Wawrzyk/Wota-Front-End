<template>
  <main>
    <SubHeader title="Kurs"></SubHeader>
    <div class="container">
      <div class="course-page-header">
        <img :src="require('../../assets/img/kategorie/A.png')" alt="Kategoria A">
        <h1>A</h1>
        <h6>Kategoria</h6>
        <p>Consectetur laborum irure sit elit mollit. Eu aliquip amet voluptate laboris deserunt aliqua. Amet id incididunt mollit ullamco veniam magna voluptate. Esse nulla aliquip duis ad irure incididunt id aute. Proident magna eiusmod sit aliquip elit adipisicing. Non minim anim eiusmod pariatur officia do est enim fugiat consectetur sit.</p>
      </div>
      <div>
        <el-row>
          <el-col :span="12">
            <el-row>
              <el-col :span="24" class="category-info-details p-r">
                <div>Cena:</div>
                <div>1350zł</div>
              </el-col>
              <el-col :span="24" class="category-info-details p-r">
                <div>Teoria:</div>
                <div>35h</div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row>
              <el-col :span="24" class="category-info-details p-l">
                <div>Praktyka:</div>
                <div>25h</div>
              </el-col>
              <el-col :span="24" class="category-info-details p-l">
                <div>Jazda dodatkowa:</div>
                <div>55zł</div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <div>
        <CoursesTable/>
      </div>
    </div>
    <Sale/>
    <div class="container section-spacing">
      <Gallery/>
    </div>
  </main>
</template>
<script>
import Sale from "../../components/Sale/Sale.vue";
import CoursesTable from "../../components/CourseTable/CourseTable";
import Gallery from "../../components/Gallery/Gallery";

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
      const response = await axios.get(`${API}/courses/${this.id}`);
      response.data ? this.course = response.data : false;
    } catch(error) {
      console.log(error.message);
    }
  }
};
</script>

<style lang="scss" scoped src="./CoursePage.scss" />