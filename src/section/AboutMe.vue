<template>
  <div>
    <h1>About Me</h1>
    <Description class="description" />
  </div>
</template>

<script>
import Description from "../components/Description.vue";
export default {
  name: "AboutMe",
  components: { Description },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
div {
  display: flex;
  flex-flow: column;
  align-items: center;
  background-image: url("../assets/background.svg");
}
.description {
  width: 60vw;
}
</style>
