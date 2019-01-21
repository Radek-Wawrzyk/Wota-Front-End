<template>
  <li class="comment-wrapper">
    <div class="comment-header">
      <div>{{comment.rate}}</div>
      <div class="comment-title">{{comment.name}}</div>
      <div>{{comment.date}}</div>
    </div>
    <div class="comment-body">
      <h5>{{comment.title}}</h5>
      <p>{{comment.subtitle}}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: "comment",
  props: ["comment"]
};
</script>


<style lang="scss" scoped src="./Comment.scss" />