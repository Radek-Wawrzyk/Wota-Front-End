<template>
  <li class="comment-wrapper">
    <div class="comment-header">
      <div>{{comment.rate}}.0</div>
      <h3 class="comment-title">{{comment.name}}</h3>
      <!-- <div class="comment-date">{{comment.date}}</div> -->
    </div>
    <div class="comment-body">
      <h4>{{comment.title}}</h4>
      <p>{{comment.comment}}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: "comment",
  props: {
    comment: Object
  }
};
</script>

<style lang="scss" scoped src="./Comment.scss" />