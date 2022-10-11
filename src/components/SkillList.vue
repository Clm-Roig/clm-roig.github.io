<script setup lang="ts">
import { skills as data } from "./skills";
import { SkillCategories } from "../models/SkillCategories";
import SkillItem from "./SkillItem/SkillItem.vue";
import { reactive } from "vue";

const state = reactive({
  skills: [...data].sort((s1, s2) => s2.level - s1.level),
});
</script>

<template>
  <div class="wrapper">
    <div
      v-for="category in Object.values(SkillCategories)"
      :key="category.name"
      class="category"
    >
      <h3 class="category__title">{{ category.name }}</h3>
      <ul class="category__skill-list">
        <SkillItem
          v-for="skill in state.skills.filter(
            (s) => s.category.name === category.name
          )"
          :key="skill.name"
          :skill="skill"
        />
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$breakpoint: 940px;
.wrapper {
  display: flex;
  gap: 16px;
  @media screen and (max-width: $breakpoint) {
    flex-direction: column;
    gap: 24px;
  }
}
.category {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    font-size: 1.35rem;
    font-family: "Frank Ruhl Libre", serif;
    font-weight: 300;
    letter-spacing: 2px;
    margin-bottom: 16px;
    text-transform: uppercase;
    @media screen and (max-width: $breakpoint) {
      font-size: 1.5rem;
    }
  }

  &__skill-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding-left: 0;
    @media screen and (max-width: $breakpoint) {
      flex-direction: row;
      justify-content: space-evenxly;
    }
  }
}
</style>
