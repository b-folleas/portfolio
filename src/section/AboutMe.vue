<template>
  <div>
    <h1>About Me</h1>
    <Description />
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
</style>
