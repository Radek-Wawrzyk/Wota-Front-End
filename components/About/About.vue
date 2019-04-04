<template>
  <section class="about">
    <header class="about-header">
      <h2 class="about-header-title">Nasza szkoła</h2>
      <p class="about-header-description">
        Auto-Szkoła Wota powstała w 1989 roku , jako pierwszy w Łodzi prywatny
        ośrodek szkolenia kierowców. Od samego początku dokładamy najwyższych starań aby szkolenie
        naszych klientów było na wysokim poziomie przykładamy największą wagę do tego,
        aby absolwenci naszej auto szkoły byli jak najlepiej wykształceni. Zatrudniamy wysoce wykwalifikowaną kadrę
        instruktorską, nasi pracownicy posiadają wieloletnie doświadczenie
        dydaktyczne. Niektórzy z naszych pracowników posiadają również uprawnienia
        egzaminatorskie. Jesteśmy dumni , że po łódzkich drogach bezpiecznie porusza się ponad 50
        tysięcy kierowców, których mieliśmy przyjemność szkolić.
      </p>
    </header>
    <div class="container">
      <el-row :gutter="30">
        <el-col :md="8">
          <div class="tile">
            <figure class="tile-icon">
              <img
                class="vehicle-img"
                :src="require('@/assets/img/zdawalnosc.png')"
                alt="Wysoka zdawalnosc"
              >
            </figure>
            <h3 class="tile-title">Wysoka zdawalność</h3>
           <p class="tile-description">
              Połączenie doświadczenia i jakości kształcenia oznacza wysoką zdawalność. Od początku
              swojego istnienia znajdujemy się w czołówce ośrodków szkolenia kierowców, jesteśmy liderem,
              nie tylko pod względem ilości i różnorodności przeprowadzonych szkoleń, ale również pozytywnych wyników egzaminów państwowych. O zadowoleniu naszych klientów świadczy fakt, że szkolimy już 3 pokolenie naszych kursantów.
            </p>
          </div>
        </el-col>
        <el-col :md="8">
          <div class="tile">
            <figure class="tile-icon">
              <img
                class="vehicle-img"
                :src="require('@/assets/img/wybor.png')"
                alt="Duża ilość kategorii"
              >
            </figure>
            <h3 class="tile-title">Bogata oferta szkoleniowa</h3>
            <p class="tile-description">
              Jako jedyny ośrodek szkolenia kierowców w Łodzi posiadamy w swojej ofercie szkolenia w
              zakresie wszystkich kategorii prawa jazdy, w tym profesjonalne szkolenie kierowców
              zawodowych. Oferujemy również kursy spawania, obsługi wózków widłowych, przewozu
              drogowego taxi. Dysponujemy własną pracownią psychologiczną, w której można wykonać
              badania niezbędne do utworzenia profilu kandydata na kierowcę, czy przedłużenia uprawnień
              kierowcy zawodowego.
            </p>
          </div>
        </el-col>
        <el-col :md="8">
          <div class="tile">
            <figure class="tile-icon">
              <img
                class="vehicle-img"
                :src="require('@/assets/img/ubezpieczenie.png')"
                alt="Ubezpieczenie"
              >
            </figure>
            <h3 class="tile-title">Infrastruktura</h3>
            <p class="tile-description">
              Prowadzimy szkolenia w zakresie wszystkich kategorii prawa jazdy. Dysponujemy własnym placem manewrowym, zlokalizowanym w Łodzi, przy ul. Nowy Józefów 6. Plac wyposażony jest
              w kilkanaście stanowisk szkoleniowych, w tym stanowiska do nauki jazdy motocyklem, również
              na tzw. slalom szybki.
              <br>Nasi wykładowcy potrafią dostosować sposób nauczania do potrzeb kursantów – wiemy, że
              niektórzy potrzebują tradycyjnej formy nauczania, podczas gdy inni preferują inne metody
              kształcenia.
            </p>
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="scss" scoped src="./About.scss" />
