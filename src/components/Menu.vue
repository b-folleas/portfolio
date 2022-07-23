<template>
  <ul class="snip1217">
    <li>
      <a @click="$emit('close')" href="#about">{{ $t("about") }}</a>
    </li>
    <li>
      <a @click="$emit('close')" href="#works">{{ $t("works") }}</a>
    </li>
    <li>
      <a @click="$emit('close')" href="#info">{{ $t("info") }}</a>
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

/* Adapted from www.littlesnippets.net - All rights reserved */
.snip1217 {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.snip1217 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.snip1217 li {
  display: inline-block;
  list-style: outside none none;
  margin-left: 1.5em;
  margin-right: 1.5em;
  padding: 0;
}
.snip1217 a {
  padding: 0.3em 0;
  color: var(--color-text);
  position: relative;
  text-decoration: none;
}
.snip1217 a:before,
.snip1217 a:after {
  height: 3px;
  position: absolute;
  content: "";
  -webkit-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
  background-color: var(--color-primary);
  width: 0;
}
.snip1217 a:before {
  top: 0;
  left: 0;
}
.snip1217 a:after {
  bottom: 0;
  right: 0;
}
.snip1217 a:hover,
.snip1217 .current a {
  color: var(--color-text-hover);
}
.snip1217 a:hover:before,
.snip1217 .current a:before,
.snip1217 a:hover:after,
.snip1217 .current a:after {
  width: 100%;
}
/* 
#themeBtn, #selectBtn {
  align-self: center;
} */

/* Responsive layout - makes a one column layout for menu items */
@media (max-width: 768px) {
  .snip1217 {
    flex-flow: column nowrap;
    height: 100vh;
  }
  .snip1217 * {
    margin: auto;
  }
}
</style>
