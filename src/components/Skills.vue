<template>
  <div class="skills-container">
    <div class="flex-icons w-80">
      <img v-for="skill in SKILL_IMAGES" :key="skill.title" class="icon-img" loading="lazy" :title="skill.title"
        :src="$func.getIconImgUrl(skill.src)" :alt="skill.title" />
      <a class="action-btn" :href="cvInfo.url" :download="cvInfo.name">
        <i class="mr-1 fa fa-download"></i>
        {{ $t("about.download_resume") }}
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
      SKILL_IMAGES: [
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
    cvInfo() {
      let url, name
      switch (this.$i18n.locale) {
        case 'fr':
          url = "../assets/cv/cv-fr.pdf"
          name = "CV_Brice_FOLLEAS.pdf"
          break;
        case 'ja':
          url = "../assets/cv/cv-ja.pdf"
          name = "履歴書フォレア・ブライス.pdf"
          break;
        default:
          url = "../assets/cv/cv-en.pdf"
          name = "Resume_Brice_FOLLEAS.pdf"
          break;
      }
      try {
        url = new URL(url, import.meta.url).href;
      } catch (e) {
          url = 'https://github.com/b-folleas/portfolio/blob/master/src/assets/cv/cv-en.pdf'
      }
      console.log(url)
      console.log(import.meta.url)
      return { url, name };
    }
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
