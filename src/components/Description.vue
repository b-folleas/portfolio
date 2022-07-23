<template>
<div>
  <!-- Technologies are not translated that's why they are hardcoded here -->
  <article>
    <p class="mb-0">
      {{ $t("description.paragraph_one") }}
      <span class="emphasis-txt">
        Vue.js,&nbsp;Symfony&nbsp;&amp;&nbsp;Spring boot.</span>
    </p>
    <br />
    <p class="mb-0">
      {{ $t("description.paragraph_two") }}
      <span class="emphasis-txt">Django&nbsp;&amp;&nbsp;Docker</span>
    </p>
    <br />
    <p class="mb-0">
      {{ $t("description.paragraph_three") }}
      <span class="emphasis-txt">{{ $t("description.yokohama") }}&nbsp;/&nbsp;{{ $t("description.tokyo") }},&nbsp;{{ $t("description.japan") }}</span
      >
    </p>
  </article>
</div>
</template>

<script>
export default {
  name: "DescriptionComponent",
};
</script>

<style scoped>
p {
  font-size: clamp(16px, 1.2vw, 1.2vw);
  color: var(--color-text);
}
</style>
