<template>
  <article>
    <p class="mb-0">
      {{ $t("description.paragraph_one") }}
      <span class="emphasis-txt">{{
        $t("description.vue_symfo_springboot")
      }}</span
      >
    </p>
    <br />
    <p class="mb-0">
      {{ $t("description.paragraph_two") }}
      <span class="emphasis-txt">{{ $t("description.django_and_docker") }}</span
      >
    </p>
    <br />
    <p class="mb-0">
      {{ $t("description.paragraph_three") }}
      <span class="emphasis-txt">{{
        $t("description.yokohama_tokyo_japan")
      }}</span
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
