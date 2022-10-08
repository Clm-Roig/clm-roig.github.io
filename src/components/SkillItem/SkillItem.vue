<script setup lang="ts">
import type { Skill } from "../../models/Skill";

defineProps<{
  skill: Skill;
}>();
</script>

<template>
  <li class="skill" :class="'border-' + skill.level">
    <h3>{{ skill.name }}</h3>
    <p class="category" :style="{ 'background-color': skill.category.color }">
      {{ skill.category.name }}
    </p>
    <div class="level">
      <!-- eslint-disable-next-line vue/valid-v-for vue/no-unused-vars -->
      <span v-for="x in skill.level" :key="skill.level">⭐</span>
    </div>
  </li>
</template>

<style lang="scss">
@import "./borders.scss";

.category {
  font-size: 70%;
  font-weight: bold;
}

.skill > h3 {
  font-size: 1rem;
  line-height: 1rem;
  margin-bottom: 8px;
  margin-top: 8px;
  text-align: center;
}
.skill {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 8px;
  width: 6rem;
  height: 6rem;
  transition: all 0.3s;
}

.skill:hover {
  background: $primary-color-light;
  color: $black;
}

.level {
  font-size: 0.5rem;
}
</style>
