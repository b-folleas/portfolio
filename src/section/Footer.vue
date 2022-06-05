<template>
  <div>
    <footer>
      <div class="main-footer">
        <img :src="getImageUrl(src)" alt="logo" />
        <div class="vertical-divider noselect"></div>
        <h1>Brice</h1>
      </div>
      <div>
        <h4 class="mt-1 bg-color">© 2022</h4>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    src: {
      type: String,
      required: true
    },
  },
  methods: {
    getImageUrl(name) {
      return new URL(`../assets/${name}.svg`, import.meta.url).href
    }
  }
};
</script>

<style scoped>
footer {
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
}
footer > div {
  flex: 1 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background-reverse);
}
.main-footer {
  padding-top: 1em;
}
.main-footer > * {
  width: 48px;
  color: var(--color-background);
}
.vertical-divider {
  height: 48px;
  width: 2px;
  margin: 0 2em 0 2em;
  background-color: var(--color-background);
}
img {
  width: 48px;
}
h1 {
  color: var(--color-text);
  margin: 0;
  font-size: clamp(24px, 3vw, 48px);
}
h4 {
  color: var(--color-text);
  font-size: clamp(8px, 1.5vw, 14px);
}

.bg-color {
  color: var(--color-background);
}
</style>
