<template>
  <article>
    <p>
      Last year student in internship as a Full Stack developer, based in Lyon,
      France. Through my studies, my three years work experience and personal
      projects, I deepened my skills in creating websites using frameworks such
      as
      <span class="emphasis-txt">Vue.js, Symfony or Spring boot</span>.
      <br />
      In my free time, I try to discover new technologies. Currently, I'm
      working on a personal project using
      <span class="emphasis-txt">Django and Docker</span>.
      <br />
      I'm looking for a new job oppotunity in
      <span class="emphasis-txt">Yokohama / Tokyo, Japan</span>.
    </p>
    <div class="flex-icons">
      <img
        class="icon-img"
        title="JavaScript"
        src="../assets/icons/js.svg"
        alt="JavaScript"
      />
      <img
        class="icon-img"
        title="Vue.js"
        src="../assets/icons/vue.svg"
        alt="Vue.js"
      />
      <img
        class="icon-img"
        title="Symfony Framework"
        src="../assets/icons/symfony.svg"
        alt="Symfony"
      />
      <img
        class="icon-img"
        title="Python"
        src="../assets/icons/python.svg"
        alt="Python"
      />
      <img
        class="icon-img"
        title="Spring Boot Framework"
        src="../assets/icons/spring-boot.svg"
        alt="Spring Boot"
      />
      <img
        class="icon-img"
        title="Docker"
        src="../assets/icons/docker.svg"
        alt="Docker"
      />
      <a class="btn-download" :href="cvUrl" download="cv-folleas-brice.pdf">
        <i class="fa fa-download"></i>
        Download my resume
      </a>
    </div>
  </article>
</template>

<script>
export default {
  name: "Description",
  computed: {
    cvUrl() {
      return new URL("../assets/cv.pdf", import.meta.url).href;
    },
  },
};
</script>

<style scoped>
p {
  font-size: clamp(16px, 1.2vw, 1.2vw);
  color: var(--color-text);
}
h2 {
  font-size: clamp(24px, 3vw, 48px);
  font-weight: 300;
  margin: 0;
}
.icon-img {
  margin: 2em;
  height: 30px;
  filter: grayscale();
  transition: filter 0.2s ease-in-out;
}
.btn-download {
  border: none;
  text-align: center;
  padding: 10px 20px;
  font-weight: 600;
  margin: 1.5em 2em 2em 2em;
  height: fit-content;
  border-radius: 15px;
  cursor: pointer;
  background-color: var(--color-background);
  color: var(--color-text);
  border: 2px solid var(--color-background-reverse);
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
  height: fit-content;
  text-decoration: none;
  outline: none;
}
.btn-download:hover {
  background-color: var(--color-primary);
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.4);
  border: 2px solid var(--color-primary);
  color: var(--vt-c-white);
}
.btn-download > i {
  margin-right: 8px;
}
.icon-img:hover {
  filter: none;
}
.flex-icons {
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
</style>
