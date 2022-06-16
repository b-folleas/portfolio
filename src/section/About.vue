<template>
  <div>
    <h1>{{ $t("about") }}</h1>
    <Description class="description" />
  </div>
</template>

<script>
import Description from "../components/Description.vue";
export default {
  name: "AboutSection",
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
}
.description {
  width: 60vw;
}
</style>
