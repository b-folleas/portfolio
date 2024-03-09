<template>
  <div class="flex-div">
    <span id="info" class="mb-60"></span>
    <FooterTopInfo />
  </div>
</template>

<script>
import FooterTopInfo from "../components/FooterTopInfo.vue";
export default {
  name: "FooterSection",
  components: { FooterTopInfo },
  props: {
    src: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
footer {
  height: 50px;
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
  background-color: var(--color-background-reverse);
}

footer>div {
  flex: 1 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 48px;
  height: 48px;
}

h3 {
  color: var(--color-text);
  margin: 0;
  font-size: clamp(24px, 3vw, 48px);
}

.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background: none;
}

.flex-container>* {
  flex-basis: 100%;
  margin: 0 2em 2em 2em;
}

/* Responsive layout - makes a one column layout instead of a two-column layout */
@media (max-width: 768px) {
  .flex-container {
    flex-direction: column;
  }
}
</style>
