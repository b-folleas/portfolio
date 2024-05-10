<template>
<div class="flex-div">
  <span id="experience" class="mb-60"></span>
  <h2 class="h-center">{{ $t("experience.name") }}</h2>
  <v-card class="experience-tabs">
    <v-tabs v-model="tab" :bg-color="isDarkTheme ? '#14151c' : 'white'"
      :color="isDarkTheme ? 'deep-purple-accent-4' : 'primary'">
      <v-tab v-for="event in EVENTS" :key="event.id" :value="event.title">
        {{ $t("experience.tab." + event.title) }}
      </v-tab>
    </v-tabs>
    <v-card-text class="experience-tabs-window">
      <v-tabs-window v-model="tab">
        <v-tabs-window-item v-for="event in EVENTS" :key="event.id" :value="event.title">
          <h5>
            <flag class="mr-2" :squared="false" :iso="event.flag" />
            {{ $t("experience.title." + event.title) }}
          </h5>
          <p>
            <span>
              {{ $func.formatDate(event.beginDate, true) }}&nbsp;-&nbsp;
            </span>
            <span v-if="event.endDate === 'now'">
              {{ $t("now") }}
            </span>
            <span v-else>
              {{ $func.formatDate(event.endDate, true) }}
            </span>
          </p>
          <p>{{ $t("experience.description." + event.title) }}</p>
          <p class="mt-2" v-if="isThereExperienceDescriptionPart2(event.title + '_2')">
            {{ $t("experience.description." + event.title + "_2") }}
          </p>
          <v-chip v-for="tag in event.tags" :key="tag" class="mr-2">
            {{ $t("experience.tags." + tag) }}
          </v-chip>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "ExperienceSection",
  inject: ["$func"],
  data() {
    return {
      EVENTS: [
        {
          id: 1,
          title: "japan",
          beginDate: new Date(2023, 9),
          endDate: "now",
          type: "travel",
          city: "Kawasaki",
          flag: "jp",
          tags: ["travel", "remote", "fullstack", "js", "vue", "php", "symfony", "java", "springboot", "postgres"]
        },
        {
          id: 2,
          title: "fiducial",
          beginDate: new Date(2019, 8),
          endDate: new Date(2024, 3),
          type: "work",
          city: "Lyon",
          flag: "fr",
          tags: ["fullstack", "js", "vue", "php", "symfony", "java", "springboot", "postgres"]
        },
        {
          id: 3,
          title: "cpe",
          beginDate: new Date(2019, 8),
          endDate: new Date(2022, 6),
          type: "graduation",
          city: "Lyon",
          flag: "fr",
          tags: ["fullstack", "web_dev", "machine_learning", "big_data", "database", "ci_cd", "conception", "ui_ux"]
        },
        {
          id: 4,
          title: "conity",
          beginDate: new Date(2019, 3),
          endDate: new Date(2019, 8),
          type: "work",
          city: "Lyon",
          flag: "fr",
          tags: ["web_dev", "postgres", "docker", "ci_cd"]
        },
        {
          id: 5,
          title: "dawson",
          beginDate: new Date(2019, 0),
          endDate: new Date(2019, 3),
          type: "graduation",
          city: "Westmount",
          flag: "ca",
          tags: ["english", "java", "windows"]
        },
        {
          id: 6,
          title: "iut",
          beginDate: new Date(2017, 8),
          endDate: new Date(2019, 0),
          type: "graduation",
          city: "Lyon",
          flag: "fr",
          tags: ["web_dev", "database", "networks", "maths"]
        },
      ],
      tab: 'japan', // Default tab shown is Japan
    };
  },
  computed: {
    ...mapGetters("theme", ["isDarkTheme"])
  },
  methods: {
    isThereExperienceDescriptionPart2(searchedKey) {
      return !!this.$i18n.messages.en.experience.description[searchedKey];
    },
  },
};
</script>

<style scoped>
.experience-tabs {
  margin: auto;
  margin-top: 0;
  width: 80vw;
  border-radius: 20px;
  box-shadow: none;
}

.experience-tabs-window {
  background-color: var(--color-background-soft);
  color: var(--color-text);
}

.v-btn:focus {
  outline: none;
  box-shadow: none;
}
</style>
