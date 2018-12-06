<template>
  <section class="reviews">
    <div class="container">
      <h2 class="reviews-title">Opinie</h2>
      <carousel class="reviews-slider" :per-page="1" :autoplay="true" :autoplayHoverPause="true" :paginationEnabled="false" >
        <slide class="testimonial" v-for="testimonial in testimonials" :key="testimonial.id">
          <figure class="testimonial-img">
            <img :src="testimonial.img" :key="testimonial.name" />
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
        author: 'Jacek Kurek',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquam voluptate earum et recusandae officia. Aut hic id ea, ipsam odio delectus vero? Iure tenetur alias fuga. Tempora, atque omnis.',
        img: 'https://appworksinc.com/wp-content/uploads/2013/05/Team-Member-3.jpg'
      },
       {
        author: 'Eugeniusz Krabson',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquam voluptate earum et recusandae officia. Aut hic id ea, ipsam odio delectus vero? Iure tenetur alias fuga. Tempora, atque omnis.',
        img: 'https://appworksinc.com/wp-content/uploads/2013/05/Team-Member-3.jpg'
      },
       {
        author: 'Plankton',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquam voluptate earum et recusandae officia. Aut hic id ea, ipsam odio delectus vero? Iure tenetur alias fuga. Tempora, atque omnis.',
        img: 'https://appworksinc.com/wp-content/uploads/2013/05/Team-Member-3.jpg'
      },
    ]
  }),
}

</script>

<style lang="scss" scoped src="./Reviews.scss" />
