<template>
  <div id="app">
    <nav class="nav no-select" :class="showNav ? 'nav-shown' : 'nav-hidden'">
      <img id="appLogo" class="logo no-select" :src="assetsSrc.logo" alt="logo" @click="scrollToTop" />
      <Transition>
        <Menu v-if="showMenu" v-on:close="toggleMenu" />
      </Transition>
      <MenuButton class="no-select" :show-menu="showMenu" @toggle-menu="toggleMenu" />
    </nav>
    <Home name="home" class="section" />
    <div id="about-skills" class="large-width-section">
      <About name="about" class="small-width-section" />
      <Skills name="skills" class="small-width-section" />
    </div>
    <Experience name="experience" class="section" />
    <Works name="works" class="section" />
    <Contact name="contact" class="section" />
    <!-- <Footer id="footer" class="section" :src="assetsSrc.footer" /> -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Home from "./section/Home.vue";
import About from "./section/About.vue";
import Skills from "./section/Skills.vue";
import Experience from "./section/Experience.vue";
import Works from "./section/Works.vue";
import Contact from "./section/Contact.vue";
// import Footer from "./section/Footer.vue";
import Menu from "./components/Menu.vue";
import MenuButton from "./components/MenuButton.vue";
export default {
  name: "App",
  inject: ["$func"],
  components: {
    Home,
    Menu,
    MenuButton,
    About,
    Skills,
    Experience,
    Works,
    Contact
    // Footer,
  },
  data() {
    return {
      showMenu: false,
      initUserTheme: "",
      lastScrollPosition: 0,
      showNav: true // When first arriving on app nav is displayed
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
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    ...mapActions("theme", ["getLocalStorageTheme", "setUserTheme"]),
    scrollToTop() {
      // In case first scroll did not work (for mobile users)
      window.innerWidth < 768
        ? document
          .getElementById("avatar")
          .scrollIntoView({ behavior: "smooth" })
        : window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
    },
    closeMenu() { // Called by scroll down event handler
      this.showMenu = false;
    },
    toggleMenu() { // Called on menu btn click
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
    handleScroll() {
      const currentScrollY = window.scrollY;
      if (currentScrollY > this.lastScrollPosition) {
        this.closeMenu()
        this.showNav = false;
      } else {
        this.showNav = true;
      }
      this.lastScrollPosition = currentScrollY;
    }
  },
};
</script>

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
