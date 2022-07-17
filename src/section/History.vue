<template>
  <div class="main-container">
    <span id="history" class="mb-60"></span>
    <h2 class="h-center">{{ $t("history") }}</h2>
    <div class="timeline-div">
      <div
        class="event"
        v-for="event in events"
        :key="event.id"
      >
        <p class="date">
          {{ $func.formatDate(new Date(event.beginDate), true) }} -
          {{ $func.formatDate(new Date(event.endDate), true) }}
        </p>
        <p class="description">
          {{ $t("history-description." + event.description) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HistorySection",
  inject: ["$func"],
  data() {
    return {
      events: [
        {
          id: 1,
          beginDate: new Date(2019, 9),
          endDate: new Date(),
          description: "fiducial",
          type: "work",
        },
        {
          id: 2,
          beginDate: new Date(2019, 9),
          endDate: new Date(2022, 7),
          description: "cpe",
          type: "graduation",
        },
        {
          id: 3,
          beginDate: new Date(2019, 4),
          endDate: new Date(2019, 9),
          description: "conity",
          type: "work",
        },
        {
          id: 3,
          beginDate: new Date(2019, 1),
          endDate: new Date(2019, 4),
          description: "dawson",
          type: "graduation",
        },
        {
          id: 4,
          beginDate: new Date(2017, 9),
          endDate: new Date(2019, 1),
          description: "iut",
          type: "graduation",
        },
      ],
    };
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-flow: column;
  align-items: center;
}

/* Timeline container */
.timeline-div {
  position: relative;
  padding: 10px 10px 10px 50px;
  width: 80vw;
  display: flex;
  flex-direction: column;
  margin: auto;
}

.timeline-div,
.timeline-div * {
  box-sizing: border-box;
}

/* Vertical line using ::before */
.timeline-div::before {
  /* Vertical line */
  content: "";
  width: 5px;
  background-color: var(--color-background-reverse);

  /* Line position */
  position: absolute;
  top: 40px;
  bottom: 30px;
  left: 15px;
}

/* Style for events */
div.event {
  padding: 20px 30px;
  position: relative;
  margin-bottom: 1em;
  background-color: var(--color-background-soft);
  border-radius: 20px;
  border: 2px solid var(--color-background-soft);
  transition: all 0.2s ease-in-out;
  min-width: 200px;
}

div.event:hover {
  background-color: var(--color-background);
  border: 2px solid var(--color-primary);
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.4);
}

/* Style for dates and description */
p.date {
  font-size: clamp(12px, 14px, 1.1em);
  font-weight: 700;
  color: var(--color-background-reverse);
}
p.description {
  margin: 10px 0 0 0;
  color: var(--color-background-reverse);
}

/* Circle on timeline */
div.event::after {
  /* Circle */
  content: "";
  background: var(--vt-c-white);
  width: 18px;
  height: 18px;
  border-radius: 50%;

  /* Circle position to left */
  position: absolute;
  top: 20%;
  left: -43.5px;
}

</style>
