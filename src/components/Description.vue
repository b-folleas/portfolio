<template>
  <article>
    <h2>About Me</h2>
    <p>
      Last year student in internship as a Full Stack developer, searching for a new
      job opportunity in Lyon, France. Through my studies, my three years work experience
      and personal projects, I deepened my skills in creating websites using many frameworks
      such as VueJs, Symfony or Spring boot.
    </p>
    <ul>
      <li>
        <img class="icon-img" src="../assets/icons/js.svg" alt="JavaScript"/>
      </li>
      <li>
        <img class="icon-img" src="../assets/icons/vue.svg" alt="Vue"/>
      </li>
      <li>
        <img class="icon-img" src="../assets/icons/symfony.svg" alt="Symfony"/>
      </li>
      <li>
        <img class="icon-img" src="../assets/icons/python.svg" alt="Python"/>
      </li>
       <li>
        <img class="icon-img" src="../assets/icons/spring-boot.svg" alt="Spring Boot" />
      </li>
      <li>
        <img class="icon-img" src="../assets/icons/docker.svg" alt="Docker"/>
      </li>
      <li>
        <button>CV</button>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: "Description",
};
</script>

<style>
p {
  line-height: 2.2;
  color: #9d9d9d;
}
h2 {
  font-size: 40px;
  font-weight: 300;
  margin: 0;
}
ul {
  margin-top: 3em;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
}
.icon-img {
  height: 30px;
  filter: grayscale();
  transition: filter 0.2s ease-in-out;
}
button {
  height: 30px;
  border: none;
  font-size: 18px;
  font-weight: 900;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}
button:hover {
  background-color: #59c2ff;
}
img:hover {
  filter: none;
}
</style>
