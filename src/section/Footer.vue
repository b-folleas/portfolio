<template>
  <div>
    <footer>
      <!-- <svg viewBox="0 0 120 28">
      <path
        id="wave"
        class="wave"
        d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
      />
      <use id="wave3" class="wave" xlink:href="#wave" x="0" y="-2"></use>
        <use id="wave2" class="wave" xlink:href="#wave" x="0" y="-1"></use>
        <use id="wave1" class="wave" xlink:href="#wave" x="0" y="0" />
    </svg> -->
      <div class="main-footer">
        <img src="../assets/logo-dark.svg" alt="logo" />
        <div class="vertical-divider"></div>
        <h1>Brice</h1>
      </div>
      <div>
        <h4>© 2022</h4>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
}
footer > div {
  flex: 1 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}
.main-footer {
  padding-top: 1em;
}
.main-footer > * {
  width: 48px;
}
.vertical-divider {
  height: 48px;
  width: 2px;
  margin: 0 2em 0 2em;
  background-color: #1c1c1c;
}
img {
  width: 48px;
}
h1 {
  color: #1c1c1c;
  margin: 0;
  font-size: 48px;
}
h4 {
  color: #1c1c1c;
  font-size: 14px;
}
/* svg {
  width: 100%;
}
.wave {
  animation: wave 10s linear;
  animation-iteration-count: infinite;
  fill: #4478e3;
}
#wave2 {
  animation-duration: 10s;
  animation-direction: reverse;
  opacity: 0.6;
}
#wave3 {
  animation-duration: 13s;
  opacity: 0.3;
}
@keyframes wave {
  to {
    transform: translateX(-100%);
  }
} */
</style>
