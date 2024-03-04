<template>
  <ul class="snip1135">
    <li v-for="language in LANGUAGES" :key="language.key" :class="{ active: currentLanguage === language.key }">
      <a class="link" v-on:click="$i18n.locale = language.key">{{
      $t("languages." + language.name)
    }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SelectButtonComponent",
  data() {
    return {
      LANGUAGES: [
        { key: "fr", name: "french" },
        { key: "en", name: "english" },
        { key: "ja", name: "japanese" },
      ],
    };
  },
  computed: {
    currentLanguage() {
      return this.$i18n.locale;
    },
  },
};
</script>

<style scoped>
/* Responsive layout - makes a one column layout for menu items */
@media (max-width: 768px) {
  ul li {
    margin: 1vh;
  }
}
</style>
