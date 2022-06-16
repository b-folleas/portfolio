<template>
  <main>
    <div v-if="avatar" class="noselect">
      <img
        class="profile-img fade-in-top noselect"
        :src="avatar"
        alt="Avatar"
        ref="img"
      />
    </div>
    <div class="profile-text fade-in-top">
      <h1>{{ $t("hello") }}</h1>
      <h2>{{ $t("i_m_brice") }}</h2>
      <h3 class="emphasis-txt">{{ $t("full_stack_engineer") }}</h3>
    </div>
  </main>
</template>

<script>
export default {
  name: "ProfileComponent",
  computed: {
    avatar() {
      return (
        import.meta.env.VITE_GITHUB_HOST +
        "/" +
        import.meta.env.VITE_USERNAME +
        ".png"
      );
    },
  },
};
</script>

<style scoped>
main {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 5em;
  width: 100%;
}
h1 {
  margin: 0;
  font-weight: 300;
  font-size: clamp(42px, 5vw, 60px);
}
h2 {
  margin: 0;
  font-size: clamp(52px, 8vw, 100px);
  font-weight: 900;
}
h3 {
  text-align: center;
  font-size: clamp(24px, 3vw, 48px);
  margin: 0;
  font-weight: 700;
}
img {
  border: 6px solid var(--color-background-reverse);
  border-radius: 50%;
  width: 300px;
  height: 300px;
  transition: transform 0.2s;
}

img:hover {
  transform: scale(1.1);
}

.profile-text {
  text-align: end;
}

/* Responsive layout - makes a one column layout instead of a two-column layout */
@media (max-width: 768px) {
  main {
    flex-direction: column;
  }

  .profile-img {
    margin-bottom: 50px;
  }
}
</style>
