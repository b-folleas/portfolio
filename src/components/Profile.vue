<template>
  <main>
    <Particles />
    <div class="picture-div">
      <picture>
        <source srcset="../assets/img/avatar.jpg" media="(min-width: 2000px)" />
        <source srcset="../assets/img/avatar-350.jpg" media="(min-width: 768px)" />
        <source srcset="../assets/img/avatar-250.jpg" media="(min-width: 425px)" />
        <img src="../assets/img/avatar-200.jpg" id="avatar" alt="Avatar" class="profile-img fade-in-top no-select"
          :title="$t('profile.avatar')" ref="img" />
      </picture>
    </div>
    <div class="profile-text fade-in-top" :class="{ smaller: $i18n.locale === 'ja' }">
      <h1>{{ $t("profile.hello") }}</h1>
      <h1 class="smaller no-wrap">{{ $t("profile.i_m_brice") }}</h1>
      <p class="emphasis-txt big-emphasis no-wrap">{{ $t("profile.full_stack_engineer") }}</p>
      <img v-for="media in MEDIA" :key="media.id" class="icon-img small-icon-img icon-link" loading="lazy"
        :src="assetsSrc[media.title]" :alt="media.title" :title="media.title"
        @click="$func.openLink(media.link, '_blank')" />
      <ScrollDown />
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
import Particles from "../components/Particles.vue";
import ScrollDown from "./ScrollDown.vue";
export default {
  name: "ProfileComponent",
  inject: ["$func"],
  components: { Particles, ScrollDown },
  data () {
    return {
      MEDIA: [
        { id: 1, title: 'email', link: 'mailto:brice.folleas@gmail.com' },
        { id: 2, title: 'linkedin', link: 'https://www.linkedin.com/in/brice-folleas/' },
        { id: 3, title: 'github', link: 'https://github.com/b-folleas' }
      ]
    }
  },
  computed: {
    ...mapState("theme", ["userTheme"]),
    assetsSrc() {
      const result = {};
      if (this.userTheme == "dark-theme") {
        result.email = this.$func.getIconImgUrl("email");
        result.linkedin = this.$func.getIconImgUrl("linkedin");
        result.github = this.$func.getIconImgUrl("github");
      } else {
        result.email = this.$func.getIconImgUrl("email-dark");
        result.linkedin = this.$func.getIconImgUrl("linkedin-dark");
        result.github = this.$func.getIconImgUrl("github-dark");
      }
      return result;
    }
  }
};
</script>

<style scoped>
main {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin: 5em;
  width: 100%;
}

h1 {
  margin: 0;
  font-weight: 300;
  font-size: clamp(42px, 5vw, 60px);
}

h1.smaller {
  /* TODO : rename */
  font-size: clamp(52px, 8vw, 100px);
  font-weight: 900;
}

h3 {
  text-align: center;
  font-size: clamp(24px, 3vw, 48px);
  margin: 0;
  font-weight: 700;
}

.profile-img {
  width: 350px;
  height: 350px;
  border: 6px solid var(--color-background-reverse);
  border-radius: 50%;
  transition: transform 0.2s;
}

.profile-img:hover {
  transform: scale(1.1);
}

.big-emphasis {
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  font-size: clamp(24px, 3vw, 48px);
  margin: 0;
  font-weight: 700;
}

/* Big screen */
@media (min-width: 768px) {
  .profile-img {
    justify-content: end;
  }
  .picture-div {
    margin-right: 10vw;
  }
}

/* Small screen */
@media (max-width: 768px) {
  /* Responsive layout - makes a one column layout instead of a two-column layout */
  main {
    flex-direction: column;
  }

  picture {
    margin: auto;
  }

  .profile-img {
    margin: auto;
    justify-content: center;
    margin-right: auto;
  }

  .profile-text {
  text-align: end;
}

  .smaller h1 {
    font-size: clamp(36px, 4vw, 48px);
  }

  .smaller h1.smaller {
    font-size: clamp(44px, 7vw, 60px);
  }

  .smaller h3 {
    font-size: clamp(20px, 3vw, 38px);
  }
}

/* Tablet */
@media (min-width: 425px) and (max-width: 780px) {
  .profile-img {
    width: 250px;
    height: 250px;
  }
}

/* Smartphone */
@media (max-width: 425px) {
  .profile-img {
    width: 200px;
    height: 200px;
    margin-bottom: 10vh;
  }
}
</style>
