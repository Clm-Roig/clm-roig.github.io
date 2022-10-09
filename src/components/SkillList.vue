<script setup lang="ts">
import { skills as data } from "./skills";
import { SkillCategories } from "../models/SkillCategories";
import SkillItem from "./SkillItem/SkillItem.vue";
import { computed, reactive } from "vue";

const state = reactive({
  skills: [...data],
  sortBy: "",
  displayedCategoryNames: [
    ...Object.values(SkillCategories).map((c: SkillCategories) => c.name),
  ],
});

const filteredSkills = computed(() => {
  let res = [];
  // filter
  res = state.skills.filter((s) =>
    state.displayedCategoryNames.includes(s.category.name)
  );
  // sort by
  if (state.sortBy === "category") {
    res = res.sort((x1, x2) => {
      if (x1.category.name > x2.category.name) {
        return 1;
      }
      if (x1.category.name < x2.category.name) {
        return -1;
      }
      return 0;
    });
  } else if (state.sortBy === "level") {
    res = res.sort((x1, x2) => {
      if (x1.level > x2.level) {
        return -1;
      }
      if (x1.level < x2.level) {
        return 1;
      }
      return 0;
    });
  }

  return res;
});

function displayAllCategories() {
  state.displayedCategoryNames = [
    ...Object.values(SkillCategories).map((c) => c.name),
  ];
}

function displayOnlyCategory(category: SkillCategories) {
  state.displayedCategoryNames = [category.name];
}

function toggleDisplayCategory(category: SkillCategories) {
  if (state.displayedCategoryNames.includes(category.name)) {
    state.displayedCategoryNames = state.displayedCategoryNames.filter(
      (c) => c !== category.name
    );
  } else {
    state.displayedCategoryNames.push(category.name);
  }
}

function sortByCategory() {
  if (state.sortBy === "category") {
    resetSortBy();
  } else {
    state.sortBy = "category";
  }
}

function sortByLevel() {
  if (state.sortBy === "level") {
    resetSortBy();
  } else {
    state.sortBy = "level";
  }
}

function resetSortBy() {
  state.sortBy = "";
}
</script>

<template>
  <div class="text-center flex-center">
    <p>Sort by</p>
    <button
      :class="state.sortBy === 'category' ? 'selected' : ''"
      @click="sortByCategory"
    >
      Category
    </button>
    <button
      :class="state.sortBy === 'level' ? 'selected' : ''"
      @click="sortByLevel"
    >
      Level
    </button>
    <button class="outlined" @click="resetSortBy">Reset</button>
  </div>

  <div class="text-center flex-center categories-filter flex-wrap">
    <div>
      <p>Categories</p>
    </div>
    <button
      v-for="category in Object.values(SkillCategories)"
      :key="category"
      class="btn-category"
      :style="{ 'background-color': category.color }"
      :class="
        state.displayedCategoryNames.includes(category.name) ? 'selected' : ''
      "
      @click.exact="toggleDisplayCategory(category)"
      @click.ctrl="displayOnlyCategory(category)"
    >
      {{ category.name }}
    </button>
    <button class="outlined" @click="displayAllCategories">Display all</button>
  </div>

  <TransitionGroup class="skill-list" tag="ul" :css="false">
    <SkillItem
      v-for="skill in filteredSkills"
      :key="skill.name"
      :skill="skill"
    />
    <div v-if="filteredSkills.length === 0">
      <p class="text-center">
        No skills to display :( Try using the filters above ↑
      </p>
    </div>
  </TransitionGroup>
</template>

<style lang="scss">
.btn-category {
  color: $white;
}

.categories-filter {
  margin-top: 8px;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding: 32px;
}
</style>
