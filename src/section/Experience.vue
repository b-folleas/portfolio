<template>
  <div class="flex-div">
    <span id="experience" class="mb-60"></span>
    <h2 class="h-center">{{ $t("experience.name") }}</h2>
    <AppTabs :eventList="EVENTS" />
  </div>
</template>

<script>
import AppTabs from "../components/AppTabs.vue";
export default {
  name: "ExperienceSection",
  inject: ["$func"],
  components: {
    AppTabs,
  },
  data() {
    return {
      EVENTS: [
        {
          id: 1,
          title: "japan",
          beginDate: new Date(2023, 9),
          endDate: "now",
          type: "work",
          city: "Kawasaki",
          country: "japan",
        },
        {
          id: 2,
          title: "fiducial",
          beginDate: new Date(2019, 8),
          endDate: new Date(2024, 3),
          type: "work",
          city: "Lyon",
          country: "France",
        },
        {
          id: 3,
          title: "cpe",
          beginDate: new Date(2019, 8),
          endDate: new Date(2022, 6),
          type: "graduation",
          city: "Lyon",
          country: "France",
        },
        {
          id: 4,
          title: "conity",
          beginDate: new Date(2019, 3),
          endDate: new Date(2019, 8),
          type: "work",
          city: "Lyon",
          country: "France",
        },
        {
          id: 5,
          title: "dawson",
          beginDate: new Date(2019, 0),
          endDate: new Date(2019, 3),
          type: "graduation",
          city: "Westmount",
          country: "Canada",
        },
        {
          id: 6,
          title: "iut",
          beginDate: new Date(2017, 8),
          endDate: new Date(2019, 0),
          type: "graduation",
          city: "Lyon",
          country: "France",
        },
      ],
    };
  },
};
</script>
