<template>
  <div>
    <h1>My Work</h1>
    <ProjectModule
      v-for="project in projects"
      :key="project.id"
      :name="project.name"
      :description="project.description"
      :url="project.svn_url"
      :language="project.language"
      class="module"
    />
  </div>
</template>

<script>
import API from "@/api";
import ProjectModule from "../components/ProjectModule.vue";
export default {
  name: "MyWork",
  components: {
    ProjectModule,
  },
  data: () => ({
    projects: [],
  }),
  async created() {
    this.projects = await API.getProjects();
  },
};
</script>
<style scoped>
div {
  display: flex;
  flex-flow: column;
  align-items: center;
  background-image: url("../assets/backgrounds/topography.svg");
}
.module {
  margin-bottom: 10em;
}
</style>
