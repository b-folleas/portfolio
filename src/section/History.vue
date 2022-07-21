<template>
  <div class="flex-div">
  <h2 class="h-center">{{ $t("history.name") }}</h2>
  <AppTabs :eventList="events" />
  </div>
</template>

<script>
import AppTabs from "../components/AppTabs.vue";
export default {
  name: "HistorySection",
  inject: ["$func"],
  components: {
    AppTabs,
  },
  data() {
    return {
      events: [
        {
          id: 1,
          title: "fiducial",
          beginDate: new Date(2019, 9),
          endDate: new Date(),
          type: "work"
        },
        {
          id: 2,
          title: "cpe",
          beginDate: new Date(2019, 9),
          endDate: new Date(2022, 7),
          type: "graduation"
        },
        {
          id: 3,
          title: "conity",
          beginDate: new Date(2019, 4),
          endDate: new Date(2019, 9),
          type: "work"
        },
        {
          id: 3,
          title: "dawson",
          beginDate: new Date(2019, 1),
          endDate: new Date(2019, 4),
          type: "graduation"
        },
        {
          id: 4,
          title: "iut",
          beginDate: new Date(2017, 9),
          endDate: new Date(2019, 1),
          type: "graduation"
        },
      ],
    };
  },
};
</script>
