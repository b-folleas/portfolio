<template>
  <div class="flex-div">
    <span id="about" class="mb-60"></span>
    <h2 class="h-center">{{ $t("about.name") }}</h2>
    <Description class="w-80" />
  </div>
</template>

<script>
import Description from "@/components/Description.vue";
export default {
  name: "AboutSection",
  components: { Description },
};
</script>
