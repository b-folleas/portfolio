<template>
  <div class="find-me-icons-main-container" @click="openLink">
    <div class="find-me-icons-header">
      <img :src="getImageUrl('icons/' + assetsSrc[title])" :alt="title" />
      <div class="horizontal-divider"></div>
      <strong> {{ title }} </strong>
    </div>
    <p>{{ content }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "FindMeIcons",
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: false
    }
  },
  computed:  {
  ...mapState("theme", ["userTheme"]),
    assetsSrc() {
      const result = {};
      if (this.userTheme == "dark-theme") {
        result.email = "email";
        result.linkedin = "linkedin";
        result.github = "github";
      } else {
        result.email = "email-dark";
        result.linkedin = "linkedin-dark";
        result.github = "github-dark";
      }
      return result;
    },
  },
  methods: {
    openLink() {
      window.open(this.link, "_blank", "noopener");
    },
    getImageUrl(name) {
      return new URL(`../assets/${name}.svg`, import.meta.url).href
    }
  }
};
</script>

<style scoped>
.horizontal-divider {
  width: 1px;
  background-color: var(--color-background-soft);
  height: 30px;
}
.find-me-icons-main-container {
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background-soft);
  border-radius: 20px;
  border: 2px solid var(--color-background-soft);
  transition: all 0.2s ease-in-out;
  min-width: 200px;
}
.find-me-icons-main-container:hover {
  background-color: var(--color-background-hover);
  border: 2px solid var(--color-primary);
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.4);
}
.find-me-icons-main-container:hover img {
  opacity: 0.9;
}
.find-me-icons-main-container:hover strong {
  opacity: 0.9;
}
.find-me-icons-main-container:hover p {
  opacity: 0.9;
}
img {
  width: clamp(35px, 2vw, 2vw);
  opacity: 0.5;
  transition: opacity 0.2s ease-in-out;
}
strong {
  font-size: clamp(16px, 1.1vw, 1.1vw);
  opacity: 0.5;
  transition: opacity 0.2s ease-in-out;
}
p {
  font-size: clamp(16px, 1vw, 1vw);
  padding: 0 2em;
  opacity: 0.5;
  transition: opacity 0.2s ease-in-out;
}
.find-me-icons-header {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.find-me-icons-header * {
  margin: 1em;
}
</style>