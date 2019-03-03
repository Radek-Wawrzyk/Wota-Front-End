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
        <router-link :to="`/kursy/${course._id}`" :title="course.title" :aria-label="course.title" class="link" v-for="course in this.courses" :key="course._id">
          <tr>
            <th>
              <img :src="course.icon" :alt="course.title">
            </th>
            <th>{{course.title}}</th>
            <th>{{course.practise}}</th>
            <th>{{course.teory}}</th>
            <th>{{course.additional.length > 0 ? course.additional : 'Brak'}}</th>
            <th>{{course.price}}</th>
            <th class="table-cell-button">
              <i class="el-icon-caret-right"></i>
            </th>
          </tr>
        </router-link>
      </tbody>
    </table>
  </div>
</template>

<script>
import { API } from '@/main.js';
import axios from 'axios';

export default {
  name: "coursesTable",
  data: () => ({
    courses: []
  }),
  async created() {
    try {
      const response = await axios.get(`${API}/courses`);
      response.data ? (this.courses = response.data) : false;
      console.log(this.courses);
    } catch(error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss" scoped src="./CoursesTable.scss" />