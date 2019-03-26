<template>
  <div class="table-responsive">
    <table class="zui-table-rounded">
      <thead>
        <tr>
          <th></th>
          <th>Kategoria</th>
          <th>Praktyka</th>
          <th>Teoria</th>
          <th>Uwagi</th>
          <th>Cena kursu</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <nuxt-link
          :to="`/kursy/${course._id}`"
          :title="course.title"
          :aria-label="course.title"
          class="link"
          v-for="course in this.courses"
          :key="course._id"
        >
          <tr>
            <th>
              <img :src="course.icon" :alt="course.title">
            </th>
            <th>{{course.title}}</th>
            <th>{{course.practise}}</th>
            <th>{{course.theory}}</th>
            <th>{{course.comments}}</th>
            <th>{{course.price}}</th>
            <th class="table-cell-button">
              <i class="el-icon-caret-right"></i>
            </th>
          </tr>
        </nuxt-link>
      </tbody>
    </table>
    {{course}}
  </div>
</template>

<script>
export default {
  name: "coursesTable",
  props: {
    courses: Array
  }
};
</script>

<style lang="scss" scoped src="./CoursesTable.scss" />