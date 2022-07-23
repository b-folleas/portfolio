<template>
  <div class="skills-container">
    <div class="flex-icons w-80">
      <img
        v-for="skill in skillImages"
        :key="skill.title"
        class="icon-img"
        loading="lazy"
        :title="skill.title"
        :src="$func.getIconImgUrl(skill.src)"
        :alt="skill.title"
      />
      <a class="action-btn" :href="cvUrl" download="cv-folleas-brice.pdf">
        <i class="mr-1 fa fa-download"></i>
        {{ $t("download_resume") }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsComponent",
  inject: ["$func"],
  data() {
    return {
      skillImages: [
        { title: "JavaScript", src: "js" },
        { title: "Vue.js", src: "vue" },
        { title: "Symfony Framework", src: "symfony" },
        { title: "Python", src: "python" },
        { title: "Spring Boot Framework", src: "spring-boot" },
        { title: "Docker", src: "docker" },
      ],
    };
  },
  computed: {
    cvUrl() {
      return new URL("../assets/cv.pdf", import.meta.url).href;
    },
  },
};
</script>

<style scoped>
.skills-container {
  display: flex;
  justify-content: center;
}

.flex-icons {
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  justify-self: center;
  width: inherit;
}
</style>
