<template>
  <div id="app">
    <nav class="nav noselect">
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
      <MenuButton
        class="noselect"
        :show-menu="showMenu"
        @toggle-menu="toggleMenu"
      />
    </nav>
    <Home name="home" class="section" />
    <div id="about-skills" class="large-width-section">
      <About name="about" class="small-width-section" />
      <Skills name="skills" class="small-width-section" />
    </div>
    <!-- <History name="history" class="section" /> -->
    <Works name="works" class="section" />
    <Info id="info-section" name="info" class="section" />
    <div class="footer-top-info">
    <h6 class="h-center mb-0">{{ $t("realised") }}</h6>
    <img
        class="icon-img small-icon-img"
        title="Vite JS"
        src="./assets/icons/vitejs.svg"
        alt="Vite JS"
      />
      <img
        class="icon-img small-icon-img"
        title="Travis CI"
        src="./assets/icons/travis-ci.svg"
        alt="Travis CI"
      />
      <img
        class="icon-img small-icon-img"
        title="Freepik"
        src="./assets/icons/freepik.svg"
        alt="Freepik"
      />
      </div>
    <Footer id="footer" class="footer" :src="assetsSrc.footer" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Home from "./section/Home.vue";
import About from "./section/About.vue";
import Skills from "./section/Skills.vue";
// import History from "./section/History.vue";
import Works from "./section/Works.vue";
import Info from "./section/Info.vue";
import Footer from "./section/Footer.vue";
import Menu from "./components/Menu.vue";
import MenuButton from "./components/MenuButton.vue";
export default {
  name: "App",
  inject: ["$func"],
  components: { Home, Menu, MenuButton, About, Skills, Works, Info, Footer }, // History
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

.flex-div {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

.logo,
.menu {
  width: 30px;
  cursor: pointer;
  position: absolute;
  top: 2.5vh;
}

.logo {
  left: 2.5vh;
}
.menu {
  right: 2.5vh;
}

.nav {
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 60px;
  position: fixed;
  z-index: 1;
  overflow-y: hidden;
  background-color: var(--color-background);
}

.section {
  min-height: 100vh;
  width: 100%;
}

.large-width-section {
  min-height: 100vh;
  width: 100%;
  scroll-snap-align: start;
}

.small-width-section {
  min-height: auto;
  width: auto;
  scroll-snap-align: none;
}

#skillsDiv span,
#skillsDiv h2 {
  display: none;
}

#info-section {
  min-height: 70vh;
}

.footer-top-info {
  text-align: center;
}

h1 {
  font-size: 72px;
}

h6 {
  font-size: clamp(8px, 12px, 16px);
}

.footer {
  display: flex;
  justify-content: center;
}

@media (max-width: 426px) {
  /* Smooth scrolling */
  #app {
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
  }

  .section {
    scroll-snap-align: start;
  }

  .small-width-section {
    min-height: 100vh;
    width: 100%;
    scroll-snap-align: start;
  }

  #skillsDiv span,
  #skillsDiv h2 {
    display: block;
  }

  .centersection {
    scroll-snap-align: center;
  }
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
