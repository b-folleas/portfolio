<template>
  <div class="mb-auto">
    <p class="h-center mt-5 mb-0">{{ $t("footer.realised") }}</p>
    <div class="techs-img">
      <img v-for="tech in TECHS" :key="tech.title" :title="tech.title" class="icon-img small-icon-img"
        loading="lazy" :src="$func.getIconImgUrl(tech.src)" :alt="tech.title" />
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterTopInfoComponent",
  inject: ["$func"],
  data() {
    return {
      TECHS: [
        { title: "Vite JS", src: "vitejs" },
        { title: "Travis CI", src: "travis-ci" },
        { title: "Freepik", src: "freepik" },
      ],
    };
  },
};
</script>

<style scoped>
.techs-img {
  display: flex;
  justify-content: center;
}
</style>
