<template>
  <div class="experience-tabs">
    <ul class="event-selector snip1135">
      <li v-for="event in eventList" :key="event.id" @click="setActiveTab(event)"
        :class="{ active: activeEvent === event }">
        <p class="link">{{ $t("experience.title." + event.title) }}</p>
      </li>
    </ul>
    <article v-if="activeEvent" class="event-container">
      <div class="project-module-title">
        <h3>{{ $t("experience.title." + activeEvent.title) }}</h3>
      </div>
      <p>
        <span>
          {{ $func.formatDate(activeEvent.beginDate, true) }}&nbsp;-&nbsp;
        </span>
        <span v-if="activeEvent.endDate === 'now'">
          {{ $t("now") }}
        </span>
        <span v-else>
          {{ $func.formatDate(activeEvent.endDate, true) }}
        </span>
      </p>
      <br />
      <p>{{ $t("experience.description." + activeEvent.title) }}</p>
      <p class="mt-2" v-if="isThereExperienceDescriptionPart2(activeEvent.title + '_2')">
        {{ $t("experience.description." + activeEvent.title + "_2") }}
      </p>
    </article>
  </div>
</template>

<script>
export default {
  inject: ["$func"],
  props: {
    eventList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeEvent: this.eventList[0],
    };
  },
  methods: {
    setActiveTab(item) {
      this.activeEvent = item;
    },
    isThereExperienceDescriptionPart2(searchedKey) {
      return !!this.$i18n.messages.en.experience.description[searchedKey];
    },
  },
};
</script>

<style scoped>
h3 {
  font-size: clamp(1.2rem, 2vw, 4vw);
  opacity: 0.9;
  transition: opacity 0.2s ease-in-out;
  margin: 0;
}

p {
  font-size: clamp(8px, 10px, 24px);
  opacity: 0.9;
  transition: opacity 0.2s ease-in-out;
}

.experience-tabs {
  display: flex;
  width: 80vw;
}

.event-container {
  padding: 1em;
  width: 70vw;
  height: 375px;
  background-color: var(--color-background-soft);
  border: 2px solid var(--color-borders);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  color: var(--color-text);
  transition: all 0.2s ease-in-out;
}

.event-selector {
  border-right: none;
  color: var(--color-text);
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  list-style-type: none;
  padding: 0;
}

.event-selector li {
  padding: 1em;
  background-color: var(--color-background-soft);
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  border: 2px solid var(--color-background-emphasis);
}

.event-selector li:first-child {
  border-top-left-radius: 20px;
}

.event-selector li:last-child {
  border-bottom-left-radius: 20px;
}

.event-selector li:hover {
  cursor: pointer;
  background-color: var(--color-background-emphasis);
}

.event-selector li.active {
  color: var(--color-text);
  background-color: var(--color-background-emphasis);
}

.event-selector li:first-child {
  border-top: 2px solid var(--color-background-emphasis);
}

.event-selector li:last-child {
  border-bottom: 2px solid var(--color-background-emphasis);
}

.event-selector li a {
  font-size: clamp(8px, 10px, 24px);
}

.event-container:hover {
  background-color: var(--color-background-emphasis);
  border: 2px solid var(--color-primary);
}

.event-selector li {
  height: 75px;
}

.event-selector li.active p,
.event-container:hover p,
.event-container:hover em,
.event-container:hover h3 {
  opacity: 0.9;
}

.project-module-header {
  margin-bottom: 1em;
}

.project-module-title {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .event-container {
    max-width: 80vw;
  }

  .event-container * {
    opacity: 0.9;
  }

  .experience-tabs {
    margin: 5vw;
  }
}
</style>
