<template>
  <main>
    <div class="profile-text">
      <h1>Hi I'm</h1>
      <h2>Brice.</h2>
      <div class="title-wrapper">
        <h3>Full Stack Developer</h3>
      </div>
    </div>
    <div class="profile-image">
      <img src="../assets/images/avatar.png" alt="Avatar" />
    </div>
  </main>
</template>

<script>
export default {
  name: "Profile",
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
  font-size: clamp(72px, 10vw, 144px);
  font-weight: 900;
}
h3 {
  text-align: center;
  font-size: clamp(24px, 3vw, 48px);
  margin: 0;
  font-weight: 700;
}
img {
  border: 12px solid white;
  border-radius: 50%;
  width: 300px;
  height: 300px;
}
.title-wrapper {
  margin-top: 1em;
  padding: 1em 4em;
  background-color: white;
  color: #1c1c1c;
  border-radius: 40px;
}

/* Responsive layout - makes a one column layout instead of a two-column layout */
@media (max-width: 992px) {
  main {
    flex-direction: column;
  }

  .profile-image {
    text-align: center;
    margin-top: 5em;
  }
}
</style>
