<template>
  <div class="main-container">
    <span id="history" class="mb-60"></span>
    <h2 class="h-center">{{ $t("history") }}</h2>
    <div class="timeline-div">
      <div
        class="event"
        v-for="event in events"
        :key="event.id"
        :class="{
          bgwork: event.type === 'work',
          bggraduation: event.type === 'graduation',
        }"
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
/* (A) TIMELINE CONTAINER */
.timeline-div {
  /* (A1) RELATIVE POSITION REQUIRED TO PROPERLY POSITION THE TIMELINE */
  position: relative;

  /* (A2) RESERVE MORE SPACE TO THE LEFT FOR THE TIMELINE */
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

/* (B) DRAW VERTICAL LINE USING ::BEFORE */
.timeline-div::before {
  /* Vertical line */
  content: "";
  width: 5px;
  background-color: var(--color-primary);

  /* (B2) POSITION TO THE LEFT */
  position: absolute;
  top: 40px;
  bottom: 30px;
  left: 15px;
}

/* (C) COSMETICS FOR EVENTS */
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
  background-color: var(--color-background-hover);
  border: 2px solid var(--color-primary);
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.4);
}

/* (D) COSMETICS FOR EVENT DATE & TEXT */
p.date {
  font-size: 1.1em;
  font-weight: 700;
  color: var(--color-background-reverse);
}
p.description {
  margin: 10px 0 0 0;
  color: var(--color-background-reverse);
}
/* 
div.event::before {
  content: "";
  border: 10px solid transparent;
  border-right-color: #ffebeb;
  border-left: 0;

  position: absolute;
  top: 20%;
  left: -10px;
} */

/* (F) CIRCLE ON TIMELINE */
div.event::after {
  /* (F1) "MAGIC CIRCLE" */
  content: "";
  background: var(--color-primary);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  border: 4px solid var(--color-primary);
  width: 32px;
  height: 32px;
  border-radius: 50%;

  /* (F2) POSITION TO THE LEFT */
  position: absolute;
  top: 20%;
  left: -50px;
}

div.event.bggraduation::after {
  background-image: url("src/assets/icons/graduation-cap.svg");
}
div.event.bgwork::after {
  background-size: 16px !important;
  background-image: url("src/assets/icons/briefcase.svg");
}
</style>
