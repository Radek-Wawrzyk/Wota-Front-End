<template>
  <div class="profile-wrapper">
    <figure class="instructor-img">
      <img :src="instructor.avatar" :alt="instructor.fullname">
    </figure>
    <h3>{{instructor.fullname}}</h3>
    <div class="profile-details">
      <div>
        <p class="muted">Średnia ocen:</p>
        <p class="hilight" v-if="comments.length > 0">
          {{this.comments.reduce((total, value)=> {
          return total + Number(value.rate) / comments.length;
          }, 0)}}/5
        </p>
        <p class="hilight" v-if="comments.length == 0">Brak</p>
      </div>
      <div>
        <p class="muted">Kategorie:</p>
        <p
          class="hilight"
          v-for="(category, index) in instructor.categories"
          :key="index"
        >{{category}}</p>
      </div>
      <div>
        <p class="muted">Ilość opinii:</p>
        <p class="hilight">{{this.comments.length || "Brak"}}</p>
      </div>
    </div>
    <div>
      <p class="muted" v-if="instructor.description !== 'Brak'">{{instructor.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InstructorProfile",
  props: {
    instructor: Object,
    comments: Array
  }
};
</script>

<style lang="scss" scoped src="./InstructorProfile.scss" />