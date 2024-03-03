<template>
  <ul class="snip1135">
    <li>
      <a class="link" @click="$emit('close')" href="#about">{{ $t("navigation.about") }}</a>
    </li>
    <li>
      <a class="link" @click="$emit('close')" href="#experience">{{ $t("navigation.experience") }}</a>
    </li>
    <li>
      <a class="link" @click="$emit('close')" href="#works">{{ $t("navigation.works") }}</a>
    </li>
    <li>
      <a class="link" @click="$emit('close')" href="#info">{{ $t("navigation.info") }}</a>
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
  emits: ["close"]
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
@media (max-width: 768px) {}
</style>
