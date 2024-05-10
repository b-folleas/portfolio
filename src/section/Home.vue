<template>
  <div>
    <Profile />
  </div>
</template>

<script>
import Profile from "@/components/Profile.vue";
export default {
  name: "HomeSection",
  components: { Profile }
};
</script>

<style scoped>
div {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
