<template>
  <article class="project-container">
    <div class="project-module-header">
      <div class="project-module-title">
        <h2>{{ name }}</h2>
        <a :href="url" target="_blank" rel="noopener">
          <img
            class="preview-platform-icons"
            :src="getImageUrl('icons/' + assetsSrc)"
            :alt="`Link for Github`"
          />
        </a>
      </div>
      <em v-if="language"> <i class="fa fa-code"></i> {{ language }}</em>
    </div>
    <p>{{ description }}</p>
    <div v-if="topics.length > 0">
      <p class="chip" v-for="topic in topics" :key="topic">
        {{ topic }}
      </p>
    </div>
    <button @click="readMore" class="more">Read More...</button>
  </article>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ProjectModule",
  props: {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "Lorem ipsum",
      required: false,
    },
    language: {
      type: String,
      required: false,
    },
    topics: {
      type: Array,
      required: false,
    },
  },
  computed: {
    ...mapState("theme", ["userTheme"]),
    assetsSrc() {
      let result;
      if (this.userTheme == "dark-theme") {
        result = "github";
      } else {
        result = "github-dark";
      }
      return result;
    },
  },
  methods: {
    readMore() {
      window.open(this.url, "_blank", "noopener");
    },
    getImageUrl(name) {
      return new URL(`../assets/${name}.svg`, import.meta.url).href;
    },
  },
};
</script>

<style scoped>
.project-container {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  padding: 2em 2em 2em 2em;
  width: 80vw;
  background-color: var(--color-background-soft);
  border: 2px solid var(--color-background-soft);
  color: var(--color-text);
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
}

.project-container:hover {
  background-color: var(--color-background);
  border: 2px solid var(--color-primary);
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.4);
}
.project-container:hover p,
.project-container:hover em,
.project-container:hover h2 {
  opacity: 0.9;
}
.project-module-header {
  margin-bottom: 1em;
}
.project-module-title {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}
h2 {
  font-size: clamp(24px, 3vw, 48px);
  opacity: 0.5;
  transition: opacity 0.2s ease-in-out;
  margin: 0;
}
em {
  font-size: clamp(16px, 1vw, 1vw);
  font-style: italic;
  opacity: 0.5;
  transition: opacity 0.2s ease-in-out;
}
p {
  font-size: clamp(16px, 1vw, 1vw);
  opacity: 0.5;
  transition: opacity 0.2s ease-in-out;
}
.more {
  cursor: pointer;
  position: absolute;
  font-size: 1.4em;
  font-weight: 600;
  background-color: var(--color-background);
  color: var(--color-text);
  border-radius: 15px;
  border: 2px solid var(--color-background-reverse);
  padding: 0.5em;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  transition: all 0.2s ease-in-out;
  outline: none;
}
.more:hover {
  background-color: var(--color-primary);
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.4);
  color: var(--vt-c-white);
  border: 2px solid var(--color-primary);
}
.preview-platform-icons {
  width: 30px;
  font-weight: 600;
  margin-left: 2em;
  opacity: 0.8;
}
.preview-platform-icons:hover {
  opacity: 1;
}
.chip {
  display: inline-block;
  padding: 0 16px;
  height: 32px;
  font-size: 12px;
  line-height: 32px;
  border-radius: 25px;
  font: bold;
  color: var(--color-tag-text);
  background-color: var(--color-tag-background);
}

.chip:not(:first-child) {
  margin-left: 8px;
}
</style>
