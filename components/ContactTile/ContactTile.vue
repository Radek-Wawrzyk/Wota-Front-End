<template>
  <div class="contact-tile">
    <h2 class="contact-tile-title">{{info.title}}</h2>
    <ul class="contact-tile-list">
      <li class="contact-tile-list-item">
        <svg
          aria-hidden="true"
          data-prefix="fas"
          data-icon="phone"
          class="svg-inline--fa fa-phone fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
          ></path>
        </svg>
        {{info.phone}}
      </li>
      <li class="contact-tile-list-item">
        <svg
          aria-hidden="true"
          data-prefix="fas"
          data-icon="map-marker-alt"
          class="svg-inline--fa fa-map-marker-alt fa-w-12"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            fill="currentColor"
            d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
          ></path>
        </svg>
        {{info.adress}}
      </li>
      <li class="contact-tile-list-item">
        <svg
          aria-hidden="true"
          data-prefix="far"
          data-icon="clock"
          class="svg-inline--fa fa-clock fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
          ></path>
        </svg>
        {{info.openHours.from}} - {{info.openHours.to}} ({{info.openDays.from}} - {{info.openDays.to}})
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ContactTile',
  props: {
    info: Object
  }
};
</script>

<style scoped src="./ContactTile.scss" lang="scss" />