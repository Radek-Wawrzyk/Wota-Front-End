<template>
  <div class="profile-wrapper">
    <figure class="instructor-img">
      <img
        src="https://appworksinc.com/wp-content/uploads/2013/05/Team-Member-3.jpg"
        :alt="instructor.fullname"
      >
    </figure>
    <h3>{{instructor.fullname}}</h3>
    <div class="profile-details">
      <div>
        <p class="muted">Średnia ocen:</p>
        <p class="hilight">4.5/5</p>
      </div>
      <div>
        <p class="muted">Kategorie:</p>
        <p class="hilight" v-for="(category, index) in instructor.categories" :key="index">{{category}}, </p>
      </div>
      <div>
        <p class="muted">Ilość opinii:</p>
        <p class="hilight">19</p>
      </div>
    </div>
    <div>
      <p
        class="muted"
      >{{instructor.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InstructorProfile",
    props: {
      instructor: Object
    }
};
</script>

<style lang="scss" scoped src="./InstructorProfile.scss" />