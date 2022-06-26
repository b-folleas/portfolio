<template>
  <div>
    <span id="about" class="mb-60"></span>
    <h2 class="h-center">{{ $t("about") }}</h2>
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
div {
  display: flex;
  flex-flow: column;
  align-items: center;
}
.description {
  width: 80vw;
}
</style>
