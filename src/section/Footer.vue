<template>
  <div>
    <footer>
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
</style>
