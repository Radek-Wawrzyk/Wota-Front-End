<template>
  <main>
    <SubHeader title="Instruktorzy"></SubHeader>
    <div class="container intructor-profile-wrapper">
      <InstructorProfile/>
    </div>
    <RateForm/>
    <div class="container">
      <Comments/>
    </div>
  </main>
</template>

<script>
import Comments from "../../components/Comments/Comments.vue";
import RateForm from "../../components/RateForm/RateForm.vue";
import InstructorProfile from "../../components/InstructorProfile/InstructorProfile.vue";

export default {
  name: "instructorPage",
  components: {
    Comments,
    RateForm,
    InstructorProfile
  }
};
</script>

<style lang="scss" scoped src="./InstructorPage.scss" />