<template>
  <main>
    <h2 class="section-title">Opinie</h2>
    <h4 v-if="comments.length == 0" class="nexist">Brak komentarzy</h4>
    <ul>
      <Comment v-for="(comment, index) in comments" :key="index" :comment="comment"/>
    </ul>
  </main>
</template>

<script>
import Comment from "../Comment/Comment";

export default {
  name: "comments",
  props: {
    comments: Array
  },
  components: {
    Comment
  }
};
</script>


<style lang="scss" scoped src="./Comments.scss" />