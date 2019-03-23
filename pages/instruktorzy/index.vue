<template>
  <main>
    <SubHeader title="Instruktorzy"></SubHeader>
    <div class="container">
      <section class="instructors">
        <p class="instructors-info">
          Zajęcia praktyczne w Auto Szkole Wota prowadzone są przez kadrę doświadczonych instruktorów
          <br>Osoby te posiadają nie tylko odpowiednie kwalifikacje pozwalające na prawidłowe przeprowadzanie szkolenia,
          ale także cechy charakteru sprzyjające tworzeniu przyjaznej atmosfery podczas szkolenia.
          <br>
          <br>Poniżej obok sylwetek naszych instruktorów znajdują się ikony informujące o zakresie kategorii szkoleń.
        </p>
        <ul class="instructors-list">
          <li class="instructor" v-for="instructor in instructors" :key="instructor._id">
            <figure class="instructor-img">
              <img :src="instructor.avatar" :alt="instructor.fullname">
            </figure>
            <h2 class="instructor-title">{{instructor.fullname}}</h2>
            <ul class="instructor-stats">
              <li class="instructor-stats-item">
                <p>Kategorie</p>
                <!-- <span v-for="(category, index) in instructor.categories" :key="index">{{category}},</span> -->
                <span v-if="instructor.categories.length === 1">{{instructor.categories[0]}}</span>
                <span v-if="instructor.categories.length > 1">{{instructor.categories.join(',')}}</span>
              </li>
              <!-- <li class="instructor-stats-item">
                <p>Średnia ocen:</p>
                <span>Brak</span>
              </li>
              <li class="instructor-stats-item">
                <p>Ilość opinii:</p>
                <span>Brak</span>
              </li>-->
            </ul>
            <router-link class="btn btn-primary" :to="`/instruktorzy/${instructor._id}`">Więcej</router-link>
          </li>
        </ul>
      </section>
    </div>
    <Sale></Sale>
  </main>
</template>

<script>
import Sale from "@/components/Sale/Sale.vue";
import axios from "axios";


export default {
  name: "instructorsPage",
  data: () => ({
    instructors: []
  }),
  components: {
    Sale
  },
  async created() {
    try {
      const response = await axios.get(`${this.$API}/instructors`);
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

<style lang="scss" scoped src="./InstructorsPage.scss" />