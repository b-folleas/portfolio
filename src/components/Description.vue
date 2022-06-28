<template>
  <article>
    <p class="mb-0">
      {{ $t("description.paragraph_one") }}
      <span class="emphasis-txt">{{
        $t("description.vue_symfo_springboot")
      }}</span
      >.
    </p>
    <br />
    <p class="mb-0">
      {{ $t("description.paragraph_two") }}
      <span class="emphasis-txt">{{ $t("description.django_and_docker") }}</span
      >.
    </p>
    <br />
    <p class="mb-0">
      {{ $t("description.paragraph_three") }}
      <span class="emphasis-txt">{{
        $t("description.yokohama_tokyo_japan")
      }}</span
      >.
    </p>
    <div class="flex-icons centersection">
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
  </article>
</template>

<script>
export default {
  name: "DescriptionComponent",
  computed: {
    cvUrl() {
      return new URL("../assets/cv.pdf", import.meta.url).href;
    },
  },
};
</script>

<style scoped>
p {
  font-size: clamp(16px, 1.2vw, 1.2vw);
  color: var(--color-text);
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
  width: inherit;
}
</style>
