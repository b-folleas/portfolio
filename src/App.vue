<template>
  <div id="app">
    <nav class="nav" v-bind:class="{ 'background-active': showMenu }">
      <img
        class="logo"
        src="./assets/logo.svg"
        alt="logo"
        @click="scrollToTop"
      />
      <Transition>
        <Menu v-if="showMenu" v-on:close="toggleMenu" />
      </Transition>
      <img
        class="menu"
        src="./assets/icons/menu.svg"
        alt="menu"
        @click="toggleMenu"
      />
    </nav>
    <Home id="home" name="home" class="section" />
    <AboutMe id="about-me" name="about-me" class="section" />
    <MyWork id="my-work" name="my-work" />
    <FindMe id="find-me" name="find-me" class="section" />
    <Footer class="footer" />
  </div>
</template>

<script>
import Home from "./section/Home.vue";
import AboutMe from "./section/AboutMe.vue";
import MyWork from "./section/MyWork.vue";
import FindMe from "./section/FindMe.vue";
import Footer from "./section/Footer.vue";
import Menu from "./components/Menu.vue";
export default {
  name: "App",
  components: { Home, Menu, AboutMe, MyWork, FindMe, Footer },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");
html {
  scroll-behavior: smooth !important;
}

* {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
  padding: 0;
  background-color: #1c1c1c;
  color: white;
}

.logo,
.menu {
  width: 30px;
  cursor: pointer;
}

.nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2em;
  position: fixed;
  z-index: 1;
}

.background-active {
  background-color: #1c1c1c;
}

.section {
  height: 100vh;
  width: 100%;
}

h1 {
  font-size: 72px;
}

.footer {
  display: flex;
  justify-content: center;
}
</style>

<style scoped>

/* Menu transition */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
