<script setup lang="ts">
import skills from "./skills.json";
import type { Skill } from "../models/Skill";
import SkillItem from "./SkillItem.vue";
</script>

<template>
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
