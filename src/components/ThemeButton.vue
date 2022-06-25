<template>
  <input
    @change="toggleTheme"
    id="checkbox"
    type="checkbox"
    class="switch-checkbox"
  />
  <label for="checkbox" class="switch-label noselect">
    <span class="noselect">🌙</span>
    <span class="noselect">&nbsp;</span>
    <span class="noselect">☀️</span>
    <div
      class="switch-toggle"
      :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
    />
  </label>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ThemeButtonComponent",
  computed: {
    ...mapState("theme", ["userTheme"]),
  },
  methods: {
    ...mapActions("theme", ["setUserTheme"]),
    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme");
      } else {
        this.setTheme("light-theme");
      }
    },
    setTheme(theme) {
      document.documentElement.className = theme;
      this.setUserTheme(theme);
    },
  },
};
</script>

<style scoped>
.switch-checkbox {
  display: none;
}

.switch-label {
  align-items: center;
  background: var(--color-background-soft);
  border: calc(var(--element-size) * 0.025) solid var(--color-primary);
  border-radius: var(--element-size);
  cursor: pointer;
  display: flex;
  font-size: calc(var(--element-size) * 0.2);
  height: calc(var(--element-size) * 0.4);
  position: relative;
  padding: calc(var(--element-size) * 0.025);
  transition: opacity 0.5s ease-in-out;
  justify-content: space-between;
  width: var(--element-size);
  z-index: 1;
}

.switch-toggle {
  position: absolute;
  background-color: var(--color-primary);
  border-radius: 50%;
  height: calc(var(--element-size) * 0.3);
  width: calc(var(--element-size) * 0.3);
  transform: translateX(1);
  transition: transform 0.2s ease, background-color 0.5s ease;
}

.switch-toggle-checked {
  transform: translateX(calc(var(--element-size) * 0.6)) !important;
}
</style>
