<script setup lang="ts">
import type { Skill } from "../../models/Skill";

defineProps<{
  skill: Skill;
}>();
</script>

<template>
  <li class="skill" :class="'border-' + skill.level">
    <h3 class="skill__h3">{{ skill.name }}</h3>
    <p
      class="skill__category"
      :style="{ 'text-decoration-color': skill.category.color }"
    >
      {{ skill.category.name }}
    </p>
    <div class="skill__level">
      <!-- eslint-disable-next-line vue/valid-v-for vue/no-unused-vars -->
      <span v-for="x in skill.level" :key="skill.level">★</span>
    </div>
  </li>
</template>

<style lang="scss" scoped>
@import "./borders.scss";

.skill {
  align-items: center;
  color: $white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 8px;
  width: 6rem;
  height: 6rem;
  transition: all 0.5s;

  &__h3 {
    font-size: 1rem;
    line-height: 1rem;
    margin-bottom: 8px;
    margin-top: 8px;
    text-align: center;
  }

  &__category {
    font-family: "DM Serif display";
    font-size: 70%;
    padding: 0.05rem;
    text-decoration: underline overline 2px;
    text-underline-offset: 4px;
  }

  &__level {
    font-size: 0.5rem;
    color: $secondary-color;
  }
}

.skill:hover {
  background: $primary-color;

  color: $black;
  scale: 1.15;
}
</style>
