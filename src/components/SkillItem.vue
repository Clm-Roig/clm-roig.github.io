<script setup lang="ts">
import type { Skill } from "../models/Skill";

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
      {{ $t(skill.category.name) }}
    </p>
    <div class="skill__level">
      <!-- eslint-disable-next-line vue/valid-v-for vue/no-unused-vars -->
      <span v-for="x in skill.level" :key="skill.level">★</span>
    </div>
  </li>
</template>

<style lang="scss" scoped>
@import "../assets/styles/components/skill-item-borders.scss";

.skill {
  align-items: center;
  color: $white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 4px;
  width: 5.9rem;
  height: 5.9rem;
  transition: all 0.5s;

  @media screen and (max-width: 600px) {
    width: 5.7rem;
    height: 5.7rem;
  }
  @media screen and (max-width: 440px) {
    width: 5.5rem;
    height: 5.5rem;
  }

  &__h3 {
    font-size: 1rem;
    line-height: 1rem;
    margin-bottom: 8px;
    margin-top: 20px;
    text-align: center;
    @media screen and (max-width: 600px) {
      font-size: 0.85rem;
    }
    @media screen and (max-width: 440px) {
      font-size: 0.75rem;
    }
  }

  &__category {
    font-family: "Frank Ruhl Libre";
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
