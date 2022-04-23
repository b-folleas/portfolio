<template>
  <div class="find-me-icons-main-container" @click="openLink">
    <div class="find-me-icons-header">
      <img :src="getImageUrl(title)" :alt="title" />
      <div class="horizontal-divider"></div>
      <strong> {{ title }} </strong>
    </div>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: "FindMeIcons",
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: false
    }
  },
  methods: {
    openLink() {
      window.open(this.link, "_blank", "noopener");
    },
    // Must use a switch to specify the path of the icon as template literals not working
    getImageUrl(name) {
      switch (name) {
      case 'email':
        return new URL('../assets/icons/email.svg', import.meta.url).href
      case 'linkedin':
        return new URL('../assets/icons/linkedin.svg', import.meta.url).href
      case 'github':
        return new URL('../assets/icons/github.svg', import.meta.url).href
      }
    }
  }
};
</script>

<style scoped>
.horizontal-divider {
  width: 1px;
  background-color: #313131;
  height: 30px;
}
.find-me-icons-main-container {
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: #111111;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
  min-width: 250px;
}
.find-me-icons-main-container:hover {
  background-color: #1c1c1c;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.4);
}
.find-me-icons-main-container:hover img {
  opacity: 0.9;
}
.find-me-icons-main-container:hover strong {
  opacity: 0.9;
}
.find-me-icons-main-container:hover p {
  opacity: 0.9;
}
img {
  width: clamp(35px, 2vw, 2vw);
  opacity: 0.5;
  transition: opacity 0.2s ease-in-out;
}
strong {
  font-size: clamp(16px, 1.1vw, 1.1vw);
  opacity: 0.5;
  transition: opacity 0.2s ease-in-out;
}
p {
  font-size: clamp(16px, 1vw, 1vw);
  padding: 0 2em;
  opacity: 0.5;
  transition: opacity 0.2s ease-in-out;
}
.find-me-icons-header {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.find-me-icons-header * {
  margin: 1em;
}
</style>