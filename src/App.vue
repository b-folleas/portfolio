<template>
  <div id="app">
    <transition name="menu-transition">
      <Menu v-if="showMenu" class="menu-bar" v-on:close="showMenu = false" />
    </transition>
    <transition name="hidden-div-transition">
      <div @click="showMenu = false" class="hidden-div" v-if="showMenu"></div>
    </transition>
    <nav class="nav">
      <img
        class="logo"
        src="./assets/logo.svg"
        alt="logo"
        @click="scrollToTop"
      />
      <img
        class="menu"
        src="./assets/icons/menu.svg"
        alt="menu"
        @click="showMenu = true"
      />
    </nav>
    <Home id="home" name="home" class="section" />
    <AboutMe id="about-me" name="about-me" class="section" />
    <MyWork id="my-work" name="my-work" class="section" />
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
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");
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
}
.menu-bar {
  z-index: 10;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
}
.hidden-div {
  backdrop-filter: blur(3px);
  z-index: 9;
  position: fixed;
  width: 70vw;
  left: 0;
  top: 0;
  height: 100vh;
}
.menu-transition-enter-active,
.menu-transition-leave-active {
  transition: all 0.3s ease-out;
}
.menu-transition-enter-from,
.menu-transition-leave-to {
  transform: translateX(500px);
}

.hidden-div-transition-active,
.hidden-div-transition-leave-active {
  transition: all 0.3s ease;
}
.hidden-div-transition-enter,
.hidden-div-transition-leave-to {
  opacity: 0;
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
