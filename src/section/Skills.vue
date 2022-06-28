<template>
  <div v-if="isInnerWidthSmall">
    <span id="skills" class="mb-60"></span>
    <h2 class="h-center">{{ $t("skills") }}</h2>
    <Skills class="w-80" />
  </div>
  <div v-else>
    <Skills class="w-80" />
  </div>
</template>

<script>
import Skills from "../components/Skills.vue";
export default {
  name: "SkillsSection",
  components: { Skills },
  computed: {
    isInnerWidthSmall() {
      return window.innerWidth <= 426;
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-flow: column;
  align-items: center;
}
</style>
