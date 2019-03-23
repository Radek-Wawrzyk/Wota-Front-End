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
import Comments from "@/components/Comments/Comments.vue";
import RateForm from "@/components/RateForm/RateForm.vue";
import InstructorProfile from "@/components/InstructorProfile/InstructorProfile.vue";
import axios from "axios";

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
  async created() {
    try {
      const response = await axios.get(`${this.$API}/instructors/${this.$route.params.id}`);
      const { data } = await axios.get(`${this.$API}/rate/${this.$route.params.id}`);
      this.comments = data;
      response.data ? (this.instructor = response.data) : false;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss" scoped src="./InstructorPage.scss" />