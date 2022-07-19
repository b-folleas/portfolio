<template>
  <div class="flex-div">
    <span id="works" class="mb-60"></span>
    <h2 class="h-center">{{ $t("works") }}</h2>
    <div class="mt-3 flex-div">
      <div class="project-div">
        <ProjectModule
          v-for="project in currentProjects"
          :key="project.id"
          :name="project.name"
          :description="project.description"
          :url="project.svn_url"
          :language="project.language"
          :topics="project.topics"
          :date="project.updated_at"
          class="module"
          :class="{ centersection: project !== currentProjects[0] }"
        />
      </div>
      <span
        >{{ projectsNumbers }} / {{ filteredProjects.length }}
        {{ $t("projects") }}</span
      >
      <br />
      <pagination
        class="pagination"
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
  name: "WorksSection",
  components: {
    ProjectModule,
    Pagination,
  },
  data: () => ({
    projects: [],
    filteredProjects: [],
    currentProjects: [],
    currentPage: 1,
    perPage: 4,
    totalPages: 10,
  }),
  computed: {
    projectsNumbers() {
      const currentProject = (this.currentPage - 1) * this.perPage + 1;
      return this.currentPage === this.totalPages
        ? currentProject === this.filteredProjects.length
          ? currentProject
          : currentProject + " - " + this.filteredProjects.length
        : currentProject + " - " + (currentProject + (this.perPage - 1));
    },
  },
  async created() {
    this.projects = await API.getAllProjects();
    this.filteredProjects = this.projects.filter((p) => !p.archived); // Keep only unarchived projects for display
    this.currentProjects = this.currentProjects = this.getProjectsByPage(
      this.currentPage,
      this.perPage
    );
    this.totalPages = this.filteredProjects?.length
      ? Math.floor(this.filteredProjects.length / this.perPage)
      : 0;
    this.totalPages +=
      this.filteredProjects.length / this.perPage !== 0 ? 1 : 0;
  },
  methods: {
    async onPageChange(page) {
      document.getElementById("works").scrollIntoView({ behavior: "smooth" });
      this.currentPage = page;
      this.currentProjects = this.getProjectsByPage(
        this.currentPage,
        this.perPage
      );
    },
    getProjectsByPage(currentPage, perPage) {
      const currentIndex = (currentPage - 1) * perPage; // currentPage starts at one but index as 0
      return this.filteredProjects.slice(currentIndex, currentIndex + perPage);
    },
  },
};
</script>
<style scoped>

.project-div {
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: baseline;
}

@media (max-width: 768px) {
  .pagination {
    margin-bottom: 20vh;
  }
}
</style>
