<template>
    <h1>Find Me</h1>
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
</template>

<script>
import FindMeIcons from "../components/FindMeIcons.vue";

export default {
  name: "FindMe",
  components: {
    FindMeIcons,
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
h1 {
  margin-top: 1em;
  text-align: center;
}
img {
  border: 12px solid white;
  border-radius: 50%;
  width: 300px;
  height: 300px;
}
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.flex-container>* {
    flex-basis: 100%;
    margin: 2em;
  }

/* Responsive layout - makes a one column layout instead of a two-column layout */
@media (max-width: 800px) {
  .flex-container {
    flex-direction: column;
  }
  
}
</style>
