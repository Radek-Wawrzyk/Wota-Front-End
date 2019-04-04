<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-row">
        <figure class="footer-logo">
          <img src="../../assets/img/logo-white.png" alt="Wota">
        </figure>
        <div class="footer-menu">
          <ul class="footer-links">
            <li class="footer-links-item">
              <nuxt-link to="/" aria-label="Główna" title="Główna">Główna</nuxt-link>
            </li>
            <li class="footer-links-item">
              <nuxt-link to="/kursy" aria-label="Kursy" title="Kursy">Kursy</nuxt-link>
            </li>
            <li class="footer-links-item">
              <nuxt-link
                to="/instruktorzy"
                aria-label="Instruktorzy"
                title="Instruktorzy"
              >Instruktorzy</nuxt-link>
            </li>
            <li class="footer-links-item">
              <nuxt-link to="/pojazdy" aria-label="Pojazdy" title="Pojazdy">Pojazdy</nuxt-link>
            </li>
            <li class="footer-links-item">
              <nuxt-link to="/projekty" aria-label="Projekty" title="Projekty">Projekty</nuxt-link>
            </li>
            <li class="footer-links-item">
              <nuxt-link to="/kontakt" aria-label="Kontakt" title="Kontakt">Kontakt</nuxt-link>
            </li>
          </ul>
          <ul class="footer-links">
            <li class="footer-links-item">
              <a
                href="https://hubertkuzdak.com/doc/RODO.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="color-white"
              >RODO</a>
            </li>
            <li class="footer-links-item">
              <a
                href="https://hubertkuzdak.com/doc/REGULAMIN_O%C5%9ARODKA.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="color-white"
              >REGULAMIN</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- <p class="footer-copyright">
        Website by
        <a
          href="http://radek-wawrzyk.pl/"
          title="Radek Wawrzyk Front End developer"
          aria-label="Radek Wawrzyk Front End developer"
        >Radziu</a> &
        <a
          href="#"
          title="Hubert Front End developer"
          aria-label="Hubert Front End developer"
        >Hubert</a>
      </p>-->
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" src='./Footer.scss'/>
