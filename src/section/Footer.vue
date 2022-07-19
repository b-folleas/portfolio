<template>
  <div>
    <footer>
      <div class="main-footer">
        <img :src="src" alt="logo" />
        <div class="vertical-divider noselect"></div>
        <h3>{{ $t("brice") }}</h3>
      </div>
      <div>
        <h4 class="mt-1 bg-color">© 2022</h4>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterSection",
  props: {
    src: {
      type: String,
      required: true
    },
  }
};
</script>

<style scoped>
h3 {
  font-size: 20px !important;
}

footer {
  height: 50px;
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
h3 {
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
