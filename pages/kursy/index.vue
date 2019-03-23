<template>
  <main>
    <SubHeader title="Kursy"></SubHeader>
    <div class="container">
      <section class="courses">
        <CoursesTable/>
      </section>
    </div>
    <Sale/>
    <div class="container section-spacing">
      <!-- <Gallery/> -->
    </div>
  </main>
</template>

<script>
import Sale from "@/components/Sale/Sale.vue";
import CoursesTable from "@/components/CoursesTable/CoursesTable";
import Gallery from "@/components/Gallery/Gallery";
import SubHeader from '@/components/SubHeader/SubHeader';

export default {
  name: "coursesPage",
  components: {
    Sale,
    Gallery,
    CoursesTable,
    SubHeader
  },
  created() {
    console.log('xD')
  }
};
</script>

<style lang="scss" scoped src="./CoursesPage.scss" />