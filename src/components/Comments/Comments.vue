<template>
  <main>
    <h2 class="section-title">Opinie</h2>
    <ul>
      <Comment v-for="(comment, index) in comments" :key="index" :comment="comment"/>
    </ul>
  </main>
</template>

<script>
import Comment from "../Comment/Comment";

export default {
  name: "comments",
  data: () => ({
    comments: [
      {
        rate: "4.0",
        name: "Paulina",
        date: "29/02/2016",
        title: "Lepiej nie mogłam trafić",
        subtitle:
          "Mollit consectetur ut tempor voluptate. Labore minim mollit et officia cupidatat non minim laboris veniam culpa quis ullamco nostrud do. Anim deserunt ut duis occaecat deserunt. Magna anim ea nulla exercitation et aute elit eiusmod. Excepteur ex nulla ut qui irure. Esse fugiat eiusmod voluptate voluptate amet sit enim Lorem duis anim reprehenderit cupidatat nulla consequat."
      },
      {
        rate: "4.0",
        name: "Paulina",
        date: "29/02/2016",
        title: "Lepiej nie mogłam trafić",
        subtitle:
          "Mollit consectetur ut tempor voluptate. Labore minim mollit et officia cupidatat non minim laboris veniam culpa quis ullamco nostrud do. Anim deserunt ut duis occaecat deserunt. Magna anim ea nulla exercitation et aute elit eiusmod. Excepteur ex nulla ut qui irure. Esse fugiat eiusmod voluptate voluptate amet sit enim Lorem duis anim reprehenderit cupidatat nulla consequat."
      },
      {
        rate: "4.0",
        name: "Paulina",
        date: "29/02/2016",
        title: "Lepiej nie mogłam trafić",
        subtitle:
          "Mollit consectetur ut tempor voluptate. Labore minim mollit et officia cupidatat non minim laboris veniam culpa quis ullamco nostrud do. Anim deserunt ut duis occaecat deserunt. Magna anim ea nulla exercitation et aute elit eiusmod. Excepteur ex nulla ut qui irure. Esse fugiat eiusmod voluptate voluptate amet sit enim Lorem duis anim reprehenderit cupidatat nulla consequat."
      }
    ]
  }),
  components: {
    Comment
  }
};
</script>


<style lang="scss" scoped src="./Comments.scss" />