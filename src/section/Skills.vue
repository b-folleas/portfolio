<template>
  <div id="skillsDiv" class="flex-div">
    <span id="skills" class="mb-60"></span>
    <h2 class="h-center">{{ $t("about.skills") }}</h2>
    <p class="mb-skills"></p>
    <Skills class="w-80" />
  </div>
</template>

<script>
import Skills from "@/components/Skills.vue";
export default {
  name: "SkillsSection",
  components: { Skills },
};
</script>

<style scoped>
.mb-skills {
  margin-bottom: 10vh;
}

@media (max-width: 426px) {
  .mb-skills {
    margin-bottom: 0;
  }
}
</style>
