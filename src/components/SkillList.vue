<script setup lang="ts">
import data from "./skills.json";
import type { Skill } from "../models/Skill";
import SkillItem from "./SkillItem.vue";
import { ref } from "vue";

const sort = (x1: any, x2: any, field: string) => {
  if (x1[field] < x2[field]) return 1;
  if (x1[field] > x2[field]) return -1;
  return 0;
};

const skills = ref(data);

function sortByCategory() {
  skills.value = skills.value.sort((s1, s2) => sort(s1, s2, "category"));
}

function sortByLevel() {
  skills.value = skills.value.sort((s1, s2) => sort(s1, s2, "level"));
}

function reset() {
  // TODO : reset to initial data
}
</script>

<template>
  <div class="text-center flex-center">
    <span>Sort by</span>
    <button @click="sortByCategory">Category</button>
    <button @click="sortByLevel">Level</button>
    <button @click="reset">Reset</button>
  </div>
  <ul class="skill-list">
    <SkillItem
      v-for="skill in (skills as Skill[])"
      :key="skill.name"
      :skill="skill"
    />
  </ul>
</template>

<style lang="scss">
.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding: 1rem;
}
</style>
