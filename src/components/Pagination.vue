<template>
  <ul class="pagination">
    <li class="pagination-item">
      <button
        type="button"
        @click="onClickFirstPage"
        :disabled="isInFirstPage"
        aria-label="Go to first page"
      >
        <i class="fa-solid fa-backward-fast"></i>
      </button>
    </li>

    <li class="pagination-item">
      <button
        type="button"
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
      >
        <i class="fa-solid fa-backward-step"></i>
      </button>
    </li>

    <!-- Visible Buttons Start -->

    <li v-for="page in pages" class="pagination-item" :key="page.name">
      <button
        type="button"
        @click="onClickPage(page.name)"
        :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.name) }"
        :aria-label="`Go to page number ${page.name}`"
      >
        {{ page.name }}
      </button>
    </li>

    <!-- Visible Buttons End -->

    <li class="pagination-item">
      <button type="button" @click="onClickNextPage" :disabled="isInLastPage">
        <i class="fa-solid fa-forward-step"></i>
      </button>
    </li>

    <li class="pagination-item">
      <button type="button" @click="onClickLastPage" :disabled="isInLastPage">
        <i class="fa-solid fa-forward-fast"></i>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "PaginationComponent",
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 4,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    startPage() {
      // When on the first page
      if (this.currentPage === 1) {
        return 1;
      }

      // When on the last page
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1;
      }

      // When inbetween
      return this.currentPage - 1;
    },
    pages() {
      const range = [];
      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        });
      }
      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    onClickFirstPage() {
      this.$emit("pagechanged", 1);
    },
    onClickPreviousPage() {
      this.$emit("pagechanged", this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      this.$emit("pagechanged", this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit("pagechanged", this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
  },
};
</script>

<style scoped>
.pagination {
  list-style-type: none;
}

.pagination-item {
  display: inline-block;
}

.pagination-item > button {
  border: none;
  text-align: center;
  font-weight: 600;
  height: fit-content;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  height: fit-content;
  text-decoration: none;
  outline: none;
  padding: 0 1em;
}

.pagination-item > button:hover:enabled {
  background-color: var(--vt-c-grey);
}

.pagination-item:first-of-type > button {
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
}

.pagination-item:last-of-type > button {
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
}

.fa-solid {
  color: var(--color-text);
}

.active {
  background-color: var(--color-primary);
  color: var(--vt-c-white);
}

@media (max-width: 768px) {
  .pagination-item > button {
    padding: 0 4vw;
  }
}
</style>
