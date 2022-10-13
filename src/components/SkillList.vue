<script setup lang="ts">
import { skills as data } from "../models/skills";
import { SkillCategories } from "../models/SkillCategories";
import SkillItem from "./SkillItem.vue";
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
      <h3 class="category__title">{{ $t(category.name) }}</h3>
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
    <ul class="legend">
      <li class="legend__level legend__level--1">
        <span>★</span> = {{ $t("skills.level-1") }}
      </li>
      <li class="legend__level legend__level--2">
        <span>★★</span> = {{ $t("skills.level-2") }}
      </li>
      <li class="legend__level legend__level--3">
        <span>★★★</span> = {{ $t("skills.level-3") }}
      </li>
      <li class="legend__level legend__level--4">
        <span>★★★★</span> = {{ $t("skills.level-4") }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
$breakpoint: 940px;
$second-breakpoint: 620px;
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

.legend {
  bottom: 20%;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  & span {
    color: $secondary-color;
  }
  @media screen and (max-width: $breakpoint) {
    &__level {
      flex: 1 50%;
      min-width: 200px;
    }
    &__level--1 {
      order: 1;
    }
    &__level--2 {
      order: 3;
    }
    &__level--3 {
      order: 2;
    }
    &__level--4 {
      order: 4;
    }
  }
  @media screen and (max-width: $second-breakpoint) {
    &__level {
      flex-basis: 100%;
      order: initial;
      text-align: center;
    }
  }

  @media screen and (max-width: $breakpoint) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: static;
    transform: translateX(0);
  }
}
</style>
