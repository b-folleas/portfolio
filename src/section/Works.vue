<template>
  <div id="works">
    <h2 class="h-center">{{ $t("works") }}</h2>
    <div class="mt-3">
      <ProjectModule
        v-for="project in paginatedProjects"
        :key="project.id"
        :name="project.name"
        :description="project.description"
        :url="project.svn_url"
        :language="project.language"
        :topics="project.topics"
        :date="project.updated_at"
        class="module"
      />
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
    this.totalPages = this.projects?.length ? Math.floor(this.projects.length / this.perPage) + 1 : 0;
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
div {
  display: flex;
  flex-flow: column;
  align-items: center;
}
.module {
  margin-bottom: 10em;
}
.pagination {
  margin-bottom: 50px;
}
</style>
