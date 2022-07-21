<template>
<ul class="snip1135">
  <li v-for="language in languages" :key="language.key" :class="{ active: (currentLanguage === language.key) }">
    <a v-on:click="$i18n.locale=language.key">{{ $t(language.name) }}</a>
  </li>
</ul>
</template>

<script>
export default {
  name: "SelectButtonComponent",
  data() {
    return {
      languages: [
        { key: 'fr', name: 'french' },
        { key: 'en', name: 'english' },
        { key: 'ja', name: 'japanese' }
      ]
    }
  },
  computed: {
    currentLanguage () {
      return this.$i18n.locale
    }
  },
};
</script>
