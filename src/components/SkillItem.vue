<script setup lang="ts">
import type { Skill } from "../models/Skill";

defineProps<{
  skill: Skill;
}>();
</script>

<template>
  <li class="skill" :class="'border-' + skill.level">
    <div class="skill__level">
      <!-- eslint-disable-next-line vue/valid-v-for vue/no-unused-vars -->
      <span v-for="x in skill.level" :key="skill.level">★</span>
    </div>
    <h3 class="skill__h3">{{ skill.name }}</h3>
    <p
      class="skill__category"
      :style="{ 'text-decoration-color': skill.category.color }"
    >
      {{ $t("skills.categories['" + skill.category.name + "']") }}
    </p>
  </li>
</template>

<style lang="scss" scoped>
@import "../assets/styles/components/skill-item-borders.scss";

.skill {
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.3);
  color: $white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 8px;
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
    text-align: center;
    z-index: 1;
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
    z-index: 1;
  }

  &__level {
    font-size: 0.5rem;
    line-height: 0.5em;
    color: $secondary-color;
    z-index: 1;
  }
  &:hover {
    background: rgba($primary-color, 0.7);
    box-shadow: 0 4px 30px rgba(255, 255, 255, 0.5);
    color: $black;
    scale: 1.15;
  }

  &:hover::after {
    background: rgba($primary-color, 0.3);
  }
  &:hover::before {
    background: rgba($primary-color, 0.5);
  }
}
</style>
