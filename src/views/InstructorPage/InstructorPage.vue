<template>
  <main>
    <SubHeader title="Instruktor"></SubHeader>
    <div class="container intructor-profile-wrapper">
      <InstructorProfile :instructor="instructor.instructor" :comments="comments"/>
    </div>
    <RateForm :instructor="instructor.instructor"/>
    <div class="container">
      <Comments :comments="comments"/>
    </div>
  </main>
</template>

<script>
import Comments from "../../components/Comments/Comments.vue";
import RateForm from "../../components/RateForm/RateForm.vue";
import InstructorProfile from "../../components/InstructorProfile/InstructorProfile.vue";
import axios from "axios";
import { API } from "@/main.js";

export default {
  name: "instructorPage",
  data: () => ({
    instructor: {},
    comments: []
  }),
  components: {
    Comments,
    RateForm,
    InstructorProfile
  },
  props: {
    id: String
  },
  async created() {
    try {
      const response = await axios.get(`${API}/instructors/${this.id}`);
      const { data } = await axios.get(`${API}/rate/${this.id}`);
      this.comments = data;
      response.data ? (this.instructor = response.data) : false;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss" scoped src="./InstructorPage.scss" />