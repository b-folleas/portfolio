<template>
  <div id="app">
    <nav class="nav noselect" v-bind:class="{ 'background-active': showMenu }">
      <img
        id="appLogo"
        class="logo noselect"
        :src="assetsSrc.logo"
        alt="logo"
        @click="scrollToTop"
      />
      <Transition>
        <Menu v-if="showMenu" v-on:close="toggleMenu" />
      </Transition>
      <img
        class="menu noselect"
        :src="assetsSrc.menu"
        alt="menu"
        @click="toggleMenu"
      />
    </nav>
    <Home id="home" name="home" class="section" />
    <About id="about" name="about" class="section" />
    <Works id="works" name="works" class="section"/>
    <Info id="info" name="info" class="section" />
    <Footer class="footer" :src="assetsSrc.footer" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Home from "./section/Home.vue";
import About from "./section/About.vue";
import Works from "./section/Works.vue";
import Info from "./section/Info.vue";
import Footer from "./section/Footer.vue";
import Menu from "./components/Menu.vue";
export default {
  name: "App",
  inject: ["$func"],
  components: { Home, Menu, About, Works, Info, Footer },
  data() {
    return {
      showMenu: false,
      initUserTheme: "",
    };
  },
  computed: {
    ...mapState("theme", ["userTheme"]),
    assetsSrc() {
      const result = {};
      if (this.userTheme == "dark-theme") {
        result.logo = this.$func.getImgUrl("logo");
        result.menu = this.$func.getIconImgUrl("menu");
        result.footer = this.$func.getImgUrl("logo-dark");
      } else {
        result.logo = this.$func.getImgUrl("logo-dark");
        result.menu = this.$func.getIconImgUrl("menu-dark");
        result.footer = this.$func.getImgUrl("logo");
      }
      return result;
    },
  },
  async created() {
    const initUserTheme =
      (await this.getLocalStorageTheme()) || this.getMediaPreference();
    document.documentElement.className = initUserTheme;
    this.setUserTheme(initUserTheme);
    // Here call ThemeButton component method setTheme for initUserTheme
  },
  methods: {
    ...mapActions("theme", ["getLocalStorageTheme", "setUserTheme"]),
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
    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (hasDarkPreference) {
        return "dark-theme";
      } else {
        return "light-theme";
      }
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
  color: var(--color-text);
}

.logo,
.menu {
  width: 30px;
  cursor: pointer;
  position: absolute;
  top: 5vh;
}

.logo {
  left: 30px;
}
.menu {
  right: 30px;
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
  background-color: var(--color-background);
}

.section {
  min-height: 100vh;
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
  transition: opacity 0.2s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
