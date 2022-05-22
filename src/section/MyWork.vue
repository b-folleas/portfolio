<template>
  <div>
    <h1>My Work</h1>
    <div class="mt-3">
      <ProjectModule
        v-for="project in paginatedProjects"
        :key="project.id"
        :name="project.name"
        :description="project.description"
        :url="project.svn_url"
        :language="project.language"
        :topics="project.topics"
        class="module"
      />
      <pagination
        :totalPages="totalPages"
        :perPage="perPage"
        :currentPage="currentPage"
        @pagechanged="onPageChange"
      />
    </div>
  </div>
</template>

<script>
import API from "@/api";
import ProjectModule from "../components/ProjectModule.vue";
import Pagination from "../components/Pagination.vue";
export default {
  name: "MyWork",
  components: {
    ProjectModule,
    Pagination,
  },
  data: () => ({
    projects: [],
    paginatedProjects: [],
    currentPage: 1,
    perPage: 3,
    totalPages: 10,
  }),
  async created() {
    this.projects = await API.getAllProjects();
    this.paginatedProjects = await API.getProjectsByPage(
      this.currentPage,
      this.perPage
    );
    this.totalPages = Math.floor(this.projects.length / this.perPage) + 1;
  },
  methods: {
    async onPageChange(page) {
      this.currentPage = page;
      this.paginatedProjects = await API.getProjectsByPage(
        this.currentPage,
        this.perPage
      );
    },
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
