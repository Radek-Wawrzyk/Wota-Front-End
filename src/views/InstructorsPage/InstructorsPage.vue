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
          <li class="instructor">
            <figure class="instructor-img">
              <img
                src="https://appworksinc.com/wp-content/uploads/2013/05/Team-Member-3.jpg"
                alt="Marek Franiak"
              >
            </figure>
            <h2 class="instructor-title">Marek Franiak</h2>
            <ul class="instructor-stats">
              <li class="instructor-stats-item">
                <p>Kategorie</p>
                <span>a1, a ,b1, b</span>
              </li>
              <li class="instructor-stats-item">
                <p>Średnia ocen:</p>
                <span>4.5/5</span>
              </li>
              <li class="instructor-stats-item">
                <p>Ilość opinii:</p>
                <span>18</span>
              </li>
            </ul>
            <router-link class="btn btn-primary" to="/instruktorzy/marek-franiak">Więcej</router-link>
          </li>
          <li class="instructor">
            <figure class="instructor-img">
              <img
                src="https://appworksinc.com/wp-content/uploads/2013/05/Team-Member-3.jpg"
                alt="Marek Franiak"
              >
            </figure>
            <h2 class="instructor-title">Marek Franiak</h2>
            <ul class="instructor-stats">
              <li class="instructor-stats-item">
                <p>Kategorie</p>
                <span>a1, a ,b1, b</span>
              </li>
              <li class="instructor-stats-item">
                <p>Średnia ocen:</p>
                <span>4.5/5</span>
              </li>
              <li class="instructor-stats-item">
                <p>Ilość opinii:</p>
                <span>18</span>
              </li>
            </ul>
            <router-link class="btn btn-primary" to="/instruktorzy/marek-franiak">Więcej</router-link>
          </li>
          <li class="instructor">
            <figure class="instructor-img">
              <img
                src="https://appworksinc.com/wp-content/uploads/2013/05/Team-Member-3.jpg"
                alt="Marek Franiak"
              >
            </figure>
            <h2 class="instructor-title">Marek Franiak</h2>
            <ul class="instructor-stats">
              <li class="instructor-stats-item">
                <p>Kategorie</p>
                <span>a1, a ,b1, b</span>
              </li>
              <li class="instructor-stats-item">
                <p>Średnia ocen:</p>
                <span>4.5/5</span>
              </li>
              <li class="instructor-stats-item">
                <p>Ilość opinii:</p>
                <span>18</span>
              </li>
            </ul>
            <router-link class="btn btn-primary" to="/instruktorzy/marek-franiak">Więcej</router-link>
          </li>
          <li class="instructor">
            <figure class="instructor-img">
              <img
                src="https://appworksinc.com/wp-content/uploads/2013/05/Team-Member-3.jpg"
                alt="Marek Franiak"
              >
            </figure>
            <h2 class="instructor-title">Marek Franiak</h2>
            <ul class="instructor-stats">
              <li class="instructor-stats-item">
                <p>Kategorie</p>
                <span>a1, a ,b1, b</span>
              </li>
              <li class="instructor-stats-item">
                <p>Średnia ocen:</p>
                <span>4.5/5</span>
              </li>
              <li class="instructor-stats-item">
                <p>Ilość opinii:</p>
                <span>18</span>
              </li>
            </ul>
            <router-link class="btn btn-primary" to="/instruktorzy/marek-franiak">Więcej</router-link>
          </li>
        </ul>
      </section>
    </div>
    <Sale></Sale>
    <div class="empty-section"></div>
  </main>
</template>

<script>
import Sale from "../../components/Sale/Sale.vue";

export default {
  name: "instructorsPage",
  components: {
    Sale
  }
};
</script>

<style lang="scss" scoped src="./InstructorsPage.scss" />