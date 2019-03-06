<template>
  <section class="reviews">
    <div class="container">
      <h2 class="reviews-title">Opinie</h2>
      <h4 class="nexist" v-if="this.testimonials.length === 0">Brak opinii</h4>
      <carousel
        class="reviews-slider"
        :per-page="1"
        :autoplay="true"
        :autoplayHoverPause="true"
        :paginationEnabled="false"
        :navigationEnabled="true"
        :navigationNextLabel="this.next"
        :navigationPrevLabel="this.prev"
        v-if="this.testimonials.length > 0"
      >
        <slide class="testimonial" v-for="(testimonial, index) in testimonials" :key="index">
          <!-- <figure class="testimonial-img">
            <img :src="testimonial.img" :alt="testimonial.author" />
          </figure>-->
          <p class="testimonial-content">{{testimonial.comment}}</p>
          <footer class="testimonial-author" v-if="testimonial.instructor">
            Opinia Instruktora:
            <span>{{testimonial.instructor}}</span>
          </footer>
        </slide>
      </carousel>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { API } from "@/main.js";

export default {
  name: "Reviews",
  data: () => ({
    testimonials: [
      {
        author: "Jan Kowalski",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquam voluptate earum et recusandae officia. Aut hic id ea, ipsam odio delectus vero? Iure tenetur alias fuga. Tempora, atque omnis.",
        img:
          "https://appworksinc.com/wp-content/uploads/2013/05/Team-Member-3.jpg"
      },
      {
        author: "Jacek Bąk",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquam voluptate earum et recusandae officia. Aut hic id ea, ipsam odio delectus vero? Iure tenetur alias fuga. Tempora, atque omnis.",
        img:
          "https://appworksinc.com/wp-content/uploads/2013/05/Team-Member-3.jpg"
      },
      {
        author: "Zygmunt Waza",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquam voluptate earum et recusandae officia. Aut hic id ea, ipsam odio delectus vero? Iure tenetur alias fuga. Tempora, atque omnis.",
        img:
          "https://appworksinc.com/wp-content/uploads/2013/05/Team-Member-3.jpg"
      }
    ],
    prev:
      '<svg aria-hidden="true" data-prefix="fas" data-icon="angle-left" class="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>',
    next:
      '<svg aria-hidden="true" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>'
  }),
  async created() {
    try {
      const response = await axios.get(`${API}/rate`);
      const instructorsData = await axios.get(`${API}/instructors`);
      const comments = response.data;
      const instructors = instructorsData.data;
      comments.forEach(comment => {
        const filtered = instructors.filter(
          instructor => instructor._id === comment.instructorId
        );

        if (filtered.length > 0) {
          comment.instructor = filtered[0].fullname;
        }
      });
      response.data ? (this.testimonials = response.data) : false;
    } catch (error) {
      console.log(error.message);
    }
  }
};
</script>

<style lang="scss" src="./Reviews.scss" />
