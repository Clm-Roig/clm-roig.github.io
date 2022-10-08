<script setup lang="ts">
import type { Skill } from "../../models/Skill";
import { SkillCategories } from "../../models/SkillCategories";

const computeCategoryClass = (category: SkillCategories) => {
  switch (category) {
    case SkillCategories.BACK_END:
      return "category-back-end";
    case SkillCategories.DBMS:
      return "category-dbms";
    case SkillCategories.FRONT_END:
      return "category-front-end";
    case SkillCategories.MISC:
      return "category-misc";
    case SkillCategories.TEST_CI:
      return "category-test-ci";
    default:
      return;
  }
};
defineProps<{
  skill: Skill;
}>();
</script>

<template>
  <li class="skill" :class="'border-' + skill.level">
    <h3>{{ skill.name }}</h3>
    <p class="category" :class="computeCategoryClass(skill.category)">
      {{ skill.category }}
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
  font-size: 75%;
  font-weight: bold;
}

$opacity: 0.3;
.category-back-end {
  background-color: rgba(100, 100, 255, $opacity);
}
.category-front-end {
  background-color: rgba(255, 100, 100, $opacity);
}
.category-dbms {
  background-color: rgba(100, 255, 100, $opacity);
}
.category-test-ci {
  background-color: rgba(255, 255, 50, $opacity);
}
.category-misc {
  background-color: rgba(200, 200, 200, $opacity);
}

.skill > h3 {
  font-size: 1.3rem;
  line-height: 1.3rem;
  margin-bottom: 16px;
  padding-top: 16px;
  text-align: center;
}
.skill {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 8px;
  width: 8rem;
  height: 8rem;
  transition: 0.4s;
}

.skill:hover {
  background: $primary-color-light;
  color: $black;
}

.level {
  font-size: 0.6rem;
}
</style>
