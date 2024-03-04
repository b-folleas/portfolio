<template>
  <ul class="snip1135">
    <li v-for="item in menuItems" :key="item.id">
      <a class="link" @click="$emit('close')" :href="item.href">{{ item.label }}</a>
    </li>
    <li id="themeBtn">
      <ThemeButton />
    </li>
    <li id="selectBtn">
      <SelectButton />
    </li>
  </ul>
</template>

<script>
import ThemeButton from "../components/ThemeButton.vue";
import SelectButton from "../components/SelectButton.vue";
export default {
  name: "MenuComponent",
  components: { ThemeButton, SelectButton },
  emits: ["close"],
  computed: {
    menuItems() {
      return [
        { id: 1, label: this.$t("navigation.about"), href: "#about" },
        { id: 2, label: this.$t("navigation.experience"), href: "#experience" },
        { id: 3, label: this.$t("navigation.works"), href: "#works" },
        { id: 4, label: this.$t("navigation.info"), href: "#info" }
      ]
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
  flex-flow: row;
  height: 60px;
  align-items: center;
  margin: 0 auto;
  padding: 1em;
}

li {
  font-size: clamp(16px, 2vw, 24px);
  font-weight: 700;
  margin: 0 0.5em;
}

.close {
  right: 30px;
  width: 30px;
  cursor: pointer;
  position: absolute;
  z-index: 1;
}

/* Responsive layout - makes a one column layout for menu items */
@media (max-width: 768px) {
  ul {
    flex-flow: column nowrap !important;
    height: 100vh;
  }

  ul li {
    margin: 4vh;
  }
}
</style>
