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
  components: {
    Comments,
    RateForm,
    InstructorProfile
  },
  asyncData: async ({ params }) => {
    try {
      const response = await axios.get(`${process.env.API}/instructors/${params.id}`);
      const { data } = await axios.get(`${process.env.API}/rate/${params.id}`);

      return {
        comments: data.filter(accepted => accepted.isAccepted),
        instructor: response.data
      };
    } catch (err) {
      consooe.log(err);
    }
  }
};
</script>

<style lang="scss" scoped src="./InstructorPage.scss" />