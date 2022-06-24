<template>
  <div class="main-container">
    <h1>{{ $t("info") }}</h1>
    <div class="flex-container">
      <FindMeIcons
        title="email"
        content="brice.folleas@gmail.com"
        link="mailto:brice.folleas@gmail.com"
      />
      <FindMeIcons
        title="linkedin"
        content="brice-folléas"
        link="https://www.linkedin.com/in/brice-folléas/"
      />
      <FindMeIcons
        title="github"
        content="b-folleas"
        link="https://github.com/b-folleas"
      />
    </div>
  </div>
</template>

<script>
import FindMeIcons from "../components/FindMeIcons.vue";

export default {
  name: "InfoSection",
  components: {
    FindMeIcons,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.main-container {
  display: flex;
  flex-flow: column;
  align-items: center;
}
img {
  border: 6px solid var(--color-background-reverse);
  border-radius: 50%;
  width: 300px;
  height: 300px;
}
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background: none;
}
.flex-container > * {
  flex-basis: 100%;
  margin: 2em 2em 0 2em;
}

/* Responsive layout - makes a one column layout instead of a two-column layout */
@media (max-width: 768px) {
  .flex-container {
    flex-direction: column;
  }
}
</style>
