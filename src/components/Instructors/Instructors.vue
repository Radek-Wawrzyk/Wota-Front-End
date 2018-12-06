<template>
  <section class="instructors">
    <h2 class="instructors-title">Instruktorzy</h2>
    <carousel class="instructors-slider" :per-page="3" :autoplay="true" :autoplayHoverPause="true" :paginationEnabled="true"
        :navigationEnabled="true" :navigationNextLabel="this.next" :navigationPrevLabel="this.prev"  
        :perPageCustom="[[320, 1], [768, 2], [992, 3]]"
      >
       
        <slide class="instructor el-col el-col-8" v-for="instructor in instructors" :key="instructor.name">
          <figure class="instructor-img">
            <img :src="instructor.img" :alt="instructor.name" />
          </figure>
          <h3 class="instructor-name">{{instructor.name}}</h3>
          <ul class="instructor-list">
            <li class="instructor-list-item">Kategorie:<span> B1, B</span></li>
            <li class="instructor-list-item">Średnia ocen:<span> 4.9/5</span></li>
            <li class="instructor-list-item">Opinii:<span >68</span></li>
          </ul>
          <footer class="instructor-more">
            <router-link to='/instruktorzy/dobry-ziomek'>czytalej dalej ></router-link>
          </footer>
        </slide>
      </carousel>
      <footer class="instructors-footer">
        <router-link class="btn btn-outline" to="instruktorzy/">Zobacz wszystkich ></router-link>
      </footer>
  </section>
</template>

<script>

export default {
  name: 'Instructors',
  data: () => ({
    instructors: [
      {
        name: 'Jacek Kurek',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquam voluptate earum et recusandae officia. Aut hic id ea, ipsam odio delectus vero? Iure tenetur alias fuga. Tempora, atque omnis.',
        img: 'https://appworksinc.com/wp-content/uploads/2013/05/Team-Member-3.jpg'
      },
       {
        name: 'Eugeniusz Krabson',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquam voluptate earum et recusandae officia. Aut hic id ea, ipsam odio delectus vero? Iure tenetur alias fuga. Tempora, atque omnis.',
        img: 'https://appworksinc.com/wp-content/uploads/2013/05/Team-Member-3.jpg'
      },
       {
        name: 'Plankton 2',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquam voluptate earum et recusandae officia. Aut hic id ea, ipsam odio delectus vero? Iure tenetur alias fuga. Tempora, atque omnis.',
        img: 'https://appworksinc.com/wp-content/uploads/2013/05/Team-Member-3.jpg'
      },
      {
        name: 'xdx2d',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquam voluptate earum et recusandae officia. Aut hic id ea, ipsam odio delectus vero? Iure tenetur alias fuga. Tempora, atque omnis.',
        img: 'https://appworksinc.com/wp-content/uploads/2013/05/Team-Member-3.jpg'
      },
       {
        name: 'xdx22d',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquam voluptate earum et recusandae officia. Aut hic id ea, ipsam odio delectus vero? Iure tenetur alias fuga. Tempora, atque omnis.',
        img: 'https://appworksinc.com/wp-content/uploads/2013/05/Team-Member-3.jpg'
      },
       {
        name: 'xdxd222',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquam voluptate earum et recusandae officia. Aut hic id ea, ipsam odio delectus vero? Iure tenetur alias fuga. Tempora, atque omnis.',
        img: 'https://appworksinc.com/wp-content/uploads/2013/05/Team-Member-3.jpg'
      }
    ],
    prev: '<svg aria-hidden="true" data-prefix="fas" data-icon="angle-left" class="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>',
    next: '<svg aria-hidden="true" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>'

  }),
}

</script>

<style lang="scss" src="./Instructors.scss"  />
