<template>
  <article class="project-container">
    <div class="project-module-header">
      <div class="project-module-title">
        <h3>{{ name }}</h3>
        <div class="project-module-date">
          <p>{{ formatedDate }}</p>
        </div>
      </div>
      <em v-if="language"> <i class="fa fa-code"></i> {{ language }}</em>
    </div>
    <p>{{ description }}</p>
    <div v-if="topics?.length > 0">
      <p class="chip" v-for="topic in topics" :key="topic">
        {{ topic }}
      </p>
    </div>
    <div class="project-module-link">
      <a href="url" class="action-btn smaller-btn">
        {{ $t("read_more") }}
        <i class="ml-1 fa fa-arrow-up-right-from-square"></i>
      </a>
    </div>
  </article>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
import "moment/dist/locale/fr";
import "moment/dist/locale/ja";
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
    },
    formatedDate() {
      moment.locale(this.$i18n.locale);
      return this.$i18n.locale === 'en' ? moment(this.date).format("MMM Do YY") : moment(this.date).format("ll");
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
.project-module-date {
  display: flex;
  flex-flow: row nowrap;
  align-items: end;
  text-align: right;  
}
.project-module-date > p {
  margin: 0;
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

.smaller-btn {
  margin: 0;
}

.preview-platform-icons {
  width: 30px;
  font-weight: 600;
  margin-left: 1em;
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
