<template>
  <section class="reviews">
    <div class="container">
      <h2 class="reviews-title">Opinie</h2>
      <carousel class="reviews-slider" :per-page="1" :autoplay="true" :autoplayHoverPause="true" :paginationEnabled="false"
        :navigationEnabled="true" :navigationNextLabel="this.next" :navigationPrevLabel="this.prev" 
      >
        <slide class="testimonial" v-for="testimonial in testimonials" :key="testimonial.id">
          <figure class="testimonial-img">
            <img :src="testimonial.img" :alt="testimonial.author" />
          </figure>
          <p class="testimonial-content">{{testimonial.content}}</p>
          <footer class="testimonial-author">
            Opinia Instruktora: <span>{{testimonial.author}}</span>
          </footer>
        </slide>
      </carousel>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Slider',
  data: () => ({
    testimonials: [
      {
        author: 'Jan Kowalski',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquam voluptate earum et recusandae officia. Aut hic id ea, ipsam odio delectus vero? Iure tenetur alias fuga. Tempora, atque omnis.',
        img: 'https://appworksinc.com/wp-content/uploads/2013/05/Team-Member-3.jpg'
      },
       {
        author: 'Jacek Bąk',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquam voluptate earum et recusandae officia. Aut hic id ea, ipsam odio delectus vero? Iure tenetur alias fuga. Tempora, atque omnis.',
        img: 'https://appworksinc.com/wp-content/uploads/2013/05/Team-Member-3.jpg'
      },
       {
        author: 'Zygmunt Waza',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquam voluptate earum et recusandae officia. Aut hic id ea, ipsam odio delectus vero? Iure tenetur alias fuga. Tempora, atque omnis.',
        img: 'https://appworksinc.com/wp-content/uploads/2013/05/Team-Member-3.jpg'
      },
    ],
    prev: '<svg aria-hidden="true" data-prefix="fas" data-icon="angle-left" class="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>',
    next: '<svg aria-hidden="true" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>'

  }),
}

</script>

<style lang="scss" src="./Reviews.scss" />
