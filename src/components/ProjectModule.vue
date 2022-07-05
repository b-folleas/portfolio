<template>
  <article class="project-container">
    <div class="project-module-header">
      <div class="project-module-title">
        <h3>{{ name }}</h3>
        <a :href="url" class="round-btn">
          <i class="fa fa-bold fa-arrow-up-right-from-square"></i>
        </a>
      </div>
      <em v-if="language"> <i class="fa fa-code"></i> {{ language }}</em>
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
      if (this.userTheme == "dark-theme") {
        return this.$func.getIconImgUrl("github");
      } else {
        return this.$func.getIconImgUrl("github-dark");
      }
    }
  },
};
</script>

<style scoped>
.project-container {
  padding: 2em 2em 2em 2em;
  margin: 0 2em 2em 2em;
  width: 500px;
  min-height: 250px;
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
/* .project-module-date {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.project-module-date > p {
  margin: 0;
} */
.round-btn {
  margin: 0;
  background-color: var(--color-background);
  border: 2px solid var(--color-background-reverse);
  color: var(--color-background-reverse);
  border-radius: 50%;
  cursor: pointer;
  font-weight: 600;
  outline: none;
  padding: 5px 10px;
  transition: all 0.2s ease-in-out;
}

.round-btn:hover {
  background-color: var(--color-primary);
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.4);
  border: 2px solid var(--color-primary);
  color: var(--vt-c-white);
  text-decoration: none;
}

.project-module-link {
  display: flex;
  flex-flow: row nowrap;
  justify-content: end;
}
h3 {
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
  }
}
</style>
