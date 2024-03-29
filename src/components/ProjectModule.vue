<template>
  <article class="project-container">
    <div class="project-module-header">
      <div class="project-module-title">
        <h3>{{ name }}</h3>
        <button
          class="round-btn"
          type="button"
          :name="`Link to project ${name}`"
          title="Explore the GitHub repository ! "
          @click="goToProject(url)"
          aria-label="Link to project"
        >
          <img
            class="small-img"
            :src="assetsSrc['code']"
            :alt="language"
            loading="lazy"
          />
        </button>
      </div>
      <em v-if="language">
        <img
          class="icon-img inline-icon"
          :src="assetsSrc['code']"
          :alt="language"
          loading="lazy"
        />{{ language }}
      </em>
    </div>
    <p>{{ $func.formatDate(date) }}</p>
    <p>{{ description }}</p>
    <div v-if="topics?.length > 0">
      <p class="chip" v-for="topic in topics" :key="topic">
        {{ topic }}
      </p>
    </div>
  </article>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ProjectModuleComponent",
  inject: ["$func"],
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
    date: {
      type: String,
      required: false,
    },
  },
  computed: {
    ...mapState("theme", ["userTheme"]),
    assetsSrc() {
      return this.userTheme == "dark-theme"
        ? {
            github: this.$func.getIconImgUrl("github"),
            code: this.$func.getIconImgUrl("code"),
          }
        : {
            github: this.$func.getIconImgUrl("github-dark"),
            code: this.$func.getIconImgUrl("code-dark"),
          };
    },
  },
  methods: {
    goToProject(url) {
      window.location.href = url;
    },
  },
};
</script>

<style scoped>
.project-container {
  padding: 2em 2em 2em 2em;
  margin: 0 0 2em 2em;
  width: 500px;
  min-height: 250px;
  background-color: var(--color-background-soft);
  border: 2px solid var(--color-borders);
  color: var(--color-text);
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
}

.project-container:hover {
  background-color: var(--color-background-emphasis);
  border: 2px solid var(--color-primary);
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.4);
}
.project-container:hover p,
.project-container:hover a,
.project-container:hover em,
.project-container:hover h3 {
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

.round-btn {
  margin-left: 1em;
  background-color: transparent;
  border: 2px solid var(--color-link-borders);
  color: var(--color-background-reverse);
  border-radius: 50%;
  cursor: pointer;
  font-weight: 600;
  opacity: 0.5;
  outline: none;
  width: 40px;
  height: 40px;
  transition: all 0.2s ease-in-out;
}

.round-btn:hover {
  background-color: var(--color-primary);
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.4);
  border: 2px solid var(--color-primary);
  color: var(--vt-c-white);
  opacity: 0.9;
  text-decoration: none;
}

.project-module-link {
  display: flex;
  flex-flow: row nowrap;
  justify-content: end;
}
h3 {
  font-size: clamp(1.2rem, 1.5rem, 2rem);
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

@media (max-width: 768px) {
  .project-module-link {
    justify-content: center;
  }

  .project-container {
    width: 80vw;
    min-height: 40vw;
    margin: 0 0 2em 0;
  }
}
</style>
