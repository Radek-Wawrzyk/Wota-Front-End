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
  components: {
    Sale
  },
  asyncData: async () => {
    try {
      const response = await axios.get(`${process.env.API}/instructors`);
      response.data.sort((a, b) => a.index < b.index ? -1 : a.index > b.index ? 1 : 0);
      return { instructors: response.data };
    } catch (err) {
      return { instructors: [] };
    }
  },
};
</script>

<style lang="scss" scoped src="./index.scss" />