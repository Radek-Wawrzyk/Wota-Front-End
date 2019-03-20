<template>
  <section class="instructors">
    <h2 class="instructors-title">Instruktorzy</h2>
    <h4 v-if="instructors.length === 0" class="nexist">Lista instruktorów jest pusta</h4>
    <carousel
      class="instructors-slider"
      :per-page="3"
      :autoplay="true"
      :autoplayHoverPause="true"
      :paginationEnabled="true"
      :navigationEnabled="true"
      :navigationNextLabel="this.next"
      :navigationPrevLabel="this.prev"
      :perPageCustom="[[320, 1], [768, 2], [992, 3]]"
    >
      <slide
        class="instructor el-col el-col-8"
        v-for="instructor in instructors"
        :key="instructor._id"
      >
        <figure class="instructor-img">
          <img :src="instructor.avatar" :alt="instructor.fullname">
        </figure>
        <h3 class="instructor-name">{{instructor.fullname}}</h3>
        <ul class="instructor-list">
          <li class="instructor-list-item">
            Kategorie:
            <span
              v-for="(category, index) in instructor.categories"
              :key="index"
            >{{category}}</span>
          </li>
          <!-- <li class="instructor-list-item">
            Średnia ocen:
            <span>4.9/5</span>
          </li>
          <li class="instructor-list-item">
            Opinii:
            <span>68</span>
          </li> -->
        </ul>
        <footer class="instructor-more">
          <router-link
            :to="`/instruktorzy/${instructor._id}`"
            :title="instructor.fullname"
            :aria-label="instructor.fullname"
          >czytaj dalej ></router-link>
        </footer>
      </slide>
    </carousel>

    <footer class="instructors-footer">
      <router-link class="btn btn-outline" to="instruktorzy/">Zobacz wszystkich ></router-link>
    </footer>
  </section>
</template>

<script>
import axios from "axios";
import { API } from "@/main.js";

export default {
  name: "Instructors",
  data: () => ({
    instructors: [],
    prev:
      '<svg aria-hidden="true" data-prefix="fas" data-icon="angle-left" class="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>',
    next:
      '<svg aria-hidden="true" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>'
  }),
  async created() {
    try {
      const response = await axios.get(`${API}/instructors`);
      response.data ? (this.instructors = response.data) : false;
      this.instructors.sort(function(a, b) {
        if (a.index < b.index) {
          return -1;
        }
        if (a.index > b.index) {
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

<style lang="scss" src="./Instructors.scss"  />
