<template>
  <div class="history-tabs">
    <ul class="event-selector snip1135">
      <li
        v-for="event in eventList"
        :key="event.id"
        @click="setActiveTab(event)"
        :class="{ active: activeEvent === event }"
      >
        <a>{{ $t('history.title.' + event.title) }}</a>
      </li>
    </ul>
    <article v-if="activeEvent" class="event-container">
        <div class="project-module-title">
          <h3>{{ $t('history.title.' + activeEvent.title) }}</h3>
        </div>
      <p>
        {{ $func.formatDate(activeEvent.beginDate) }} -
        {{ $func.formatDate(activeEvent.endDate) }}
      </p>
      <br>
      <p>{{ $t('history.description.' + activeEvent.title) }}</p>
      <p class="mt-2" v-if="isThereHistoryDescriptionPart2(activeEvent.title + '_2')">{{ $t('history.description.' + activeEvent.title + '_2') }}</p>
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
    isThereHistoryDescriptionPart2 (searchedKey) {
      return !!this.$i18n.messages.en.history.description[searchedKey]
    }
  },
};
</script>

<style scoped>
.history-tabs {
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
}

.event-selector li:first-child {
  border-top-left-radius: 20px;
}

.event-selector li:last-child {
  border-bottom-left-radius: 20px;
}
.event-selector li:hover {
  cursor: pointer;
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
  box-shadow: 0px 14px px 0px rgba(0, 0, 0, 0.4);
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

h3 {
  font-size: clamp(1.2rem, 2vw, 4vw);
  opacity: 0.5;
  transition: opacity 0.2s ease-in-out;
  margin: 0;
}

p {
  font-size: clamp(10px, 12px, 24px);
  opacity: 0.5;
  transition: opacity 0.2s ease-in-out;
}

@media (max-width: 768px) {
  .event-container {
    max-width: 80vw;
  }

  .event-container * {
    opacity: 0.9;
  }

  .history-tabs {
    margin: 5vw;
  }
}
</style>
