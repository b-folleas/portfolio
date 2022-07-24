<template>
  <div class="footer-top-info">
    <p class="h-center mb-0">{{ $t("realised") }}</p>
    <img
      v-for="tech in techImages"
      :key="tech.title"
      :title="tech.title"
      class="icon-img small-icon-img"
      loading="lazy"
      :src="$func.getIconImgUrl(tech.src)"
      :alt="tech.title"
    />
  </div>
</template>

<script>
export default {
  name: "FooterTopInfoComponent",
  inject: ["$func"],
  data() {
    return {
      techImages: [
        { title: "Vite JS", src: "vitejs" },
        { title: "Travis CI", src: "travis-ci" },
        { title: "Freepik", src: "freepik" },
      ],
    };
  },
};
</script>
