<template>
  <main>
    <SubHeader title="Kursy"></SubHeader>
    <div class="container">
      <section class="courses">
        <CoursesTable :courses="courses" />
      </section>
    </div>
    <Sale/>
    <div class="container section-spacing">
      <Gallery :gallery="gallery" />
    </div>
  </main>
</template>

<script>
import Sale from "@/components/Sale/Sale.vue";
import CoursesTable from "@/components/CoursesTable/CoursesTable";
import Gallery from "@/components/Gallery/Gallery";
import SubHeader from '@/components/SubHeader/SubHeader';
import axios from 'axios';

export default {
  name: "coursesPage",
  components: {
    Sale,
    Gallery,
    CoursesTable,
    SubHeader
  },
  asyncData: async () => {
    try {
      const response = await axios.get(`${process.env.API}/courses`);
      const data = await axios.get(`${process.env.API}/galery`);
      response.data.sort(
        (a, b) => a.title < b.title ? -1 : a.title > b.title ? 1 : 0
      )
      
      return { 
        courses: response.data,
        gallery: data.data
      };
    } catch (err) {
      return { courses: [] };
    }
  }
};
</script>

<style lang="scss" scoped src="./CoursesPage.scss" />