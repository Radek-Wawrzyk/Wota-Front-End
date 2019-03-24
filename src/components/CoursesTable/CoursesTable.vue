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
        <router-link
          :to="`/kursy/${course._id}`"
          :title="course.title"
          :aria-label="course.title"
          class="link"
          v-for="course in this.courses"
          :key="course._id"
        >
          <tr>
            <td class="course-icon">
              <img :src="course.icon" :alt="course.title">
            </td>
            <td data-label="Kategoria">{{course.title}}</td>
            <td data-label="Praktyka">{{course.practise}}</td>
            <td data-label="Teoria">{{course.theory}}</td>
            <td data-label="Uwagi">{{course.comments}}</td>
            <td data-label="Cena kursu">{{course.price}}</td>
            <th class="table-cell-button">
              <i class="el-icon-caret-right"></i>
            </th>
          </tr>
        </router-link>
      </tbody>
    </table>
    {{course}}
  </div>
</template>

<script>
import { API } from "@/main.js";
import axios from "axios";

export default {
  name: "coursesTable",
  data: () => ({
    courses: []
  }),
  async created() {
    try {
      const response = await axios.get(`${API}/courses`);
      response.data ? (this.courses = response.data) : false;
      this.courses.sort(function(a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss" scoped src="./CoursesTable.scss" />