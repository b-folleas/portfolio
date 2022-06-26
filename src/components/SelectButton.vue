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

<style scoped>
.snip1135 {
  font-family: 'Raleway', Arial, sans-serif;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0;
}
.snip1135 * {
  box-sizing: border-box;
}
.snip1135 li {
  cursor: pointer;
  font-size: clamp(14px, 1vw, 1vw);
  display: inline-block;
  list-style: outside none none;
  margin: 0 0.5em;
  padding: 0;
}
.snip1135 a {
  padding: 0.5em 0;
  position: relative;
  letter-spacing: 1px;
  text-decoration: none;
}
.snip1135 a:before,
.snip1135 a:after { /* Underline effect */
  position: absolute;
  -webkit-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
.snip1135 a:before {
  bottom: 0;
  display: block;
  height: 3px;
  width: 0%;
  content: "";
  background-color: var(--color-primary);
}
.snip1135 a:after {
  left: 0;
  top: 0;
  padding: 0.5em 0;
  position: absolute;
  content: attr(data-hover);
  color: #ffffff;
  white-space: nowrap;
  max-width: 0%;
  overflow: hidden;
}
.snip1135 a:hover:before,
.snip1135 .active a:before {
  opacity: 1;
  width: 100%;
}
.snip1135 a:hover:after,
.snip1135 .active a:after {
  max-width: 100%;
}
</style>
