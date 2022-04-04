<template>
  <article>
    <p>
      Last year student in internship as a Full Stack developer, searching for a
      new job opportunity in Lyon, France. Through my studies, my three years
      work experience and personal projects, I deepened my skills in creating
      websites using many frameworks such as VueJs, Symfony or Spring boot.
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
      <a class="btn-download" href="/public/cv.pdf" download="cv-folleas-brice.pdf">
        <i class="fa fa-download"></i>
        Download my resume
      </a>
    </div>
  </article>
</template>

<script>
export default {
  name: "Description",
};
</script>

<style scoped>
p {
  line-height: 2.2;
  color: #9d9d9d;
}
h2 {
  font-size: 40px;
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
  margin: 1.5em 2em 2em 2em;
  height: fit-content;
  border-radius: 15px;
  cursor: pointer;
  background-color: #111111;
  color: white;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
  height: fit-content;
  text-decoration: none;
}
.btn-download:hover {
  background-color: white;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.4);
  color: #111111;
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
