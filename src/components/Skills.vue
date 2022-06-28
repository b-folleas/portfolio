<template>
  <div class="skills-container">
    <div class="flex-icons w-80">
      <img
        class="icon-img"
        title="JavaScript"
        src="../assets/icons/js.svg"
        alt="JavaScript"
      />
      <img
        class="icon-img"
        title="Vue.js"
        src="../assets/icons/vue.svg"
        alt="Vue.js"
      />
      <img
        class="icon-img"
        title="Symfony Framework"
        src="../assets/icons/symfony.svg"
        alt="Symfony"
      />
      <img
        class="icon-img"
        title="Python"
        src="../assets/icons/python.svg"
        alt="Python"
      />
      <img
        class="icon-img"
        title="Spring Boot Framework"
        src="../assets/icons/spring-boot.svg"
        alt="Spring Boot"
      />
      <img
        class="icon-img"
        title="Docker"
        src="../assets/icons/docker.svg"
        alt="Docker"
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

.icon-img {
  margin: 2em;
  height: 30px;
  filter: grayscale();
  transition: filter 0.2s ease-in-out;
}
.icon-img:hover {
  filter: none;
}
.flex-icons {
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  justify-self: center;
  width: inherit;
}
</style>
