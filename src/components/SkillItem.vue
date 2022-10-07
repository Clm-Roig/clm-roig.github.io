<script setup lang="ts">
import type { Skill } from "../models/Skill";

defineProps<{
  skill: Skill;
}>();
</script>

<template>
  <li class="skill" :class="'border-' + skill.level">
    <h3>{{ skill.name }}</h3>
    <div class="level">
      <!-- eslint-disable-next-line vue/valid-v-for vue/no-unused-vars -->
      <span v-for="x in skill.level" :key="skill.level">⭐</span>
    </div>
  </li>
</template>

<style lang="scss">
$border-width: 2px;
$border-radius: 35%;

@mixin border {
  border: $border-width solid $primary-color;
  border-radius: $border-radius;
}

@mixin additional-border {
  @include border;
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.skill > h3 {
  font-size: 1.3rem;
  line-height: 1.6rem;
  text-align: center;
}
.skill {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 8px;
  width: 8rem;
  height: 8rem;
  transition: 1s;
}

.skill:hover {
  background: $primary-color-light;
  color: $black;
}

@keyframes rotating {
  to {
    transform: rotate(360deg);
  }
}

.skill:hover.border-3::before,
.skill:hover.border-4::after,
.skill:hover.border-4::before {
  animation: rotating 2s linear infinite;
}

.border-1 {
  @include border;
  border-style: dashed;
}

.border-2,
.border-3,
.border-4 {
  @include border;
}

.border-3::before,
.border-4::before,
.border-4::after {
  @include additional-border;
}

.border-3::before {
  transform: rotate(45deg);
  border-color: $primary-color-light;
}

.border-4::before {
  transform: rotate(30deg);
  border-color: $primary-color-light;
}

.border-4::after {
  transform: rotate(60deg);
  border-color: $primary-color-dark;
  z-index: -1;
}

.level {
  font-size: 0.6rem;
}
</style>
