<script setup lang="ts">
defineProps<{
  darkBg?: boolean;
}>();
</script>

<template>
  <section class="section" :class="darkBg ? 'section--dark-bg' : ''">
    <slot></slot>
  </section>
</template>

<style scoped lang="scss">
.section {
  padding: calc($sidebar-width + 4px);
  &--dark-bg {
    background-color: $black;
  }
  @media screen and (min-width: 1000px) {
    padding: calc(2 * $sidebar-width);
  }
}
</style>
