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
      :topics="project.topics"
      class="module"
    />
      <img class="wip" title="Work In Progress" src="../assets/icons/person-digging-solid.svg" alt="person-digging-solid.svg" />

    <pagination
      class="pagination"
      v-model="page"
      :records="10"
      :per-page="3"
      @paginate="myCallback"
    />
  </div>
</template>

<script>
import API from "@/api";
import ProjectModule from "../components/ProjectModule.vue";
import Pagination from "v-pagination-3";
export default {
  name: "MyWork",
  components: {
    ProjectModule,
    Pagination,
  },
  data: () => ({
    projects: [],
    page: 0,
  }),
  async created() {
    this.projects = await API.getProjects();
    console.log(this.projects);
  },
};
</script>
<style scoped>
.wip {
  margin-bottom: 1em;
  width: 30px;
}
div {
  display: flex;
  flex-flow: column;
  align-items: center;
  background-image: url("../assets/backgrounds/topography.svg");
}
.module {
  margin-bottom: 10em;
}
.pagination {
  display: inline-block;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.pagination a.active {
  background-color: #4caf50;
  color: white;
}
</style>
