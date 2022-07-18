<template>
  <article>
    <p class="mb-0">
      {{ $t("description.paragraph_one") }}
      <span class="emphasis-txt">
        Vue.js,&nbsp;Symfony&nbsp;&&nbsp;Spring boot.</span
      >
    </p>
    <br />
    <p class="mb-0">
      {{ $t("description.paragraph_two") }}
      <span class="emphasis-txt">Django&nbsp;&&nbsp;Docker</span>
    </p>
    <br />
    <p class="mb-0">
      {{ $t("description.paragraph_three") }}
      <span class="emphasis-txt">
        {{ $t("description.yokohama") }}&nbsp;/ {{ $t("description.tokyo") }},
        {{ $t("description.japan") }}</span
      >
    </p>
  </article>
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
